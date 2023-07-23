import React from "react";
import * as S from "../shared/styles/list.style";
import { getDayKor } from "../utils/dayFormat";
import { ListProps } from "../interfaces/all";

const List = ({ filteredComicsList }: ListProps) => {
  return (
    <S.ListWrap>
      {filteredComicsList.map((comics) => (
        <S.Item key={comics.id}>
          <S.ItemLeft>
            <S.Thumb>
              <S.Img src={comics.thumbnailSrc} alt="썸네일" />
            </S.Thumb>
          </S.ItemLeft>
          <S.ItemCount>
            <S.ItemRank>{comics.currentRank}</S.ItemRank>
            <S.ItemStatus
              status={
                comics.previousRank - comics.currentRank === 0
                  ? "same"
                  : comics.previousRank - comics.currentRank > 0
                  ? "up"
                  : "down"
              }
            >
              {comics.previousRank - comics.currentRank === 0
                ? "-"
                : Math.abs(comics.previousRank - comics.currentRank)}
            </S.ItemStatus>
          </S.ItemCount>
          <S.ItemInfo>
            <S.ItemTitle>{comics.title}</S.ItemTitle>
            <S.ItemArtists>
              {comics.artists.map(
                (artist) =>
                  ["writer", "painter", "scripter"].includes(artist.role) && (
                    <S.ItemArtist key={artist.id}>{artist.name}</S.ItemArtist>
                  )
              )}
            </S.ItemArtists>
            <S.ItemFreed>{`${comics.freedEpisodeSize}화 무료`}</S.ItemFreed>
            <S.ItemState>
              {comics.contentsState === "scheduled"
                ? `매주 ${getDayKor(comics.schedule.periods[0])} 연재`
                : "완결"}
            </S.ItemState>
          </S.ItemInfo>
        </S.Item>
      ))}
    </S.ListWrap>
  );
};

export default List;
