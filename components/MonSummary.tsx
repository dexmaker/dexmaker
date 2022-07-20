import React, { FC } from "react";
import Image from "next/image";
import { Badge } from "./Badge";
import { StatGauge } from "./StatGauge";
import { Title } from "./ui/Title";
import { Dex, FieldRule, FieldType, Mon } from "@data/types";

const MonFields: FC<{ fieldRules: FieldRule[]; mon: Mon }> = ({
  fieldRules,
  mon,
}) => {
  const zipped = fieldRules.map((fieldRule) => ({
    fieldRule,
    field: mon.fields.find(({ name }) => name === fieldRule.name),
  }));

  return (
    <ul className="block">
      {zipped.map(({ fieldRule, field }) => (
        <li key={fieldRule.name} className="flex w-full justify-evenly">
          <div className="w-28">{fieldRule.name}</div>
          {fieldRule.type === FieldType.NUMERIC &&
            field?.type === FieldType.NUMERIC && (
              <>
                <div className="block w-16 text-right">
                  {field?.value || fieldRule.default}
                </div>
                <div className="grow">
                  <StatGauge
                    value={field?.value || fieldRule.min}
                    min={fieldRule.min}
                    max={fieldRule.max}
                  />
                </div>
              </>
            )}
          {fieldRule.type === FieldType.ENUM && (
            <div className="grow">
              {field?.type === FieldType.ENUM ? (
                <Badge
                  color={
                    fieldRule.options.find((opt) => opt.value === field.value)
                      ?.color
                  }
                >
                  {field.value || fieldRule.default}
                </Badge>
              ) : (
                "--"
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export const MonSummary: FC<{
  dex: Dex;
  mon: Mon;
}> = ({ dex, mon }) => {
  return (
    <article>
      <div className="flex items-center">
        <div className="m-2">
          {mon.spriteUrl && (
            <Image src={mon.spriteUrl} alt={mon.name} width={60} height={60} />
          )}
        </div>
        <div className="flex flex-col">
          <Title>
            #{mon.indexNumber}: {mon.name}
          </Title>
        </div>
      </div>
      <MonFields fieldRules={dex.fields} mon={mon} />
    </article>
  );
};
