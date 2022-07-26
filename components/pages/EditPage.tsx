import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MetaTags } from "@components/MetaTags";
import { Header } from "@components/ui/Header";
import { PageNavigation } from "@components/ui/PageNavigation";
import { useDebounce } from "@helpers/hooks/useDebounce";
import { AppDispatch, PagePropsWithState, RootState } from "@data/store";
import { DexState, setDexName } from "@data/store/reducers/dexReducer";

export interface EditPageProps extends PagePropsWithState {
  dexId: number;
}

export const EditPage: FC<EditPageProps> = ({ dexId }) => {
  const { dexes } = useSelector<RootState, DexState>((state) => state.dex);
  const currentDex = useMemo(
    () => dexes.find((dex) => dex.id === dexId),
    [dexes, dexId]
  );
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState(currentDex?.name || "");
  const dbName = useDebounce(name, 1000);
  useEffect(() => {
    if (currentDex?.id == null) {
      return;
    }

    dispatch(setDexName({ dexId: currentDex.id, name: dbName }));
  }, [dbName, dispatch, currentDex?.id]);

  if (!currentDex) return null;

  return (
    <>
      <MetaTags
        title={`Edit ${currentDex.name}`}
        canonicalUri={`/dex/${currentDex.id}/edit`}
      />
      <PageNavigation backHref={`/dex/${currentDex.id}`} />
      <main className="page-content">
        <Header>{currentDex.name}</Header>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </main>
    </>
  );
};
