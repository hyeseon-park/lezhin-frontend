import { createContext, useState } from "react";
import { ComicRankItem, Filterings, IRankingContext } from "../interfaces/all";

export const RankingContext = createContext<IRankingContext | null>(null);

export const RankingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasMore, setHasMore] = useState(true);
  const [headerTitle, setHeaderTitle] = useState("");
  const [filterings, setFilterings] = useState<Filterings>({
    scheduled: false,
    completed: false,
    freed: false,
    print: false,
  });
  const [comicsList, setComicsList] = useState<ComicRankItem[]>([]);
  const [filteredComicsList, setFilteredComicsList] = useState<ComicRankItem[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  return (
    <RankingContext.Provider
      value={{
        hasMore,
        setHasMore,
        headerTitle,
        setHeaderTitle,
        filterings,
        setFilterings,
        comicsList,
        setComicsList,
        filteredComicsList,
        setFilteredComicsList,
        loading,
        setLoading,
      }}
    >
      {children}
    </RankingContext.Provider>
  );
};
