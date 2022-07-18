import React, { FC } from "react";
import { TypeBadge } from "./TypeBadge";
import { StatGauge } from "./StatGauge";
import { Dex, Mon } from "@data/types";

export const MonSummary: FC<{
  dex: Dex;
  mon: Mon;
}> = ({ dex, mon }) => {
  return (
    <article>
      <h1 className="text-3xl">
        #{mon.indexNumber}: {mon.name}
      </h1>
      <TypeBadge type={mon.types[0]} />
      {mon.types.length > 1 && <TypeBadge type={mon.types[1]} />}
      <table>
        <tbody>
          {Object.entries(dex.template.stats).map(([stat, statDefault]) => (
            <tr key={stat}>
              <td>{stat}</td>
              <td>{mon.stats[stat] || statDefault}</td>
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
