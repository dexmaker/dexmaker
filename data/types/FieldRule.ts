import { FieldType } from './FieldType';

interface BaseFieldRule<T, F extends FieldType> {
  name: string;
  type: F;
  default?: T;
}

interface NumericFieldRule extends BaseFieldRule<number, FieldType.NUMERIC> {
  min: number;
  max: number;
}

export type EnumFieldOptions = { value: string; color?: string }[];

interface EnumFieldRule extends BaseFieldRule<string, FieldType.ENUM> {
  options: EnumFieldOptions;
}

export type FieldRule = NumericFieldRule | EnumFieldRule;
