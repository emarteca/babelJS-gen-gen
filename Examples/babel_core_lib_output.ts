import * as babel from '@babel/types';
import { parse } from '@babel/parser';
import { default as generate } from '@babel/generator';

function gen_code() {
  let node_map = {};
  node_map["new_Identifier_969"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "alias"
  }));
  node_map["new_TemplateElement_968"] = (<babel.TemplateElement> (<any> {
    type: "TemplateElement",
    value: {
      raw: ") Babel 5 plugin is being run with an unsupported Babel version.",
      cooked: ") Babel 5 plugin is being run with an unsupported Babel version."
    },
    tail: true
  }));
  node_map["new_TemplateElement_967"] = (<babel.TemplateElement> (<any> {
    type: "TemplateElement",
    value: {
      raw: "The (",
      cooked: "The ("
    },
    tail: false
  }));
  node_map["new_TemplateLiteral_966"] = (<babel.TemplateLiteral> (<any> {
    type: "TemplateLiteral",
    expressions: Array(node_map["new_Identifier_969"]),
    quasis: Array(node_map["new_TemplateElement_967"], node_map["new_TemplateElement_968"])
  }));
  node_map["new_Identifier_965"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Error"
  }));
  node_map["new_NewExpression_964"] = (<babel.NewExpression> (<any> {
    type: "NewExpression",
    callee: node_map["new_Identifier_965"],
    arguments: Array(node_map["new_TemplateLiteral_966"])
  }));
  node_map["new_ThrowStatement_963"] = (<babel.ThrowStatement> (<any> {
    type: "ThrowStatement",
    argument: node_map["new_NewExpression_964"]
  }));
  node_map["new_BlockStatement_962"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ThrowStatement_963"]),
    directives: Array()
  }));
  node_map["new_Identifier_961"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "alias"
  }));
  node_map["new_Identifier_960"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Plugin"
  }));
  node_map["new_FunctionDeclaration_959"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_960"],
    generator: false,
    async: false,
    params: Array(node_map["new_Identifier_961"]),
    body: node_map["new_BlockStatement_962"]
  }));
  node_map["new_Identifier_958"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "OptionManager"
  }));
  node_map["new_Identifier_957"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "OptionManager"
  }));
  node_map["new_Identifier_956"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_955"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_956"],
    computed: false,
    property: node_map["new_Identifier_957"]
  }));
  node_map["new_AssignmentExpression_954"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_955"],
    right: node_map["new_Identifier_958"]
  }));
  node_map["new_ExpressionStatement_953"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_954"]
  }));
  node_map["new_Identifier_952"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "opts"
  }));
  node_map["new_Identifier_951"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadOptions"
  }));
  node_map["new_Identifier_950"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_949"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_950"],
    computed: false,
    property: node_map["new_Identifier_951"]
  }));
  node_map["new_NumericLiteral_948"] = (<babel.NumericLiteral> (<any> {
    type: "NumericLiteral",
    value: 0
  }));
  node_map["new_SequenceExpression_947"] = (<babel.SequenceExpression> (<any> {
    type: "SequenceExpression",
    expressions: Array(node_map["new_NumericLiteral_948"], node_map["new_MemberExpression_949"])
  }));
  node_map["new_CallExpression_946"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_SequenceExpression_947"],
    arguments: Array(node_map["new_Identifier_952"])
  }));
  node_map["new_ReturnStatement_945"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_CallExpression_946"]
  }));
  node_map["new_BlockStatement_944"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_945"]),
    directives: Array()
  }));
  node_map["new_Identifier_943"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "opts"
  }));
  node_map["new_Identifier_942"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "init"
  }));
  node_map["new_ClassMethod_941"] = (<babel.ClassMethod> (<any> {
    type: "ClassMethod",
    static: false,
    key: node_map["new_Identifier_942"],
    computed: false,
    kind: "method",
    generator: false,
    async: false,
    params: Array(node_map["new_Identifier_943"]),
    body: node_map["new_BlockStatement_944"]
  }));
  node_map["new_ClassBody_940"] = (<babel.ClassBody> (<any> {
    type: "ClassBody",
    body: Array(node_map["new_ClassMethod_941"])
  }));
  node_map["new_Identifier_939"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "OptionManager"
  }));
  node_map["new_ClassDeclaration_938"] = (<babel.ClassDeclaration> (<any> {
    type: "ClassDeclaration",
    id: node_map["new_Identifier_939"],
    body: node_map["new_ClassBody_940"]
  }));
  node_map["new_Identifier_937"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "DEFAULT_EXTENSIONS"
  }));
  node_map["new_Identifier_936"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "DEFAULT_EXTENSIONS"
  }));
  node_map["new_Identifier_935"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_934"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_935"],
    computed: false,
    property: node_map["new_Identifier_936"]
  }));
  node_map["new_AssignmentExpression_933"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_934"],
    right: node_map["new_Identifier_937"]
  }));
  node_map["new_ExpressionStatement_932"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_933"]
  }));
  node_map["new_StringLiteral_931"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: ".mjs"
  }));
  node_map["new_StringLiteral_930"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: ".es"
  }));
  node_map["new_StringLiteral_929"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: ".es6"
  }));
  node_map["new_StringLiteral_928"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: ".jsx"
  }));
  node_map["new_StringLiteral_927"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: ".js"
  }));
  node_map["new_ArrayExpression_926"] = (<babel.ArrayExpression> (<any> {
    type: "ArrayExpression",
    elements: Array(node_map["new_StringLiteral_927"], node_map["new_StringLiteral_928"], node_map["new_StringLiteral_929"], node_map["new_StringLiteral_930"], node_map["new_StringLiteral_931"])
  }));
  node_map["new_Identifier_925"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "freeze"
  }));
  node_map["new_Identifier_924"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_923"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_924"],
    computed: false,
    property: node_map["new_Identifier_925"]
  }));
  node_map["new_CallExpression_922"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_923"],
    arguments: Array(node_map["new_ArrayExpression_926"])
  }));
  node_map["new_Identifier_921"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "DEFAULT_EXTENSIONS"
  }));
  node_map["new_VariableDeclarator_920"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_921"],
    init: node_map["new_CallExpression_922"]
  }));
  node_map["new_VariableDeclaration_919"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_920"]),
    kind: "const"
  }));
  node_map["new_Identifier_918"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_917"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_ObjectProperty_916"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_917"],
    computed: false,
    shorthand: false,
    value: node_map["new_Identifier_918"]
  }));
  node_map["new_ObjectExpression_915"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_916"])
  }));
  node_map["new_Identifier_914"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_913"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "__esModule"
  }));
  node_map["new_Identifier_912"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_MemberExpression_911"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_912"],
    computed: false,
    property: node_map["new_Identifier_913"]
  }));
  node_map["new_Identifier_910"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_LogicalExpression_909"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_Identifier_910"],
    operator: "&&",
    right: node_map["new_MemberExpression_911"]
  }));
  node_map["new_ConditionalExpression_908"] = (<babel.ConditionalExpression> (<any> {
    type: "ConditionalExpression",
    test: node_map["new_LogicalExpression_909"],
    consequent: node_map["new_Identifier_914"],
    alternate: node_map["new_ObjectExpression_915"]
  }));
  node_map["new_ReturnStatement_907"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_ConditionalExpression_908"]
  }));
  node_map["new_BlockStatement_906"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_907"]),
    directives: Array()
  }));
  node_map["new_Identifier_905"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_904"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireDefault"
  }));
  node_map["new_FunctionDeclaration_903"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_904"],
    generator: false,
    async: false,
    params: Array(node_map["new_Identifier_905"]),
    body: node_map["new_BlockStatement_906"]
  }));
  node_map["new_Identifier_902"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_ReturnStatement_901"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_902"]
  }));
  node_map["new_Identifier_900"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_Identifier_899"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_898"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "set"
  }));
  node_map["new_Identifier_897"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_MemberExpression_896"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_897"],
    computed: false,
    property: node_map["new_Identifier_898"]
  }));
  node_map["new_CallExpression_895"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_896"],
    arguments: Array(node_map["new_Identifier_899"], node_map["new_Identifier_900"])
  }));
  node_map["new_ExpressionStatement_894"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_895"]
  }));
  node_map["new_BlockStatement_893"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ExpressionStatement_894"]),
    directives: Array()
  }));
  node_map["new_Identifier_892"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_IfStatement_891"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_Identifier_892"],
    consequent: node_map["new_BlockStatement_893"]
  }));
  node_map["new_Identifier_890"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_889"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_Identifier_888"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_MemberExpression_887"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_888"],
    computed: false,
    property: node_map["new_Identifier_889"]
  }));
  node_map["new_AssignmentExpression_886"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_887"],
    right: node_map["new_Identifier_890"]
  }));
  node_map["new_ExpressionStatement_885"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_886"]
  }));
  node_map["new_Identifier_884"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_Identifier_883"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_MemberExpression_882"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_883"],
    computed: true,
    property: node_map["new_Identifier_884"]
  }));
  node_map["new_Identifier_881"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_Identifier_880"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_MemberExpression_879"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_880"],
    computed: true,
    property: node_map["new_Identifier_881"]
  }));
  node_map["new_AssignmentExpression_878"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_879"],
    right: node_map["new_MemberExpression_882"]
  }));
  node_map["new_ExpressionStatement_877"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_878"]
  }));
  node_map["new_BlockStatement_876"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ExpressionStatement_877"]),
    directives: Array()
  }));
  node_map["new_Identifier_875"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "desc"
  }));
  node_map["new_Identifier_874"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_Identifier_873"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_Identifier_872"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_871"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_870"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_871"],
    computed: false,
    property: node_map["new_Identifier_872"]
  }));
  node_map["new_CallExpression_869"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_870"],
    arguments: Array(node_map["new_Identifier_873"], node_map["new_Identifier_874"], node_map["new_Identifier_875"])
  }));
  node_map["new_ExpressionStatement_868"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_869"]
  }));
  node_map["new_BlockStatement_867"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ExpressionStatement_868"]),
    directives: Array()
  }));
  node_map["new_Identifier_866"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "set"
  }));
  node_map["new_Identifier_865"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "desc"
  }));
  node_map["new_MemberExpression_864"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_865"],
    computed: false,
    property: node_map["new_Identifier_866"]
  }));
  node_map["new_Identifier_863"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_Identifier_862"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "desc"
  }));
  node_map["new_MemberExpression_861"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_862"],
    computed: false,
    property: node_map["new_Identifier_863"]
  }));
  node_map["new_LogicalExpression_860"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_MemberExpression_861"],
    operator: "||",
    right: node_map["new_MemberExpression_864"]
  }));
  node_map["new_Identifier_859"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "desc"
  }));
  node_map["new_LogicalExpression_858"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_Identifier_859"],
    operator: "&&",
    right: node_map["new_LogicalExpression_860"]
  }));
  node_map["new_IfStatement_857"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_LogicalExpression_858"],
    consequent: node_map["new_BlockStatement_867"],
    alternate: node_map["new_BlockStatement_876"]
  }));
  node_map["new_NullLiteral_856"] = (<babel.NullLiteral> (<any> {
    type: "NullLiteral"
  }));
  node_map["new_Identifier_855"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_Identifier_854"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_853"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "getOwnPropertyDescriptor"
  }));
  node_map["new_Identifier_852"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_851"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_852"],
    computed: false,
    property: node_map["new_Identifier_853"]
  }));
  node_map["new_CallExpression_850"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_851"],
    arguments: Array(node_map["new_Identifier_854"], node_map["new_Identifier_855"])
  }));
  node_map["new_Identifier_849"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "hasPropertyDescriptor"
  }));
  node_map["new_ConditionalExpression_848"] = (<babel.ConditionalExpression> (<any> {
    type: "ConditionalExpression",
    test: node_map["new_Identifier_849"],
    consequent: node_map["new_CallExpression_850"],
    alternate: node_map["new_NullLiteral_856"]
  }));
  node_map["new_Identifier_847"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "desc"
  }));
  node_map["new_VariableDeclarator_846"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_847"],
    init: node_map["new_ConditionalExpression_848"]
  }));
  node_map["new_VariableDeclaration_845"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_846"]),
    kind: "var"
  }));
  node_map["new_BlockStatement_844"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_VariableDeclaration_845"], node_map["new_IfStatement_857"]),
    directives: Array()
  }));
  node_map["new_Identifier_843"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_Identifier_842"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_841"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "call"
  }));
  node_map["new_Identifier_840"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "hasOwnProperty"
  }));
  node_map["new_Identifier_839"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "prototype"
  }));
  node_map["new_Identifier_838"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_837"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_838"],
    computed: false,
    property: node_map["new_Identifier_839"]
  }));
  node_map["new_MemberExpression_836"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_MemberExpression_837"],
    computed: false,
    property: node_map["new_Identifier_840"]
  }));
  node_map["new_MemberExpression_835"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_MemberExpression_836"],
    computed: false,
    property: node_map["new_Identifier_841"]
  }));
  node_map["new_CallExpression_834"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_835"],
    arguments: Array(node_map["new_Identifier_842"], node_map["new_Identifier_843"])
  }));
  node_map["new_IfStatement_833"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_CallExpression_834"],
    consequent: node_map["new_BlockStatement_844"]
  }));
  node_map["new_BlockStatement_832"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_IfStatement_833"]),
    directives: Array()
  }));
  node_map["new_Identifier_831"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_830"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "key"
  }));
  node_map["new_VariableDeclarator_829"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_830"]
  }));
  node_map["new_VariableDeclaration_828"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_829"]),
    kind: "var"
  }));
  node_map["new_ForInStatement_827"] = (<babel.ForInStatement> (<any> {
    type: "ForInStatement",
    left: node_map["new_VariableDeclaration_828"],
    right: node_map["new_Identifier_831"],
    body: node_map["new_BlockStatement_832"]
  }));
  node_map["new_Identifier_826"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "getOwnPropertyDescriptor"
  }));
  node_map["new_Identifier_825"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_824"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_825"],
    computed: false,
    property: node_map["new_Identifier_826"]
  }));
  node_map["new_Identifier_823"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_822"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_821"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_822"],
    computed: false,
    property: node_map["new_Identifier_823"]
  }));
  node_map["new_LogicalExpression_820"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_MemberExpression_821"],
    operator: "&&",
    right: node_map["new_MemberExpression_824"]
  }));
  node_map["new_Identifier_819"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "hasPropertyDescriptor"
  }));
  node_map["new_VariableDeclarator_818"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_819"],
    init: node_map["new_LogicalExpression_820"]
  }));
  node_map["new_VariableDeclaration_817"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_818"]),
    kind: "var"
  }));
  node_map["new_ObjectExpression_816"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array()
  }));
  node_map["new_Identifier_815"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "newObj"
  }));
  node_map["new_VariableDeclarator_814"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_815"],
    init: node_map["new_ObjectExpression_816"]
  }));
  node_map["new_VariableDeclaration_813"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_814"]),
    kind: "var"
  }));
  node_map["new_Identifier_812"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_811"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_Identifier_810"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_MemberExpression_809"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_810"],
    computed: false,
    property: node_map["new_Identifier_811"]
  }));
  node_map["new_CallExpression_808"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_809"],
    arguments: Array(node_map["new_Identifier_812"])
  }));
  node_map["new_ReturnStatement_807"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_CallExpression_808"]
  }));
  node_map["new_BlockStatement_806"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_807"]),
    directives: Array()
  }));
  node_map["new_Identifier_805"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_804"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "has"
  }));
  node_map["new_Identifier_803"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_MemberExpression_802"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_803"],
    computed: false,
    property: node_map["new_Identifier_804"]
  }));
  node_map["new_CallExpression_801"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_802"],
    arguments: Array(node_map["new_Identifier_805"])
  }));
  node_map["new_Identifier_800"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_LogicalExpression_799"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_Identifier_800"],
    operator: "&&",
    right: node_map["new_CallExpression_801"]
  }));
  node_map["new_IfStatement_798"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_LogicalExpression_799"],
    consequent: node_map["new_BlockStatement_806"]
  }));
  node_map["new_Identifier_797"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_getRequireWildcardCache"
  }));
  node_map["new_CallExpression_796"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_797"],
    arguments: Array()
  }));
  node_map["new_Identifier_795"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_VariableDeclarator_794"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_795"],
    init: node_map["new_CallExpression_796"]
  }));
  node_map["new_VariableDeclaration_793"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_794"]),
    kind: "var"
  }));
  node_map["new_Identifier_792"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_791"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_ObjectProperty_790"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_791"],
    computed: false,
    shorthand: false,
    value: node_map["new_Identifier_792"]
  }));
  node_map["new_ObjectExpression_789"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_790"])
  }));
  node_map["new_ReturnStatement_788"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_ObjectExpression_789"]
  }));
  node_map["new_BlockStatement_787"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_788"]),
    directives: Array()
  }));
  node_map["new_StringLiteral_786"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "function"
  }));
  node_map["new_Identifier_785"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_UnaryExpression_784"] = (<babel.UnaryExpression> (<any> {
    type: "UnaryExpression",
    operator: "typeof",
    prefix: true,
    argument: node_map["new_Identifier_785"]
  }));
  node_map["new_BinaryExpression_783"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_UnaryExpression_784"],
    operator: "!==",
    right: node_map["new_StringLiteral_786"]
  }));
  node_map["new_StringLiteral_782"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "object"
  }));
  node_map["new_Identifier_781"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_UnaryExpression_780"] = (<babel.UnaryExpression> (<any> {
    type: "UnaryExpression",
    operator: "typeof",
    prefix: true,
    argument: node_map["new_Identifier_781"]
  }));
  node_map["new_BinaryExpression_779"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_UnaryExpression_780"],
    operator: "!==",
    right: node_map["new_StringLiteral_782"]
  }));
  node_map["new_LogicalExpression_778"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_BinaryExpression_779"],
    operator: "&&",
    right: node_map["new_BinaryExpression_783"]
  }));
  node_map["new_NullLiteral_777"] = (<babel.NullLiteral> (<any> {
    type: "NullLiteral"
  }));
  node_map["new_Identifier_776"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_BinaryExpression_775"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_Identifier_776"],
    operator: "===",
    right: node_map["new_NullLiteral_777"]
  }));
  node_map["new_LogicalExpression_774"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_BinaryExpression_775"],
    operator: "||",
    right: node_map["new_LogicalExpression_778"]
  }));
  node_map["new_IfStatement_773"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_LogicalExpression_774"],
    consequent: node_map["new_BlockStatement_787"]
  }));
  node_map["new_Identifier_772"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_ReturnStatement_771"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_772"]
  }));
  node_map["new_BlockStatement_770"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_771"]),
    directives: Array()
  }));
  node_map["new_Identifier_769"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "__esModule"
  }));
  node_map["new_Identifier_768"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_MemberExpression_767"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_768"],
    computed: false,
    property: node_map["new_Identifier_769"]
  }));
  node_map["new_Identifier_766"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_LogicalExpression_765"] = (<babel.LogicalExpression> (<any> {
    type: "LogicalExpression",
    left: node_map["new_Identifier_766"],
    operator: "&&",
    right: node_map["new_MemberExpression_767"]
  }));
  node_map["new_IfStatement_764"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_LogicalExpression_765"],
    consequent: node_map["new_BlockStatement_770"]
  }));
  node_map["new_BlockStatement_763"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_IfStatement_764"], node_map["new_IfStatement_773"], node_map["new_VariableDeclaration_793"], node_map["new_IfStatement_798"], node_map["new_VariableDeclaration_813"], node_map["new_VariableDeclaration_817"], node_map["new_ForInStatement_827"], node_map["new_ExpressionStatement_885"], node_map["new_IfStatement_891"], node_map["new_ReturnStatement_901"]),
    directives: Array()
  }));
  node_map["new_Identifier_762"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "obj"
  }));
  node_map["new_Identifier_761"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireWildcard"
  }));
  node_map["new_FunctionDeclaration_760"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_761"],
    generator: false,
    async: false,
    params: Array(node_map["new_Identifier_762"]),
    body: node_map["new_BlockStatement_763"]
  }));
  node_map["new_Identifier_759"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_ReturnStatement_758"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_759"]
  }));
  node_map["new_Identifier_757"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_ReturnStatement_756"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_757"]
  }));
  node_map["new_BlockStatement_755"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_756"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_754"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_755"]
  }));
  node_map["new_Identifier_753"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_getRequireWildcardCache"
  }));
  node_map["new_AssignmentExpression_752"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_Identifier_753"],
    right: node_map["new_FunctionExpression_754"]
  }));
  node_map["new_ExpressionStatement_751"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_752"]
  }));
  node_map["new_Identifier_750"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "WeakMap"
  }));
  node_map["new_NewExpression_749"] = (<babel.NewExpression> (<any> {
    type: "NewExpression",
    callee: node_map["new_Identifier_750"],
    arguments: Array()
  }));
  node_map["new_Identifier_748"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "cache"
  }));
  node_map["new_VariableDeclarator_747"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_748"],
    init: node_map["new_NewExpression_749"]
  }));
  node_map["new_VariableDeclaration_746"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_747"]),
    kind: "var"
  }));
  node_map["new_NullLiteral_745"] = (<babel.NullLiteral> (<any> {
    type: "NullLiteral"
  }));
  node_map["new_ReturnStatement_744"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_NullLiteral_745"]
  }));
  node_map["new_StringLiteral_743"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "function"
  }));
  node_map["new_Identifier_742"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "WeakMap"
  }));
  node_map["new_UnaryExpression_741"] = (<babel.UnaryExpression> (<any> {
    type: "UnaryExpression",
    operator: "typeof",
    prefix: true,
    argument: node_map["new_Identifier_742"]
  }));
  node_map["new_BinaryExpression_740"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_UnaryExpression_741"],
    operator: "!==",
    right: node_map["new_StringLiteral_743"]
  }));
  node_map["new_IfStatement_739"] = (<babel.IfStatement> (<any> {
    type: "IfStatement",
    test: node_map["new_BinaryExpression_740"],
    consequent: node_map["new_ReturnStatement_744"]
  }));
  node_map["new_BlockStatement_738"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_IfStatement_739"], node_map["new_VariableDeclaration_746"], node_map["new_ExpressionStatement_751"], node_map["new_ReturnStatement_758"]),
    directives: Array()
  }));
  node_map["new_Identifier_737"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_getRequireWildcardCache"
  }));
  node_map["new_FunctionDeclaration_736"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_737"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_738"]
  }));
  node_map["new_StringLiteral_735"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./parse"
  }));
  node_map["new_Identifier_734"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_733"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_734"],
    arguments: Array(node_map["new_StringLiteral_735"])
  }));
  node_map["new_Identifier_732"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parse"
  }));
  node_map["new_VariableDeclarator_731"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_732"],
    init: node_map["new_CallExpression_733"]
  }));
  node_map["new_VariableDeclaration_730"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_731"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_729"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./transform-ast"
  }));
  node_map["new_Identifier_728"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_727"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_728"],
    arguments: Array(node_map["new_StringLiteral_729"])
  }));
  node_map["new_Identifier_726"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformAst"
  }));
  node_map["new_VariableDeclarator_725"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_726"],
    init: node_map["new_CallExpression_727"]
  }));
  node_map["new_VariableDeclaration_724"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_725"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_723"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./transform-file"
  }));
  node_map["new_Identifier_722"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_721"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_722"],
    arguments: Array(node_map["new_StringLiteral_723"])
  }));
  node_map["new_Identifier_720"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformFile"
  }));
  node_map["new_VariableDeclarator_719"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_720"],
    init: node_map["new_CallExpression_721"]
  }));
  node_map["new_VariableDeclaration_718"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_719"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_717"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./transform"
  }));
  node_map["new_Identifier_716"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_715"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_716"],
    arguments: Array(node_map["new_StringLiteral_717"])
  }));
  node_map["new_Identifier_714"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transform"
  }));
  node_map["new_VariableDeclarator_713"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_714"],
    init: node_map["new_CallExpression_715"]
  }));
  node_map["new_VariableDeclaration_712"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_713"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_711"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./config"
  }));
  node_map["new_Identifier_710"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_709"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_710"],
    arguments: Array(node_map["new_StringLiteral_711"])
  }));
  node_map["new_Identifier_708"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_VariableDeclarator_707"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_708"],
    init: node_map["new_CallExpression_709"]
  }));
  node_map["new_VariableDeclaration_706"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_707"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_705"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./config/item"
  }));
  node_map["new_Identifier_704"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_703"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_704"],
    arguments: Array(node_map["new_StringLiteral_705"])
  }));
  node_map["new_Identifier_702"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_item"
  }));
  node_map["new_VariableDeclarator_701"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_702"],
    init: node_map["new_CallExpression_703"]
  }));
  node_map["new_VariableDeclaration_700"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_701"]),
    kind: "var"
  }));
  node_map["new_Identifier_699"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_698"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_699"]
  }));
  node_map["new_Identifier_697"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_696"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_697"]
  }));
  node_map["new_BlockStatement_695"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_696"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_694"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_695"]
  }));
  node_map["new_Identifier_693"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_template"
  }));
  node_map["new_AssignmentExpression_692"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_Identifier_693"],
    right: node_map["new_FunctionExpression_694"]
  }));
  node_map["new_ExpressionStatement_691"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_692"]
  }));
  node_map["new_StringLiteral_690"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "@babel/template"
  }));
  node_map["new_Identifier_689"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_688"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_689"],
    arguments: Array(node_map["new_StringLiteral_690"])
  }));
  node_map["new_Identifier_687"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireDefault"
  }));
  node_map["new_CallExpression_686"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_687"],
    arguments: Array(node_map["new_CallExpression_688"])
  }));
  node_map["new_Identifier_685"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_VariableDeclarator_684"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_685"],
    init: node_map["new_CallExpression_686"]
  }));
  node_map["new_VariableDeclaration_683"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_684"]),
    kind: "const"
  }));
  node_map["new_BlockStatement_682"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_VariableDeclaration_683"], node_map["new_ExpressionStatement_691"], node_map["new_ReturnStatement_698"]),
    directives: Array()
  }));
  node_map["new_Identifier_681"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_template"
  }));
  node_map["new_FunctionDeclaration_680"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_681"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_682"]
  }));
  node_map["new_Identifier_679"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_678"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_679"]
  }));
  node_map["new_Identifier_677"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_676"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_677"]
  }));
  node_map["new_BlockStatement_675"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_676"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_674"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_675"]
  }));
  node_map["new_Identifier_673"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_traverse"
  }));
  node_map["new_AssignmentExpression_672"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_Identifier_673"],
    right: node_map["new_FunctionExpression_674"]
  }));
  node_map["new_ExpressionStatement_671"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_672"]
  }));
  node_map["new_StringLiteral_670"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "@babel/traverse"
  }));
  node_map["new_Identifier_669"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_668"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_669"],
    arguments: Array(node_map["new_StringLiteral_670"])
  }));
  node_map["new_Identifier_667"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireDefault"
  }));
  node_map["new_CallExpression_666"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_667"],
    arguments: Array(node_map["new_CallExpression_668"])
  }));
  node_map["new_Identifier_665"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_VariableDeclarator_664"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_665"],
    init: node_map["new_CallExpression_666"]
  }));
  node_map["new_VariableDeclaration_663"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_664"]),
    kind: "const"
  }));
  node_map["new_BlockStatement_662"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_VariableDeclaration_663"], node_map["new_ExpressionStatement_671"], node_map["new_ReturnStatement_678"]),
    directives: Array()
  }));
  node_map["new_Identifier_661"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_traverse"
  }));
  node_map["new_FunctionDeclaration_660"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_661"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_662"]
  }));
  node_map["new_Identifier_659"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_658"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_659"]
  }));
  node_map["new_Identifier_657"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_656"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_657"]
  }));
  node_map["new_BlockStatement_655"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_656"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_654"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_655"]
  }));
  node_map["new_Identifier_653"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parser"
  }));
  node_map["new_AssignmentExpression_652"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_Identifier_653"],
    right: node_map["new_FunctionExpression_654"]
  }));
  node_map["new_ExpressionStatement_651"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_652"]
  }));
  node_map["new_StringLiteral_650"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "@babel/parser"
  }));
  node_map["new_Identifier_649"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_648"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_649"],
    arguments: Array(node_map["new_StringLiteral_650"])
  }));
  node_map["new_Identifier_647"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_VariableDeclarator_646"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_647"],
    init: node_map["new_CallExpression_648"]
  }));
  node_map["new_VariableDeclaration_645"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_646"]),
    kind: "const"
  }));
  node_map["new_BlockStatement_644"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_VariableDeclaration_645"], node_map["new_ExpressionStatement_651"], node_map["new_ReturnStatement_658"]),
    directives: Array()
  }));
  node_map["new_Identifier_643"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parser"
  }));
  node_map["new_FunctionDeclaration_642"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_643"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_644"]
  }));
  node_map["new_Identifier_641"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_types"
  }));
  node_map["new_CallExpression_640"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_641"],
    arguments: Array()
  }));
  node_map["new_ReturnStatement_639"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_CallExpression_640"]
  }));
  node_map["new_BlockStatement_638"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_639"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_637"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_638"]
  }));
  node_map["new_Identifier_636"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_635"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_636"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_637"]
  }));
  node_map["new_BooleanLiteral_634"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_633"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_632"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_633"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_634"]
  }));
  node_map["new_ObjectExpression_631"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_632"], node_map["new_ObjectProperty_635"])
  }));
  node_map["new_StringLiteral_630"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "types"
  }));
  node_map["new_Identifier_629"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_628"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_627"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_626"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_627"],
    computed: false,
    property: node_map["new_Identifier_628"]
  }));
  node_map["new_CallExpression_625"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_626"],
    arguments: Array(node_map["new_Identifier_629"], node_map["new_StringLiteral_630"], node_map["new_ObjectExpression_631"])
  }));
  node_map["new_ExpressionStatement_624"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_625"]
  }));
  node_map["new_Identifier_623"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_622"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_623"]
  }));
  node_map["new_Identifier_621"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_ReturnStatement_620"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_Identifier_621"]
  }));
  node_map["new_BlockStatement_619"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_620"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_618"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_619"]
  }));
  node_map["new_Identifier_617"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_types"
  }));
  node_map["new_AssignmentExpression_616"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_Identifier_617"],
    right: node_map["new_FunctionExpression_618"]
  }));
  node_map["new_ExpressionStatement_615"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_616"]
  }));
  node_map["new_StringLiteral_614"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "@babel/types"
  }));
  node_map["new_Identifier_613"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_612"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_613"],
    arguments: Array(node_map["new_StringLiteral_614"])
  }));
  node_map["new_Identifier_611"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireWildcard"
  }));
  node_map["new_CallExpression_610"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_611"],
    arguments: Array(node_map["new_CallExpression_612"])
  }));
  node_map["new_Identifier_609"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "data"
  }));
  node_map["new_VariableDeclarator_608"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_609"],
    init: node_map["new_CallExpression_610"]
  }));
  node_map["new_VariableDeclaration_607"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_608"]),
    kind: "const"
  }));
  node_map["new_BlockStatement_606"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_VariableDeclaration_607"], node_map["new_ExpressionStatement_615"], node_map["new_ReturnStatement_622"]),
    directives: Array()
  }));
  node_map["new_Identifier_605"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_types"
  }));
  node_map["new_FunctionDeclaration_604"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_605"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_606"]
  }));
  node_map["new_StringLiteral_603"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./config/helpers/environment"
  }));
  node_map["new_Identifier_602"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_601"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_602"],
    arguments: Array(node_map["new_StringLiteral_603"])
  }));
  node_map["new_Identifier_600"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_environment"
  }));
  node_map["new_VariableDeclarator_599"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_600"],
    init: node_map["new_CallExpression_601"]
  }));
  node_map["new_VariableDeclaration_598"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_599"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_597"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "../package.json"
  }));
  node_map["new_Identifier_596"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_595"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_596"],
    arguments: Array(node_map["new_StringLiteral_597"])
  }));
  node_map["new_Identifier_594"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_package"
  }));
  node_map["new_VariableDeclarator_593"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_594"],
    init: node_map["new_CallExpression_595"]
  }));
  node_map["new_VariableDeclaration_592"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_593"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_591"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./config/files"
  }));
  node_map["new_Identifier_590"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_589"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_590"],
    arguments: Array(node_map["new_StringLiteral_591"])
  }));
  node_map["new_Identifier_588"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_files"
  }));
  node_map["new_VariableDeclarator_587"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_588"],
    init: node_map["new_CallExpression_589"]
  }));
  node_map["new_VariableDeclaration_586"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_587"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_585"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./tools/build-external-helpers"
  }));
  node_map["new_Identifier_584"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_583"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_584"],
    arguments: Array(node_map["new_StringLiteral_585"])
  }));
  node_map["new_Identifier_582"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireDefault"
  }));
  node_map["new_CallExpression_581"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_582"],
    arguments: Array(node_map["new_CallExpression_583"])
  }));
  node_map["new_Identifier_580"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_buildExternalHelpers"
  }));
  node_map["new_VariableDeclarator_579"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_580"],
    init: node_map["new_CallExpression_581"]
  }));
  node_map["new_VariableDeclaration_578"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_579"]),
    kind: "var"
  }));
  node_map["new_StringLiteral_577"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "./transformation/file/file"
  }));
  node_map["new_Identifier_576"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_575"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_576"],
    arguments: Array(node_map["new_StringLiteral_577"])
  }));
  node_map["new_Identifier_574"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_interopRequireDefault"
  }));
  node_map["new_CallExpression_573"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_574"],
    arguments: Array(node_map["new_CallExpression_575"])
  }));
  node_map["new_Identifier_572"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_file"
  }));
  node_map["new_VariableDeclarator_571"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_572"],
    init: node_map["new_CallExpression_573"]
  }));
  node_map["new_VariableDeclaration_570"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_571"]),
    kind: "var"
  }));
  node_map["new_NumericLiteral_569"] = (<babel.NumericLiteral> (<any> {
    type: "NumericLiteral",
    value: 0
  }));
  node_map["new_UnaryExpression_568"] = (<babel.UnaryExpression> (<any> {
    type: "UnaryExpression",
    operator: "void",
    prefix: true,
    argument: node_map["new_NumericLiteral_569"]
  }));
  node_map["new_Identifier_567"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "DEFAULT_EXTENSIONS"
  }));
  node_map["new_Identifier_566"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_565"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_566"],
    computed: false,
    property: node_map["new_Identifier_567"]
  }));
  node_map["new_AssignmentExpression_564"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_565"],
    right: node_map["new_UnaryExpression_568"]
  }));
  node_map["new_Identifier_563"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "OptionManager"
  }));
  node_map["new_Identifier_562"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_561"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_562"],
    computed: false,
    property: node_map["new_Identifier_563"]
  }));
  node_map["new_AssignmentExpression_560"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_561"],
    right: node_map["new_AssignmentExpression_564"]
  }));
  node_map["new_Identifier_559"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "types"
  }));
  node_map["new_Identifier_558"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_557"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_558"],
    computed: false,
    property: node_map["new_Identifier_559"]
  }));
  node_map["new_AssignmentExpression_556"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_557"],
    right: node_map["new_AssignmentExpression_560"]
  }));
  node_map["new_ExpressionStatement_555"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_556"]
  }));
  node_map["new_Identifier_554"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "parseAsync"
  }));
  node_map["new_Identifier_553"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parse"
  }));
  node_map["new_MemberExpression_552"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_553"],
    computed: false,
    property: node_map["new_Identifier_554"]
  }));
  node_map["new_ReturnStatement_551"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_552"]
  }));
  node_map["new_BlockStatement_550"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_551"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_549"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_550"]
  }));
  node_map["new_Identifier_548"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_547"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_548"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_549"]
  }));
  node_map["new_BooleanLiteral_546"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_545"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_544"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_545"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_546"]
  }));
  node_map["new_ObjectExpression_543"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_544"], node_map["new_ObjectProperty_547"])
  }));
  node_map["new_StringLiteral_542"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "parseAsync"
  }));
  node_map["new_Identifier_541"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_540"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_539"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_538"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_539"],
    computed: false,
    property: node_map["new_Identifier_540"]
  }));
  node_map["new_CallExpression_537"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_538"],
    arguments: Array(node_map["new_Identifier_541"], node_map["new_StringLiteral_542"], node_map["new_ObjectExpression_543"])
  }));
  node_map["new_ExpressionStatement_536"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_537"]
  }));
  node_map["new_Identifier_535"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "parseSync"
  }));
  node_map["new_Identifier_534"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parse"
  }));
  node_map["new_MemberExpression_533"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_534"],
    computed: false,
    property: node_map["new_Identifier_535"]
  }));
  node_map["new_ReturnStatement_532"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_533"]
  }));
  node_map["new_BlockStatement_531"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_532"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_530"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_531"]
  }));
  node_map["new_Identifier_529"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_528"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_529"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_530"]
  }));
  node_map["new_BooleanLiteral_527"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_526"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_525"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_526"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_527"]
  }));
  node_map["new_ObjectExpression_524"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_525"], node_map["new_ObjectProperty_528"])
  }));
  node_map["new_StringLiteral_523"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "parseSync"
  }));
  node_map["new_Identifier_522"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_521"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_520"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_519"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_520"],
    computed: false,
    property: node_map["new_Identifier_521"]
  }));
  node_map["new_CallExpression_518"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_519"],
    arguments: Array(node_map["new_Identifier_522"], node_map["new_StringLiteral_523"], node_map["new_ObjectExpression_524"])
  }));
  node_map["new_ExpressionStatement_517"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_518"]
  }));
  node_map["new_Identifier_516"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "parse"
  }));
  node_map["new_Identifier_515"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parse"
  }));
  node_map["new_MemberExpression_514"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_515"],
    computed: false,
    property: node_map["new_Identifier_516"]
  }));
  node_map["new_ReturnStatement_513"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_514"]
  }));
  node_map["new_BlockStatement_512"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_513"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_511"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_512"]
  }));
  node_map["new_Identifier_510"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_509"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_510"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_511"]
  }));
  node_map["new_BooleanLiteral_508"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_507"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_506"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_507"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_508"]
  }));
  node_map["new_ObjectExpression_505"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_506"], node_map["new_ObjectProperty_509"])
  }));
  node_map["new_StringLiteral_504"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "parse"
  }));
  node_map["new_Identifier_503"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_502"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_501"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_500"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_501"],
    computed: false,
    property: node_map["new_Identifier_502"]
  }));
  node_map["new_CallExpression_499"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_500"],
    arguments: Array(node_map["new_Identifier_503"], node_map["new_StringLiteral_504"], node_map["new_ObjectExpression_505"])
  }));
  node_map["new_ExpressionStatement_498"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_499"]
  }));
  node_map["new_Identifier_497"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFromAstAsync"
  }));
  node_map["new_Identifier_496"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformAst"
  }));
  node_map["new_MemberExpression_495"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_496"],
    computed: false,
    property: node_map["new_Identifier_497"]
  }));
  node_map["new_ReturnStatement_494"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_495"]
  }));
  node_map["new_BlockStatement_493"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_494"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_492"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_493"]
  }));
  node_map["new_Identifier_491"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_490"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_491"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_492"]
  }));
  node_map["new_BooleanLiteral_489"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_488"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_487"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_488"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_489"]
  }));
  node_map["new_ObjectExpression_486"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_487"], node_map["new_ObjectProperty_490"])
  }));
  node_map["new_StringLiteral_485"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFromAstAsync"
  }));
  node_map["new_Identifier_484"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_483"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_482"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_481"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_482"],
    computed: false,
    property: node_map["new_Identifier_483"]
  }));
  node_map["new_CallExpression_480"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_481"],
    arguments: Array(node_map["new_Identifier_484"], node_map["new_StringLiteral_485"], node_map["new_ObjectExpression_486"])
  }));
  node_map["new_ExpressionStatement_479"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_480"]
  }));
  node_map["new_Identifier_478"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFromAstSync"
  }));
  node_map["new_Identifier_477"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformAst"
  }));
  node_map["new_MemberExpression_476"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_477"],
    computed: false,
    property: node_map["new_Identifier_478"]
  }));
  node_map["new_ReturnStatement_475"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_476"]
  }));
  node_map["new_BlockStatement_474"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_475"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_473"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_474"]
  }));
  node_map["new_Identifier_472"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_471"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_472"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_473"]
  }));
  node_map["new_BooleanLiteral_470"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_469"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_468"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_469"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_470"]
  }));
  node_map["new_ObjectExpression_467"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_468"], node_map["new_ObjectProperty_471"])
  }));
  node_map["new_StringLiteral_466"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFromAstSync"
  }));
  node_map["new_Identifier_465"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_464"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_463"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_462"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_463"],
    computed: false,
    property: node_map["new_Identifier_464"]
  }));
  node_map["new_CallExpression_461"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_462"],
    arguments: Array(node_map["new_Identifier_465"], node_map["new_StringLiteral_466"], node_map["new_ObjectExpression_467"])
  }));
  node_map["new_ExpressionStatement_460"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_461"]
  }));
  node_map["new_Identifier_459"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFromAst"
  }));
  node_map["new_Identifier_458"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformAst"
  }));
  node_map["new_MemberExpression_457"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_458"],
    computed: false,
    property: node_map["new_Identifier_459"]
  }));
  node_map["new_ReturnStatement_456"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_457"]
  }));
  node_map["new_BlockStatement_455"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_456"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_454"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_455"]
  }));
  node_map["new_Identifier_453"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_452"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_453"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_454"]
  }));
  node_map["new_BooleanLiteral_451"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_450"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_449"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_450"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_451"]
  }));
  node_map["new_ObjectExpression_448"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_449"], node_map["new_ObjectProperty_452"])
  }));
  node_map["new_StringLiteral_447"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFromAst"
  }));
  node_map["new_Identifier_446"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_445"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_444"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_443"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_444"],
    computed: false,
    property: node_map["new_Identifier_445"]
  }));
  node_map["new_CallExpression_442"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_443"],
    arguments: Array(node_map["new_Identifier_446"], node_map["new_StringLiteral_447"], node_map["new_ObjectExpression_448"])
  }));
  node_map["new_ExpressionStatement_441"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_442"]
  }));
  node_map["new_Identifier_440"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFileAsync"
  }));
  node_map["new_Identifier_439"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformFile"
  }));
  node_map["new_MemberExpression_438"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_439"],
    computed: false,
    property: node_map["new_Identifier_440"]
  }));
  node_map["new_ReturnStatement_437"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_438"]
  }));
  node_map["new_BlockStatement_436"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_437"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_435"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_436"]
  }));
  node_map["new_Identifier_434"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_433"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_434"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_435"]
  }));
  node_map["new_BooleanLiteral_432"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_431"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_430"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_431"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_432"]
  }));
  node_map["new_ObjectExpression_429"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_430"], node_map["new_ObjectProperty_433"])
  }));
  node_map["new_StringLiteral_428"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFileAsync"
  }));
  node_map["new_Identifier_427"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_426"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_425"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_424"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_425"],
    computed: false,
    property: node_map["new_Identifier_426"]
  }));
  node_map["new_CallExpression_423"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_424"],
    arguments: Array(node_map["new_Identifier_427"], node_map["new_StringLiteral_428"], node_map["new_ObjectExpression_429"])
  }));
  node_map["new_ExpressionStatement_422"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_423"]
  }));
  node_map["new_Identifier_421"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFileSync"
  }));
  node_map["new_Identifier_420"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformFile"
  }));
  node_map["new_MemberExpression_419"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_420"],
    computed: false,
    property: node_map["new_Identifier_421"]
  }));
  node_map["new_ReturnStatement_418"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_419"]
  }));
  node_map["new_BlockStatement_417"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_418"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_416"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_417"]
  }));
  node_map["new_Identifier_415"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_414"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_415"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_416"]
  }));
  node_map["new_BooleanLiteral_413"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_412"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_411"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_412"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_413"]
  }));
  node_map["new_ObjectExpression_410"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_411"], node_map["new_ObjectProperty_414"])
  }));
  node_map["new_StringLiteral_409"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFileSync"
  }));
  node_map["new_Identifier_408"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_407"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_406"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_405"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_406"],
    computed: false,
    property: node_map["new_Identifier_407"]
  }));
  node_map["new_CallExpression_404"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_405"],
    arguments: Array(node_map["new_Identifier_408"], node_map["new_StringLiteral_409"], node_map["new_ObjectExpression_410"])
  }));
  node_map["new_ExpressionStatement_403"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_404"]
  }));
  node_map["new_Identifier_402"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformFile"
  }));
  node_map["new_Identifier_401"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transformFile"
  }));
  node_map["new_MemberExpression_400"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_401"],
    computed: false,
    property: node_map["new_Identifier_402"]
  }));
  node_map["new_ReturnStatement_399"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_400"]
  }));
  node_map["new_BlockStatement_398"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_399"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_397"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_398"]
  }));
  node_map["new_Identifier_396"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_395"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_396"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_397"]
  }));
  node_map["new_BooleanLiteral_394"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_393"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_392"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_393"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_394"]
  }));
  node_map["new_ObjectExpression_391"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_392"], node_map["new_ObjectProperty_395"])
  }));
  node_map["new_StringLiteral_390"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformFile"
  }));
  node_map["new_Identifier_389"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_388"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_387"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_386"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_387"],
    computed: false,
    property: node_map["new_Identifier_388"]
  }));
  node_map["new_CallExpression_385"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_386"],
    arguments: Array(node_map["new_Identifier_389"], node_map["new_StringLiteral_390"], node_map["new_ObjectExpression_391"])
  }));
  node_map["new_ExpressionStatement_384"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_385"]
  }));
  node_map["new_Identifier_383"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformAsync"
  }));
  node_map["new_Identifier_382"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transform"
  }));
  node_map["new_MemberExpression_381"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_382"],
    computed: false,
    property: node_map["new_Identifier_383"]
  }));
  node_map["new_ReturnStatement_380"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_381"]
  }));
  node_map["new_BlockStatement_379"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_380"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_378"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_379"]
  }));
  node_map["new_Identifier_377"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_376"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_377"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_378"]
  }));
  node_map["new_BooleanLiteral_375"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_374"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_373"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_374"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_375"]
  }));
  node_map["new_ObjectExpression_372"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_373"], node_map["new_ObjectProperty_376"])
  }));
  node_map["new_StringLiteral_371"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformAsync"
  }));
  node_map["new_Identifier_370"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_369"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_368"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_367"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_368"],
    computed: false,
    property: node_map["new_Identifier_369"]
  }));
  node_map["new_CallExpression_366"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_367"],
    arguments: Array(node_map["new_Identifier_370"], node_map["new_StringLiteral_371"], node_map["new_ObjectExpression_372"])
  }));
  node_map["new_ExpressionStatement_365"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_366"]
  }));
  node_map["new_Identifier_364"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transformSync"
  }));
  node_map["new_Identifier_363"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transform"
  }));
  node_map["new_MemberExpression_362"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_363"],
    computed: false,
    property: node_map["new_Identifier_364"]
  }));
  node_map["new_ReturnStatement_361"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_362"]
  }));
  node_map["new_BlockStatement_360"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_361"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_359"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_360"]
  }));
  node_map["new_Identifier_358"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_357"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_358"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_359"]
  }));
  node_map["new_BooleanLiteral_356"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_355"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_354"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_355"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_356"]
  }));
  node_map["new_ObjectExpression_353"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_354"], node_map["new_ObjectProperty_357"])
  }));
  node_map["new_StringLiteral_352"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transformSync"
  }));
  node_map["new_Identifier_351"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_350"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_349"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_348"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_349"],
    computed: false,
    property: node_map["new_Identifier_350"]
  }));
  node_map["new_CallExpression_347"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_348"],
    arguments: Array(node_map["new_Identifier_351"], node_map["new_StringLiteral_352"], node_map["new_ObjectExpression_353"])
  }));
  node_map["new_ExpressionStatement_346"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_347"]
  }));
  node_map["new_Identifier_345"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "transform"
  }));
  node_map["new_Identifier_344"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_transform"
  }));
  node_map["new_MemberExpression_343"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_344"],
    computed: false,
    property: node_map["new_Identifier_345"]
  }));
  node_map["new_ReturnStatement_342"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_343"]
  }));
  node_map["new_BlockStatement_341"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_342"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_340"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_341"]
  }));
  node_map["new_Identifier_339"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_338"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_339"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_340"]
  }));
  node_map["new_BooleanLiteral_337"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_336"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_335"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_336"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_337"]
  }));
  node_map["new_ObjectExpression_334"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_335"], node_map["new_ObjectProperty_338"])
  }));
  node_map["new_StringLiteral_333"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "transform"
  }));
  node_map["new_Identifier_332"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_331"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_330"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_329"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_330"],
    computed: false,
    property: node_map["new_Identifier_331"]
  }));
  node_map["new_CallExpression_328"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_329"],
    arguments: Array(node_map["new_Identifier_332"], node_map["new_StringLiteral_333"], node_map["new_ObjectExpression_334"])
  }));
  node_map["new_ExpressionStatement_327"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_328"]
  }));
  node_map["new_Identifier_326"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadOptionsAsync"
  }));
  node_map["new_Identifier_325"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_324"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_325"],
    computed: false,
    property: node_map["new_Identifier_326"]
  }));
  node_map["new_ReturnStatement_323"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_324"]
  }));
  node_map["new_BlockStatement_322"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_323"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_321"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_322"]
  }));
  node_map["new_Identifier_320"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_319"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_320"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_321"]
  }));
  node_map["new_BooleanLiteral_318"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_317"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_316"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_317"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_318"]
  }));
  node_map["new_ObjectExpression_315"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_316"], node_map["new_ObjectProperty_319"])
  }));
  node_map["new_StringLiteral_314"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadOptionsAsync"
  }));
  node_map["new_Identifier_313"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_312"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_311"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_310"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_311"],
    computed: false,
    property: node_map["new_Identifier_312"]
  }));
  node_map["new_CallExpression_309"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_310"],
    arguments: Array(node_map["new_Identifier_313"], node_map["new_StringLiteral_314"], node_map["new_ObjectExpression_315"])
  }));
  node_map["new_ExpressionStatement_308"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_309"]
  }));
  node_map["new_Identifier_307"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadOptionsSync"
  }));
  node_map["new_Identifier_306"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_305"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_306"],
    computed: false,
    property: node_map["new_Identifier_307"]
  }));
  node_map["new_ReturnStatement_304"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_305"]
  }));
  node_map["new_BlockStatement_303"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_304"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_302"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_303"]
  }));
  node_map["new_Identifier_301"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_300"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_301"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_302"]
  }));
  node_map["new_BooleanLiteral_299"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_298"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_297"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_298"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_299"]
  }));
  node_map["new_ObjectExpression_296"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_297"], node_map["new_ObjectProperty_300"])
  }));
  node_map["new_StringLiteral_295"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadOptionsSync"
  }));
  node_map["new_Identifier_294"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_293"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_292"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_291"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_292"],
    computed: false,
    property: node_map["new_Identifier_293"]
  }));
  node_map["new_CallExpression_290"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_291"],
    arguments: Array(node_map["new_Identifier_294"], node_map["new_StringLiteral_295"], node_map["new_ObjectExpression_296"])
  }));
  node_map["new_ExpressionStatement_289"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_290"]
  }));
  node_map["new_Identifier_288"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadOptions"
  }));
  node_map["new_Identifier_287"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_286"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_287"],
    computed: false,
    property: node_map["new_Identifier_288"]
  }));
  node_map["new_ReturnStatement_285"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_286"]
  }));
  node_map["new_BlockStatement_284"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_285"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_283"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_284"]
  }));
  node_map["new_Identifier_282"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_281"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_282"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_283"]
  }));
  node_map["new_BooleanLiteral_280"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_279"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_278"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_279"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_280"]
  }));
  node_map["new_ObjectExpression_277"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_278"], node_map["new_ObjectProperty_281"])
  }));
  node_map["new_StringLiteral_276"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadOptions"
  }));
  node_map["new_Identifier_275"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_274"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_273"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_272"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_273"],
    computed: false,
    property: node_map["new_Identifier_274"]
  }));
  node_map["new_CallExpression_271"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_272"],
    arguments: Array(node_map["new_Identifier_275"], node_map["new_StringLiteral_276"], node_map["new_ObjectExpression_277"])
  }));
  node_map["new_ExpressionStatement_270"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_271"]
  }));
  node_map["new_Identifier_269"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadPartialConfigAsync"
  }));
  node_map["new_Identifier_268"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_267"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_268"],
    computed: false,
    property: node_map["new_Identifier_269"]
  }));
  node_map["new_ReturnStatement_266"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_267"]
  }));
  node_map["new_BlockStatement_265"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_266"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_264"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_265"]
  }));
  node_map["new_Identifier_263"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_262"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_263"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_264"]
  }));
  node_map["new_BooleanLiteral_261"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_260"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_259"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_260"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_261"]
  }));
  node_map["new_ObjectExpression_258"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_259"], node_map["new_ObjectProperty_262"])
  }));
  node_map["new_StringLiteral_257"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadPartialConfigAsync"
  }));
  node_map["new_Identifier_256"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_255"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_254"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_253"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_254"],
    computed: false,
    property: node_map["new_Identifier_255"]
  }));
  node_map["new_CallExpression_252"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_253"],
    arguments: Array(node_map["new_Identifier_256"], node_map["new_StringLiteral_257"], node_map["new_ObjectExpression_258"])
  }));
  node_map["new_ExpressionStatement_251"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_252"]
  }));
  node_map["new_Identifier_250"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadPartialConfigSync"
  }));
  node_map["new_Identifier_249"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_248"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_249"],
    computed: false,
    property: node_map["new_Identifier_250"]
  }));
  node_map["new_ReturnStatement_247"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_248"]
  }));
  node_map["new_BlockStatement_246"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_247"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_245"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_246"]
  }));
  node_map["new_Identifier_244"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_243"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_244"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_245"]
  }));
  node_map["new_BooleanLiteral_242"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_241"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_240"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_241"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_242"]
  }));
  node_map["new_ObjectExpression_239"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_240"], node_map["new_ObjectProperty_243"])
  }));
  node_map["new_StringLiteral_238"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadPartialConfigSync"
  }));
  node_map["new_Identifier_237"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_236"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_235"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_234"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_235"],
    computed: false,
    property: node_map["new_Identifier_236"]
  }));
  node_map["new_CallExpression_233"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_234"],
    arguments: Array(node_map["new_Identifier_237"], node_map["new_StringLiteral_238"], node_map["new_ObjectExpression_239"])
  }));
  node_map["new_ExpressionStatement_232"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_233"]
  }));
  node_map["new_Identifier_231"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "loadPartialConfig"
  }));
  node_map["new_Identifier_230"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_config"
  }));
  node_map["new_MemberExpression_229"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_230"],
    computed: false,
    property: node_map["new_Identifier_231"]
  }));
  node_map["new_ReturnStatement_228"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_229"]
  }));
  node_map["new_BlockStatement_227"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_228"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_226"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_227"]
  }));
  node_map["new_Identifier_225"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_224"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_225"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_226"]
  }));
  node_map["new_BooleanLiteral_223"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_222"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_221"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_222"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_223"]
  }));
  node_map["new_ObjectExpression_220"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_221"], node_map["new_ObjectProperty_224"])
  }));
  node_map["new_StringLiteral_219"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "loadPartialConfig"
  }));
  node_map["new_Identifier_218"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_217"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_216"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_215"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_216"],
    computed: false,
    property: node_map["new_Identifier_217"]
  }));
  node_map["new_CallExpression_214"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_215"],
    arguments: Array(node_map["new_Identifier_218"], node_map["new_StringLiteral_219"], node_map["new_ObjectExpression_220"])
  }));
  node_map["new_ExpressionStatement_213"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_214"]
  }));
  node_map["new_Identifier_212"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "createConfigItem"
  }));
  node_map["new_Identifier_211"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_item"
  }));
  node_map["new_MemberExpression_210"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_211"],
    computed: false,
    property: node_map["new_Identifier_212"]
  }));
  node_map["new_ReturnStatement_209"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_210"]
  }));
  node_map["new_BlockStatement_208"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_209"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_207"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_208"]
  }));
  node_map["new_Identifier_206"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_205"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_206"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_207"]
  }));
  node_map["new_BooleanLiteral_204"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_203"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_202"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_203"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_204"]
  }));
  node_map["new_ObjectExpression_201"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_202"], node_map["new_ObjectProperty_205"])
  }));
  node_map["new_StringLiteral_200"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "createConfigItem"
  }));
  node_map["new_Identifier_199"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_198"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_197"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_196"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_197"],
    computed: false,
    property: node_map["new_Identifier_198"]
  }));
  node_map["new_CallExpression_195"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_196"],
    arguments: Array(node_map["new_Identifier_199"], node_map["new_StringLiteral_200"], node_map["new_ObjectExpression_201"])
  }));
  node_map["new_ExpressionStatement_194"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_195"]
  }));
  node_map["new_Identifier_193"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_Identifier_192"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_template"
  }));
  node_map["new_CallExpression_191"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_192"],
    arguments: Array()
  }));
  node_map["new_MemberExpression_190"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_CallExpression_191"],
    computed: false,
    property: node_map["new_Identifier_193"]
  }));
  node_map["new_ReturnStatement_189"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_190"]
  }));
  node_map["new_BlockStatement_188"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_189"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_187"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_188"]
  }));
  node_map["new_Identifier_186"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_185"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_186"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_187"]
  }));
  node_map["new_BooleanLiteral_184"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_183"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_182"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_183"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_184"]
  }));
  node_map["new_ObjectExpression_181"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_182"], node_map["new_ObjectProperty_185"])
  }));
  node_map["new_StringLiteral_180"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "template"
  }));
  node_map["new_Identifier_179"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_178"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_177"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_176"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_177"],
    computed: false,
    property: node_map["new_Identifier_178"]
  }));
  node_map["new_CallExpression_175"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_176"],
    arguments: Array(node_map["new_Identifier_179"], node_map["new_StringLiteral_180"], node_map["new_ObjectExpression_181"])
  }));
  node_map["new_ExpressionStatement_174"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_175"]
  }));
  node_map["new_Identifier_173"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_Identifier_172"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_traverse"
  }));
  node_map["new_CallExpression_171"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_172"],
    arguments: Array()
  }));
  node_map["new_MemberExpression_170"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_CallExpression_171"],
    computed: false,
    property: node_map["new_Identifier_173"]
  }));
  node_map["new_ReturnStatement_169"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_170"]
  }));
  node_map["new_BlockStatement_168"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_169"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_167"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_168"]
  }));
  node_map["new_Identifier_166"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_165"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_166"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_167"]
  }));
  node_map["new_BooleanLiteral_164"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_163"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_162"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_163"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_164"]
  }));
  node_map["new_ObjectExpression_161"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_162"], node_map["new_ObjectProperty_165"])
  }));
  node_map["new_StringLiteral_160"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "traverse"
  }));
  node_map["new_Identifier_159"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_158"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_157"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_156"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_157"],
    computed: false,
    property: node_map["new_Identifier_158"]
  }));
  node_map["new_CallExpression_155"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_156"],
    arguments: Array(node_map["new_Identifier_159"], node_map["new_StringLiteral_160"], node_map["new_ObjectExpression_161"])
  }));
  node_map["new_ExpressionStatement_154"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_155"]
  }));
  node_map["new_Identifier_153"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "tokTypes"
  }));
  node_map["new_Identifier_152"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_parser"
  }));
  node_map["new_CallExpression_151"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_152"],
    arguments: Array()
  }));
  node_map["new_MemberExpression_150"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_CallExpression_151"],
    computed: false,
    property: node_map["new_Identifier_153"]
  }));
  node_map["new_ReturnStatement_149"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_150"]
  }));
  node_map["new_BlockStatement_148"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_149"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_147"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_148"]
  }));
  node_map["new_Identifier_146"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_145"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_146"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_147"]
  }));
  node_map["new_BooleanLiteral_144"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_143"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_142"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_143"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_144"]
  }));
  node_map["new_ObjectExpression_141"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_142"], node_map["new_ObjectProperty_145"])
  }));
  node_map["new_StringLiteral_140"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "tokTypes"
  }));
  node_map["new_Identifier_139"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_138"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_137"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_136"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_137"],
    computed: false,
    property: node_map["new_Identifier_138"]
  }));
  node_map["new_CallExpression_135"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_136"],
    arguments: Array(node_map["new_Identifier_139"], node_map["new_StringLiteral_140"], node_map["new_ObjectExpression_141"])
  }));
  node_map["new_ExpressionStatement_134"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_135"]
  }));
  node_map["new_Identifier_133"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "getEnv"
  }));
  node_map["new_Identifier_132"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_environment"
  }));
  node_map["new_MemberExpression_131"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_132"],
    computed: false,
    property: node_map["new_Identifier_133"]
  }));
  node_map["new_ReturnStatement_130"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_131"]
  }));
  node_map["new_BlockStatement_129"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_130"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_128"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_129"]
  }));
  node_map["new_Identifier_127"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_126"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_127"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_128"]
  }));
  node_map["new_BooleanLiteral_125"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_124"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_123"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_124"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_125"]
  }));
  node_map["new_ObjectExpression_122"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_123"], node_map["new_ObjectProperty_126"])
  }));
  node_map["new_StringLiteral_121"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "getEnv"
  }));
  node_map["new_Identifier_120"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_119"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_118"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_117"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_118"],
    computed: false,
    property: node_map["new_Identifier_119"]
  }));
  node_map["new_CallExpression_116"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_117"],
    arguments: Array(node_map["new_Identifier_120"], node_map["new_StringLiteral_121"], node_map["new_ObjectExpression_122"])
  }));
  node_map["new_ExpressionStatement_115"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_116"]
  }));
  node_map["new_Identifier_114"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "version"
  }));
  node_map["new_Identifier_113"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_package"
  }));
  node_map["new_MemberExpression_112"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_113"],
    computed: false,
    property: node_map["new_Identifier_114"]
  }));
  node_map["new_ReturnStatement_111"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_112"]
  }));
  node_map["new_BlockStatement_110"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_111"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_109"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_110"]
  }));
  node_map["new_Identifier_108"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_107"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_108"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_109"]
  }));
  node_map["new_BooleanLiteral_106"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_105"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_104"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_105"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_106"]
  }));
  node_map["new_ObjectExpression_103"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_104"], node_map["new_ObjectProperty_107"])
  }));
  node_map["new_StringLiteral_102"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "version"
  }));
  node_map["new_Identifier_101"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_100"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_99"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_98"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_99"],
    computed: false,
    property: node_map["new_Identifier_100"]
  }));
  node_map["new_CallExpression_97"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_98"],
    arguments: Array(node_map["new_Identifier_101"], node_map["new_StringLiteral_102"], node_map["new_ObjectExpression_103"])
  }));
  node_map["new_ExpressionStatement_96"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_97"]
  }));
  node_map["new_Identifier_95"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "resolvePreset"
  }));
  node_map["new_Identifier_94"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_files"
  }));
  node_map["new_MemberExpression_93"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_94"],
    computed: false,
    property: node_map["new_Identifier_95"]
  }));
  node_map["new_ReturnStatement_92"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_93"]
  }));
  node_map["new_BlockStatement_91"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_92"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_90"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_91"]
  }));
  node_map["new_Identifier_89"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_88"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_89"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_90"]
  }));
  node_map["new_BooleanLiteral_87"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_86"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_85"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_86"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_87"]
  }));
  node_map["new_ObjectExpression_84"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_85"], node_map["new_ObjectProperty_88"])
  }));
  node_map["new_StringLiteral_83"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "resolvePreset"
  }));
  node_map["new_Identifier_82"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_81"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_80"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_79"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_80"],
    computed: false,
    property: node_map["new_Identifier_81"]
  }));
  node_map["new_CallExpression_78"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_79"],
    arguments: Array(node_map["new_Identifier_82"], node_map["new_StringLiteral_83"], node_map["new_ObjectExpression_84"])
  }));
  node_map["new_ExpressionStatement_77"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_78"]
  }));
  node_map["new_Identifier_76"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "resolvePlugin"
  }));
  node_map["new_Identifier_75"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_files"
  }));
  node_map["new_MemberExpression_74"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_75"],
    computed: false,
    property: node_map["new_Identifier_76"]
  }));
  node_map["new_ReturnStatement_73"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_74"]
  }));
  node_map["new_BlockStatement_72"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_73"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_71"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_72"]
  }));
  node_map["new_Identifier_70"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_69"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_70"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_71"]
  }));
  node_map["new_BooleanLiteral_68"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_67"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_66"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_67"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_68"]
  }));
  node_map["new_ObjectExpression_65"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_66"], node_map["new_ObjectProperty_69"])
  }));
  node_map["new_StringLiteral_64"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "resolvePlugin"
  }));
  node_map["new_Identifier_63"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_62"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_61"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_60"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_61"],
    computed: false,
    property: node_map["new_Identifier_62"]
  }));
  node_map["new_CallExpression_59"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_60"],
    arguments: Array(node_map["new_Identifier_63"], node_map["new_StringLiteral_64"], node_map["new_ObjectExpression_65"])
  }));
  node_map["new_ExpressionStatement_58"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_59"]
  }));
  node_map["new_Identifier_57"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_Identifier_56"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_buildExternalHelpers"
  }));
  node_map["new_MemberExpression_55"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_56"],
    computed: false,
    property: node_map["new_Identifier_57"]
  }));
  node_map["new_ReturnStatement_54"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_55"]
  }));
  node_map["new_BlockStatement_53"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_54"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_52"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_53"]
  }));
  node_map["new_Identifier_51"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_50"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_51"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_52"]
  }));
  node_map["new_BooleanLiteral_49"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_48"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_47"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_48"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_49"]
  }));
  node_map["new_ObjectExpression_46"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_47"], node_map["new_ObjectProperty_50"])
  }));
  node_map["new_StringLiteral_45"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "buildExternalHelpers"
  }));
  node_map["new_Identifier_44"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_43"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_42"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_41"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_42"],
    computed: false,
    property: node_map["new_Identifier_43"]
  }));
  node_map["new_CallExpression_40"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_41"],
    arguments: Array(node_map["new_Identifier_44"], node_map["new_StringLiteral_45"], node_map["new_ObjectExpression_46"])
  }));
  node_map["new_ExpressionStatement_39"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_40"]
  }));
  node_map["new_Identifier_38"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "default"
  }));
  node_map["new_Identifier_37"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "_file"
  }));
  node_map["new_MemberExpression_36"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_37"],
    computed: false,
    property: node_map["new_Identifier_38"]
  }));
  node_map["new_ReturnStatement_35"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_MemberExpression_36"]
  }));
  node_map["new_BlockStatement_34"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_35"]),
    directives: Array()
  }));
  node_map["new_FunctionExpression_33"] = (<babel.FunctionExpression> (<any> {
    type: "FunctionExpression",
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_34"]
  }));
  node_map["new_Identifier_32"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "get"
  }));
  node_map["new_ObjectProperty_31"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_32"],
    computed: false,
    shorthand: false,
    value: node_map["new_FunctionExpression_33"]
  }));
  node_map["new_BooleanLiteral_30"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_29"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "enumerable"
  }));
  node_map["new_ObjectProperty_28"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_29"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_30"]
  }));
  node_map["new_ObjectExpression_27"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_28"], node_map["new_ObjectProperty_31"])
  }));
  node_map["new_StringLiteral_26"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "File"
  }));
  node_map["new_Identifier_25"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_24"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_23"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_22"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_23"],
    computed: false,
    property: node_map["new_Identifier_24"]
  }));
  node_map["new_CallExpression_21"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_22"],
    arguments: Array(node_map["new_Identifier_25"], node_map["new_StringLiteral_26"], node_map["new_ObjectExpression_27"])
  }));
  node_map["new_ExpressionStatement_20"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_21"]
  }));
  node_map["new_Identifier_19"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Plugin"
  }));
  node_map["new_Identifier_18"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Plugin"
  }));
  node_map["new_Identifier_17"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_MemberExpression_16"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_17"],
    computed: false,
    property: node_map["new_Identifier_18"]
  }));
  node_map["new_AssignmentExpression_15"] = (<babel.AssignmentExpression> (<any> {
    type: "AssignmentExpression",
    operator: "=",
    left: node_map["new_MemberExpression_16"],
    right: node_map["new_Identifier_19"]
  }));
  node_map["new_ExpressionStatement_14"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_AssignmentExpression_15"]
  }));
  node_map["new_BooleanLiteral_13"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_Identifier_12"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "value"
  }));
  node_map["new_ObjectProperty_11"] = (<babel.ObjectProperty> (<any> {
    type: "ObjectProperty",
    method: false,
    key: node_map["new_Identifier_12"],
    computed: false,
    shorthand: false,
    value: node_map["new_BooleanLiteral_13"]
  }));
  node_map["new_ObjectExpression_10"] = (<babel.ObjectExpression> (<any> {
    type: "ObjectExpression",
    properties: Array(node_map["new_ObjectProperty_11"])
  }));
  node_map["new_StringLiteral_9"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "__esModule"
  }));
  node_map["new_Identifier_8"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "exports"
  }));
  node_map["new_Identifier_7"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "defineProperty"
  }));
  node_map["new_Identifier_6"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "Object"
  }));
  node_map["new_MemberExpression_5"] = (<babel.MemberExpression> (<any> {
    type: "MemberExpression",
    object: node_map["new_Identifier_6"],
    computed: false,
    property: node_map["new_Identifier_7"]
  }));
  node_map["new_CallExpression_4"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_MemberExpression_5"],
    arguments: Array(node_map["new_Identifier_8"], node_map["new_StringLiteral_9"], node_map["new_ObjectExpression_10"])
  }));
  node_map["new_ExpressionStatement_3"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_4"]
  }));
  node_map["new_DirectiveLiteral_2"] = (<babel.DirectiveLiteral> (<any> {
    type: "DirectiveLiteral",
    value: "use strict"
  }));
  node_map["new_Directive_1"] = (<babel.Directive> (<any> {
    type: "Directive",
    value: node_map["new_DirectiveLiteral_2"]
  }));
  node_map["new_Program_0"] = (<babel.Program> (<any> {
    type: "Program",
    sourceType: "script",
    body: Array(node_map["new_ExpressionStatement_3"], node_map["new_ExpressionStatement_14"], node_map["new_ExpressionStatement_20"], node_map["new_ExpressionStatement_39"], node_map["new_ExpressionStatement_58"], node_map["new_ExpressionStatement_77"], node_map["new_ExpressionStatement_96"], node_map["new_ExpressionStatement_115"], node_map["new_ExpressionStatement_134"], node_map["new_ExpressionStatement_154"], node_map["new_ExpressionStatement_174"], node_map["new_ExpressionStatement_194"], node_map["new_ExpressionStatement_213"], node_map["new_ExpressionStatement_232"], node_map["new_ExpressionStatement_251"], node_map["new_ExpressionStatement_270"], node_map["new_ExpressionStatement_289"], node_map["new_ExpressionStatement_308"], node_map["new_ExpressionStatement_327"], node_map["new_ExpressionStatement_346"], node_map["new_ExpressionStatement_365"], node_map["new_ExpressionStatement_384"], node_map["new_ExpressionStatement_403"], node_map["new_ExpressionStatement_422"], node_map["new_ExpressionStatement_441"], node_map["new_ExpressionStatement_460"], node_map["new_ExpressionStatement_479"], node_map["new_ExpressionStatement_498"], node_map["new_ExpressionStatement_517"], node_map["new_ExpressionStatement_536"], node_map["new_ExpressionStatement_555"], node_map["new_VariableDeclaration_570"], node_map["new_VariableDeclaration_578"], node_map["new_VariableDeclaration_586"], node_map["new_VariableDeclaration_592"], node_map["new_VariableDeclaration_598"], node_map["new_FunctionDeclaration_604"], node_map["new_ExpressionStatement_624"], node_map["new_FunctionDeclaration_642"], node_map["new_FunctionDeclaration_660"], node_map["new_FunctionDeclaration_680"], node_map["new_VariableDeclaration_700"], node_map["new_VariableDeclaration_706"], node_map["new_VariableDeclaration_712"], node_map["new_VariableDeclaration_718"], node_map["new_VariableDeclaration_724"], node_map["new_VariableDeclaration_730"], node_map["new_FunctionDeclaration_736"], node_map["new_FunctionDeclaration_760"], node_map["new_FunctionDeclaration_903"], node_map["new_VariableDeclaration_919"], node_map["new_ExpressionStatement_932"], node_map["new_ClassDeclaration_938"], node_map["new_ExpressionStatement_953"], node_map["new_FunctionDeclaration_959"]),
    directives: Array(node_map["new_Directive_1"])
  }));
  return generate(node_map["new_Program_0"]).code; // always the first node
}

console.log(gen_code());