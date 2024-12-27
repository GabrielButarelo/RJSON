import { readFileSync } from "fs";
import Lexer from "./lexer";
import Parser from "./parser";

export default class RJson {
  private lexer: Lexer;
  private parser: Parser;

  constructor() {
    this.lexer = new Lexer();
    this.parser = new Parser();
  }

  fromFile() {
    const path = "./src/test.rjson";
    const input = readFileSync(path, "utf8");

    const tokens = this.lexer.tokenize(input);
    // const nodes = this.parser.parse(tokens);

    console.log(tokens);
  }
}

new RJson().fromFile();
