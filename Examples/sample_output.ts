import * as babel from '@babel/types';
import { parse } from '@babel/parser';
import { default as generate } from '@babel/generator';

function gen_code() {
  let node_map = {};
  node_map["new_Identifier_29"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "test"
  }));
  node_map["new_CallExpression_28"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_29"],
    arguments: Array()
  }));
  node_map["new_ExpressionStatement_27"] = (<babel.ExpressionStatement> (<any> {
    type: "ExpressionStatement",
    expression: node_map["new_CallExpression_28"]
  }));
  node_map["new_NumericLiteral_26"] = (<babel.NumericLiteral> (<any> {
    type: "NumericLiteral",
    value: 5
  }));
  node_map["new_ReturnStatement_25"] = (<babel.ReturnStatement> (<any> {
    type: "ReturnStatement",
    argument: node_map["new_NumericLiteral_26"]
  }));
  node_map["new_BlockStatement_24"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_ReturnStatement_25"]),
    directives: Array()
  }));
  node_map["new_BooleanLiteral_23"] = (<babel.BooleanLiteral> (<any> {
    type: "BooleanLiteral",
    value: true
  }));
  node_map["new_WhileStatement_22"] = (<babel.WhileStatement> (<any> {
    type: "WhileStatement",
    test: node_map["new_BooleanLiteral_23"],
    body: node_map["new_BlockStatement_24"]
  }));
  node_map["new_BlockStatement_21"] = (<babel.BlockStatement> (<any> {
    type: "BlockStatement",
    body: Array(node_map["new_WhileStatement_22"]),
    directives: Array()
  }));
  node_map["new_Identifier_20"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "test"
  }));
  node_map["new_FunctionDeclaration_19"] = (<babel.FunctionDeclaration> (<any> {
    type: "FunctionDeclaration",
    id: node_map["new_Identifier_20"],
    generator: false,
    async: false,
    params: Array(),
    body: node_map["new_BlockStatement_21"]
  }));
  node_map["new_Identifier_18"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "x"
  }));
  node_map["new_NumericLiteral_17"] = (<babel.NumericLiteral> (<any> {
    type: "NumericLiteral",
    value: 2
  }));
  node_map["new_Identifier_16"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "x"
  }));
  node_map["new_BinaryExpression_15"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_Identifier_16"],
    operator: "*",
    right: node_map["new_NumericLiteral_17"]
  }));
  node_map["new_BinaryExpression_14"] = (<babel.BinaryExpression> (<any> {
    type: "BinaryExpression",
    left: node_map["new_BinaryExpression_15"],
    operator: "+",
    right: node_map["new_Identifier_18"]
  }));
  node_map["new_Identifier_13"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "y"
  }));
  node_map["new_VariableDeclarator_12"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_13"],
    init: node_map["new_BinaryExpression_14"]
  }));
  node_map["new_VariableDeclaration_11"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_12"]),
    kind: "let"
  }));
  node_map["new_NumericLiteral_10"] = (<babel.NumericLiteral> (<any> {
    type: "NumericLiteral",
    value: 5
  }));
  node_map["new_Identifier_9"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "x"
  }));
  node_map["new_VariableDeclarator_8"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_9"],
    init: node_map["new_NumericLiteral_10"]
  }));
  node_map["new_VariableDeclaration_7"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_8"]),
    kind: "let"
  }));
  node_map["new_StringLiteral_6"] = (<babel.StringLiteral> (<any> {
    type: "StringLiteral",
    value: "fs"
  }));
  node_map["new_Identifier_5"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "require"
  }));
  node_map["new_CallExpression_4"] = (<babel.CallExpression> (<any> {
    type: "CallExpression",
    callee: node_map["new_Identifier_5"],
    arguments: Array(node_map["new_StringLiteral_6"])
  }));
  node_map["new_Identifier_3"] = (<babel.Identifier> (<any> {
    type: "Identifier",
    name: "fs"
  }));
  node_map["new_VariableDeclarator_2"] = (<babel.VariableDeclarator> (<any> {
    type: "VariableDeclarator",
    id: node_map["new_Identifier_3"],
    init: node_map["new_CallExpression_4"]
  }));
  node_map["new_VariableDeclaration_1"] = (<babel.VariableDeclaration> (<any> {
    type: "VariableDeclaration",
    declarations: Array(node_map["new_VariableDeclarator_2"]),
    kind: "let"
  }));
  node_map["new_Program_0"] = (<babel.Program> (<any> {
    type: "Program",
    sourceType: "script",
    body: Array(node_map["new_VariableDeclaration_1"], node_map["new_VariableDeclaration_7"], node_map["new_VariableDeclaration_11"], node_map["new_FunctionDeclaration_19"], node_map["new_ExpressionStatement_27"]),
    directives: Array()
  }));
  return generate(node_map["new_Program_0"]).code; // always the first node
}

console.log(gen_code());