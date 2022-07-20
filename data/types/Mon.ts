import { Field } from "./Field";
import { FieldType } from "./FieldType";

export interface Mon {
  name: string;
  indexNumber: number;
  spriteUrl?: string;
  fields: Field<FieldType>[];
}
