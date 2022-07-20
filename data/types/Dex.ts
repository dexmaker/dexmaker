import { Mon } from "./Mon";
import { FieldRule } from "./FieldRule";

export interface Dex {
  id: number;
  name: string;
  fields: FieldRule[];
  mons: Mon[];
}
