import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { useSearchParams } from "react-router-dom";
import { ComicRankItem, Filterings } from "../../interfaces/all";
import { getComicsList } from "../../apis/comicsApi";

const RankingPage = () => {
  const isMounted = useRef(false);
  const [searchParams] = useSearchParams();
  const [headerTitle, setHeaderTitle] = useState("");
  const [comicsList, setComicsList] = useState<ComicRankItem[]>([]);
  const [filteredComicsList, setFilteredComicsList] = useState<ComicRankItem[]>(
    []
  );
  const [hasMore, setHasMore] = useState(true);
  const [filterings, setFilterings] = useState<Filterings>({
    scheduled: false,
    completed: false,
    freed: false,
    print: false,
  });

  // 헤더 타이틀 설정
  useEffect(() => {
    setHeaderTitle(searchParams.get("genre") === "drama" ? "드라마" : "로맨스");
  }, [searchParams]);

  // 체크박스 클릭으로 필터링을 바꿨을 때
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, checked } = e.target;

      if (name === "scheduled") {
        setFilterings((prev) => ({
          ...prev,
          scheduled: checked,
          completed: !checked,
        }));
      } else if (name === "completed") {
        setFilterings((prev) => ({
          ...prev,
          scheduled: !checked,
          completed: checked,
        }));
      } else {
        setFilterings((prev) => ({ ...prev, [name]: checked }));
      }
    },
    [filterings]
  );

  // 필터링 변경 시 필터링에 따라 리스트 변경
  useEffect(() => {
    if (isMounted.current) {
      setFilteredComicsList(handleFilterList(comicsList));
    } else {
      isMounted.current = true;
    }
  }, [filterings]);

  // 필터링 옵션에 따라 리스트를 필터링
  const handleFilterList = (list: ComicRankItem[]) => {
    return list.filter((c) => {
      return (
        (filterings.scheduled ? c.contentsState === "scheduled" : true) &&
        (filterings.completed ? c.contentsState === "completed" : true) &&
        (filterings.freed ? c.freedEpisodeSize >= 3 : true) &&
        (filterings.print ? c.isPrint === true : true)
      );
    });
  };

  // API 호출
  const getComics = useCallback(async () => {
    let genre = searchParams.get("genre");
    let page = comicsList.length / 20 + 1;

    try {
      if (genre === null) return;
      const response = await getComicsList(genre, page);

      if (!response.ok) {
        throw new Error(`${response.status} 에러가 발생했습니다!`);
      }

      const result = await response.json();
      const resultData = result.data;

      setHasMore(result.hasNext);
      setComicsList((prevData) => [...prevData, ...resultData]);
      setFilteredComicsList((prevData) => [
        ...prevData,
        ...handleFilterList(resultData),
      ]);
    } catch (err) {
      console.log(err);
      setHasMore(false);
    }
  }, [searchParams, comicsList.length, filterings]);

  return (
    <>
      <Filter
        headerTitle={headerTitle}
        filterings={filterings}
        onFilterChange={handleFilterChange}
      />
      <List
        filteredComicsList={filteredComicsList}
        hasMore={hasMore}
        getComics={getComics}
      />
    </>
  );
};

export default RankingPage;
