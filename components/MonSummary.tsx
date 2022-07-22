import { FC } from "react";
import { Badge } from "./Badge";
import { StatGauge } from "./StatGauge";
import { Header } from "./ui/Header";
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
    <table className="table-fixed">
      <tbody>
        {zipped.map(({ fieldRule, field }) => (
          <tr key={fieldRule.name}>
            <td className="whitespace-nowrap pr-3">{fieldRule.name}</td>
            {fieldRule.type === FieldType.NUMERIC &&
              field?.type === FieldType.NUMERIC && (
                <>
                  <td className="text-right">
                    <div className="w-16">
                      {field?.value || fieldRule.default}
                    </div>
                  </td>
                  <td className="w-full">
                    <StatGauge
                      value={field?.value || fieldRule.min}
                      min={fieldRule.min}
                      max={fieldRule.max}
                    />
                  </td>
                </>
              )}
            {fieldRule.type === FieldType.ENUM && (
              <td colSpan={2}>
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
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
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
            <div className="overflow-hidden flex justify-center items-center w-16 h-16">
              <img src={mon.spriteUrl} alt={mon.name} className="w-14 h-auto" />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <Header>
            #{mon.indexNumber}: {mon.name}
          </Header>
        </div>
      </div>
      <MonFields fieldRules={dex.fields} mon={mon} />
    </article>
  );
};
