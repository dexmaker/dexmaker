interface Mon<Stats extends string, MonType extends string> {
  name: string;
  indexNumber: number;
  stats: Record<Stats, number>;
  types: [MonType] | [MonType, MonType];
}

export interface Dex<Stat extends string, MonType extends string> {
  dexName: string;
  template: Mon<Stat, MonType>;
  mons: Mon<Stat, MonType>[];
}
