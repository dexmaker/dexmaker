interface QueryResultWrapper {
  found: boolean;
}

interface NotFoundQueryResult extends QueryResultWrapper {
  found: false;
}

interface FoundQueryResult<T> extends QueryResultWrapper {
  found: true;
  data: T;
}

export type QueryResult<T> = NotFoundQueryResult | FoundQueryResult<T>;

export interface ListQueryResult<T> {
  data: T[];
  count: number;
}
