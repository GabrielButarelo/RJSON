import { ETokenType } from "../enums/ETokenType";

export interface IToken {
  type: ETokenType;
  value: string;
}
