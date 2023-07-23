export const getComicsList = async (genre: string, page: number) => {
  const response = await fetch(`api/comics/${genre}?page=${page}`);
  return response;
};
