import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { useSearchParams } from "react-router-dom";
import { ComicRankItem, Filterings } from "../../interfaces/all";

const RankingPage = () => {
  const isMounted = useRef(false);
  const [comicsList, setComicsList] = useState<ComicRankItem[]>([]);
  const [filteredComicsList, setFilteredComicsList] = useState<ComicRankItem[]>(
    []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [headerTitle, setHeaderTitle] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [filterings, setFilterings] = useState<Filterings>({
    scheduled: false,
    completed: false,
    freed: false,
    print: false,
  });

  // URL query parameter default 세팅
  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (
      updatedSearchParams.get("genre") !== "drama" &&
      updatedSearchParams.get("genre") !== "romance"
    ) {
      updatedSearchParams.set("genre", "romance");
      setSearchParams(updatedSearchParams);
    }
  }, []);

  // 헤더 타이틀 설정
  useEffect(() => {
    setHeaderTitle(searchParams.get("genre") === "drama" ? "드라마" : "로맨스");
  }, [searchParams]);

  // 체크박스 클릭으로 필터링을 바꿨을 때
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, checked } = e.target;
      if (name === "scheduled") {
        setFilterings({
          ...filterings,
          scheduled: checked,
          completed: !checked,
        });
      } else if (name === "completed") {
        setFilterings({
          ...filterings,
          scheduled: !checked,
          completed: checked,
        });
      } else {
        setFilterings({ ...filterings, [name]: checked });
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
    let params = { page: String(page) };
    console.log(genre, page);

    const response = await fetch(
      `api/comics/${genre}?` + new URLSearchParams(params)
    ).then((res) => res.json());
    let resData = response.data;

    setComicsList((prevData) => [...prevData, ...resData]);
    setFilteredComicsList((prevData) => [
      ...prevData,
      ...handleFilterList(resData),
    ]);

    if (page >= 5) setHasMore(false);
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
