import { FieldType } from "./FieldType";

interface StatBase<T, F extends FieldType> {
  name: string;
  type: F;
  value?: T;
}

type NumericField = StatBase<number, FieldType.NUMERIC>;
type EnumField = StatBase<string, FieldType.ENUM>;

export type Field<T extends FieldType> = T extends FieldType.NUMERIC
  ? NumericField
  : EnumField;
