import React, { FC } from "react";
import Image from "next/image";
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
          <div>
            <TypeBadge type={mon.types[0]} />
            {mon.types[1] && <TypeBadge type={mon.types[1]} />}
          </div>
        </div>
      </div>
      <ul className="block">
        {Object.entries(dex.template.stats).map(([stat, statDefault]) => (
          <li key={stat} className="flex w-full justify-evenly">
            <div className="w-28">{stat}</div>
            <div className="block w-16 text-right">
              {mon.stats[stat] || statDefault}
            </div>
            <div className="grow">
              <StatGauge value={mon.stats[stat] || statDefault} />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
