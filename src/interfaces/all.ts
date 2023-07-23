type Period = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

type ArtistRole =
  | "writer"
  | "painter"
  | "scripter"
  | "original"
  | "publisher"
  | "label";

export interface Artist {
  name: string; // 작가 필명
  role: ArtistRole; // 작가 롤
  id: string; // 작가 id
}

export interface ComicRankItem {
  id: number; // 작품 id
  alias: string; // 작품 별칭
  title: string; // 작품 타이틀
  artists: Artist[]; // 작가 정보
  schedule: {
    periods: Period[]; // 연재 요일
  };
  genres: string[]; // 작품 장르
  freedEpisodeSize: number; // 무료회차 수
  contentsState: "scheduled" | "completed"; // 연재, 완결 값
  currentRank: number; // 현재 랭킹
  previousRank: number; // 이전 랭킹
  updatedAt: number; // 업데이트 일자
  isPrint: boolean; // 단행본 여부
  thumbnailSrc: string;
}

export interface Filterings {
  scheduled: boolean;
  completed: boolean;
  freed: boolean;
  print: boolean;
}

export interface FilterProps {
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ListProps {
  hasMore: boolean;
  filteredComicsList: ComicRankItem[];
  getComics: any;
}

export interface IRankingContext {
  hasMore: boolean;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
  headerTitle: string;
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  filterings: Filterings;
  setFilterings: React.Dispatch<React.SetStateAction<Filterings>>;
  comicsList: ComicRankItem[];
  setComicsList: React.Dispatch<React.SetStateAction<ComicRankItem[]>>;
  filteredComicsList: ComicRankItem[];
  setFilteredComicsList: React.Dispatch<React.SetStateAction<ComicRankItem[]>>;
}
