import { ETokenSymbol } from "./enums/ETokenSymbol";
import { ETokenType } from "./enums/ETokenType";
import { IToken } from "./interfaces/IToken";

export default class Lexer {
  tokenize(input: string): IToken[] {
    const data = this.removeWhitespace(input);

    if (!this.isJSON(data)) {
      throw new Error("Invalid JSON format");
    }

    const tokens: IToken[] = [];
    let current = 0;

    while (current < data.length) {
      const char = data[current];

      if (char === ETokenSymbol.OPEN_OBJECT) {
        tokens.push({ type: ETokenType.OPEN_OBJECT, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.CLOSE_OBJECT) {
        tokens.push({ type: ETokenType.CLOSE_OBJECT, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.OPEN_ARRAY) {
        tokens.push({ type: ETokenType.OPEN_ARRAY, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.CLOSE_ARRAY) {
        tokens.push({ type: ETokenType.CLOSE_ARRAY, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.DEFINE_VALUE) {
        tokens.push({ type: ETokenType.DEFINE_VALUE, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.NEXT_LINE) {
        tokens.push({ type: ETokenType.NEXT_LINE, value: char });
        current++;
        continue;
      }

      if (char === ETokenSymbol.OPEN_KEY) {
        tokens.push({ type: ETokenType.OPEN_KEY, value: char });
        current++;

        let value = "";

        while (data[current] !== ETokenSymbol.CLOSE_KEY) {
          value += data[current];

          current++;
        }

        tokens.push({ type: ETokenType.KEY, value });
        tokens.push({ type: ETokenType.CLOSE_KEY, value: char });
        current++;

        continue;
      }

      if (char === ETokenSymbol.OPEN_RULES) {
        tokens.push({ type: ETokenType.OPEN_RULES, value: char });
        current++;

        let value = "";

        while (data[current] !== ETokenSymbol.CLOSE_RULES) {
          value += data[current];

          current++;
        }

        tokens.push({ type: ETokenType.RULES, value });
        tokens.push({ type: ETokenType.CLOSE_RULES, value: char });
        current++;

        continue;
      }

      throw new Error(`Unexpected character '${char}' at position ${current}`);
    }

    return tokens;
  }

  private isJSON(input: string): boolean {
    return (
      input.startsWith(ETokenSymbol.OPEN_OBJECT) &&
      input.endsWith(ETokenSymbol.CLOSE_OBJECT)
    );
  }

  private removeWhitespace(input: string): string {
    return input.replace(/\s/g, "");
  }
}
