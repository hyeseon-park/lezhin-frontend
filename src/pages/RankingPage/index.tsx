import React, { useCallback, useContext, useEffect, useRef } from "react";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { useSearchParams } from "react-router-dom";
import { ComicRankItem, Filterings } from "../../interfaces/all";
import { getComicsList } from "../../apis/comicsApi";
import { RankingContext } from "../../context/RankingContext";

const RankingPage = () => {
  const isMounted = useRef(false);
  const [searchParams] = useSearchParams();
  const {
    setHasMore,
    setHeaderTitle,
    filterings,
    setFilterings,
    comicsList,
    setComicsList,
    setFilteredComicsList,
    setLoading,
  } = useContext(RankingContext)!;

  // 헤더 타이틀 설정
  useEffect(() => {
    setHeaderTitle(searchParams.get("genre") === "drama" ? "드라마" : "로맨스");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // 필터 버튼을 클릭했을 때 Filterings 값을 변경
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, checked } = e.target;

      if (name === "scheduled") {
        setFilterings((prev: Filterings) => ({
          ...prev,
          scheduled: checked,
          completed: !checked,
        }));
      } else if (name === "completed") {
        setFilterings((prev: Filterings) => ({
          ...prev,
          scheduled: !checked,
          completed: checked,
        }));
      } else {
        setFilterings((prev: Filterings) => ({ ...prev, [name]: checked }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterings]
  );

  // Filterings 값이 변경될 때마다 필터 옵션에 따라 리스트 변경
  useEffect(() => {
    if (isMounted.current) {
      setFilteredComicsList(handleFilterList(comicsList));
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterings]);

  // 필터 옵션에 따라 필터링한 리스트를 반환
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

  // 리스트를 불러오는 API 호출
  const getComics = useCallback(async () => {
    setLoading(true);
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
      setComicsList((prevData: ComicRankItem[]) => [
        ...prevData,
        ...resultData,
      ]);
      setFilteredComicsList((prevData: ComicRankItem[]) => [
        ...prevData,
        ...handleFilterList(resultData),
      ]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setHasMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, comicsList.length, filterings]);

  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      <List getComics={getComics} />
    </>
  );
};

export default RankingPage;
