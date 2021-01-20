import { argv } from 'yargs';
import * as babel from '@babel/types';
import { parse } from '@babel/parser';
import { default as generate } from '@babel/generator';
import { default as traverse } from '@babel/traverse';
import * as fs from 'fs';

// list of properties on the babel nodes that we are excluding from the generator
let KEYS_TO_EXCLUDE: string[] = [ "start", "end", "loc", "range", "extra", "ID_tag" ];

// if it's a node, we assign the node_map entry corresponding to this node 
// if it's an array, we recurse into the array 
// else, if it's a literal, we just assign the value itself
// note: there are no dict-style objects in the babel types, which is why we don't need a case for that 
// but just in case we have an error state
function create_rep( x: any): string {
	if( babel.isNode( x)) {
		return `node_map["${(<any>x).ID_tag}"]`;
	} else if( x instanceof Array) {
		return "Array(" + x.map( (elt) => create_rep(elt)).join(", ") + ")";
	} else if ( x == undefined) {
		return "undefined";
	} else if( typeof(x) == "object") {
		return "{" + Object.keys(x).map( (k) => `${k}` + ": " + create_rep(x[k])).join(", ") + "}";
	} else if( typeof(x) == "string") {
		return `${get_string_rep( x)}`; // return a string with quotes so it'll be a string in gen code
	} else {
		return x;
	}
}

function get_string_rep( s: string): string {
	if( !s.includes("\n")) {
		return `"${s}"`; // if no new lines, default string is fine
	} else {
		return `\`${s.replace(/`/g, "\`")}\``; // if it has new lines, return with back ticks 
						   // and replace current back ticks with \`
				   		   // (could do this in general, but it's ugly)
	}
}

// convert first character of a string to lowercase 
// needed because babel's type creation uses lowercase class names (babel.identifier(...) vs type babel.Identifier)
function lowercase_first_char( str: string): string {
	return str[0].toLowerCase() + str.substr(1, str.length);
}

function parse_AST_into_gen( ast: babel.File): string {
	// first, assign IDs to all the nodes
	// and build the node map we'll be using
	let nodemap_init: string = "let node_map = {};\n";
	let node_counter = 0;
	traverse(ast, {
		enter(path) {
			let cur_node_ID = `new_${path.node.type}_${node_counter}`;
			(<any>(path.node)).ID_tag = cur_node_ID;
			++ node_counter;
		}
	});


	let node_creates = ""
	traverse(ast, {
	  enter(path) {
	    let cur_ID = (<any>(path.node)).ID_tag;
	    let include_keys = Object.keys( path.node).filter( (k) => path.node[k] != undefined && !KEYS_TO_EXCLUDE.includes(k))

	    // now, for each of the relevant keys, we assign the properties
	    let node_rep:string = "{" + include_keys.map((k) => k + ":" + create_rep(path.node[k])).join(", ") + "}";
	    // update by reference
	    node_creates = `node_map["${cur_ID}"] = <babel.${( path.node.type)}>(<any>${node_rep});\n` + node_creates;
	  }
	});
	return nodemap_init + node_creates;
}



if ( !argv.file_to_gengen ) {
	console.log( "Usage: ts-node gen_babel_gencode.ts --file_to_gengen file.js [--gen_full_script bool] [--output_file output.js]");
	process.exit(1);
}

let code_string: string = fs.readFileSync( argv.file_to_gengen, 'utf8');

let ast: babel.File;
let esmMode: boolean;

try {
	ast = parse(code_string, {sourceType: "unambiguous", plugins: [ "classProperties"]});
	esmMode = ast.program.sourceType == "module";
} catch(e) {
	console.error("Yikes... parsing error in " + argv.file_to_gengen + ":  " + e);
	process.exit(1);
}

let gengen_code: string = parse_AST_into_gen( ast);

if( argv.gen_full_script == "true") {
	gengen_code = `import * as babel from '@babel/types';
				   import { parse } from '@babel/parser';
				   import { default as generate } from '@babel/generator';

				   function gen_code() {
						${gengen_code}
						return generate(node_map["new_Program_0"]).code; // always the first node
				   }

				   console.log(gen_code());`	
}

// format
gengen_code = generate(parse(gengen_code, {sourceType: "unambiguous", plugins: [ "classProperties", "typescript"]})).code

if( argv.output_file) {
	fs.writeFileSync( argv.output_file, gengen_code);
} else {
	console.log( gengen_code);
}


