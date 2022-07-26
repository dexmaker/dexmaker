import { Mon } from "./Mon";
import { FieldRule } from "./FieldRule";

export interface Dex {
  name: string;
  fields: FieldRule[];
  mons: Mon[];
}
