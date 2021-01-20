# babelJS-gen-gen
Tired of manually writing BabelJS generation code for JavaScript? 
You're not alone.

Given a JS file, `babelJS-gen-gen` generates a TypeScript program that generates the BabelJS generation code to generate this file.

## Installation/Setup
1. Clone this repository
2. `npm install` in the repo root

### Dependencies
* Something to compile/run TypeScript (recommended: either `tsc` or `ts-node`)
* `nodejs` (ensure the version is new enough to natively support ESM)
* `npm`

## Usage
The arguments to `babeljs-gen-gen` are as follows:
* `file_to_gengen`: the JS file to generate generation code for
* *optional* `gen_full_script`: if `true`, the output is a runnable TypeScript program that will generate the JS and print it to console. 
  The default behaviour is to generate only the generation code (for easy pasting into your own program).
* *optional* `output_file`: if specified, output the generation code to this file.
  The default behaviour is to print to console.
  
### Example of code generated
There is an example of a JS file and corresponding generated generation code in the `Example` directory.
* `file.js` is the sample input JS file
* `sample_output.ts` is the corresponding generated generation script

To recreate: `ts-node gen_babel_gencode.ts --file_to_gengen Example/file.js --gen_full_script true`

Running `ts-node Example/sample_output.ts` will print the same code as contained in `file.js`.

#### Example commands using `ts-node`
```
ts-node gen_babel_gencode.ts --file_to_gengen file.js --gen_full_script true --output_file output.js
ts-node gen_babel_gencode.ts --file_to_gengen file.js --output_file output.js
ts-node gen_babel_gencode.ts --file_to_gengen file.js
```

#### Example commands using `tsc`
```
npm run build  # equivalent to tsc *.ts
node gen_babel_gencode.js --file_to_gengen file.js --gen_full_script true --output_file output.js
node gen_babel_gencode.js --file_to_gengen file.js --output_file output.js
node gen_babel_gencode.js --file_to_gengen file.js
```

