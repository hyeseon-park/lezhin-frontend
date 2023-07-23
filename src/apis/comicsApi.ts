export const getComicsList = async (genre: string, page: number) => {
  console.log(genre, page); // 삭제
  const response = await fetch(`api/comics/${genre}?page=${page}`);
  return response;
};
