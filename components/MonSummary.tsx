import React, { FC } from "react";
import { TypeBadge } from "./TypeBadge";
import { StatGauge } from "./StatGauge";
import { Title } from "./ui/Title";
import { Dex, Mon } from "@data/types";

export const MonSummary: FC<{
  dex: Dex;
  mon: Mon;
}> = ({ dex, mon }) => {
  return (
    <article>
      <Title>
        #{mon.indexNumber}: {mon.name}
      </Title>
      <TypeBadge type={mon.types[0]} />
      {mon.types.length > 1 && <TypeBadge type={mon.types[1]} />}
      <table className="table-fixed">
        <tbody>
          {Object.entries(dex.template.stats).map(([stat, statDefault]) => (
            <tr key={stat}>
              <td className="w-20">{stat}</td>
              <td className="w-20 text-right">
                {mon.stats[stat] || statDefault}
              </td>
              <td>
                <StatGauge value={mon.stats[stat] || statDefault} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
