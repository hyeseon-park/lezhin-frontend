import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import List from "../../components/List";
import { useSearchParams } from "react-router-dom";
import { ComicRankItem, Filtering } from "../../interfaces/all";

const RankingPage = () => {
  const [page, setPage] = useState(1);
  const [comicsList, setComicsList] = useState<ComicRankItem[]>([]);
  const [filteredComicsList, setFilteredComicsList] = useState<ComicRankItem[]>(
    []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [headerTitle, setHeaderTitle] = useState("");
  const [filtering, setFiltering] = useState<Filtering>({
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

  useEffect(() => {
    setHeaderTitle(searchParams.get("genre") === "drama" ? "드라마" : "로맨스");
  }, [searchParams]);

  // 처음 페이지 진입 시, 페이지가 바뀔 때 데이터 불러오기
  useEffect(() => {
    getComics();
  }, [searchParams, page]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = e.target;
    if (name === "scheduled") {
      setFiltering({ ...filtering, scheduled: checked, completed: !checked });
    } else if (name === "completed") {
      setFiltering({ ...filtering, scheduled: !checked, completed: checked });
    } else {
      setFiltering({ ...filtering, [name]: checked });
    }
  };

  // 필터링 변경 시 필터링에 따라 리스트 변경
  useEffect(() => {
    setFilteredComicsList(handleFiltering(comicsList));
  }, [filtering]);

  // 필터링 옵션에 맞게 리스트 필터
  const handleFiltering = (list: ComicRankItem[]) => {
    return list.filter((c) => {
      return (
        (filtering.scheduled ? c.contentsState === "scheduled" : true) &&
        (filtering.completed ? c.contentsState === "completed" : true) &&
        (filtering.freed ? c.freedEpisodeSize > 3 : true) &&
        (filtering.print ? c.isPrint === true : true)
      );
    });
  };

  // API 호출
  const getComics = async () => {
    let genre = searchParams.get("genre");
    let params = { page: String(page) };

    const res = await fetch(
      `api/comics/${genre}?` + new URLSearchParams(params)
    ).then((res) => res.json());
    let resData = res.data;

    setComicsList((prevData) => [...prevData, ...resData]);
    setFilteredComicsList((prevData) => [
      ...prevData,
      ...handleFiltering(resData),
    ]);
    // setFilteredComicsList(filteredComicsList.concat(handleFiltering(resData)));
  };

  // 무한 스크롤
  const handleScroll = (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } =
      event.target.documentElement;
    if (scrollHeight - Math.round(scrollTop) <= clientHeight) {
      if (page < 5) setPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Filter
        headerTitle={headerTitle}
        filtering={filtering}
        onFilterChange={handleFilterChange}
      />
      <List filteredComicsList={filteredComicsList} />
    </>
  );
};

export default RankingPage;
