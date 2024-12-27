import { ETokenType } from "./enums/ETokenType";
import { IToken } from "./interfaces/IToken";

export default class Parser {
  parse(tokens: IToken[]) {
    let current: number = 0;

    function walk(): any {
      // const token: IToken = tokens[current];
      // if (token.type === ETokenType.DELIMITER && token.value === "{") {
      //   current++;
      //   const node: Record<string, any> = {};
      //   while (tokens[current] && tokens[current].value !== "}") {
      //     const keyToken = tokens[current++];
      //     const colonToken = tokens[current++];
      //     const valueToken = tokens[current++];
      //     const ruleToken = tokens[current++];
      //     if (keyToken.type !== ETokenType.STRING || colonToken.value !== ":") {
      //       throw new Error("Sintaxy error");
      //     }
      //     node[keyToken.value] = valueToken.value;
      //     if (tokens[current] && tokens[current].value === ",") {
      //       current++;
      //     }
      //   }
      //   current++;
      //   return node;
      // }
      // throw new TypeError(`Token inesperado: ${token.type}`);
    }

    return walk();
  }
}
