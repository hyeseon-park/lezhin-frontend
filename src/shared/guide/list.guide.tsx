import React from "react";
import * as S from "../styles/list.style";

const ListGuide = () => {
  return (
    <S.ListWrap>
      <S.Item>
        <S.ItemLeft>
          <S.Thumb>
            <S.Img src="" alt="썸네일" />
          </S.Thumb>
        </S.ItemLeft>
        <S.ItemCount>
          <S.ItemRank>1</S.ItemRank>
          <S.ItemStatus status={"same"}>-</S.ItemStatus>
        </S.ItemCount>
        <S.ItemInfo>
          <S.ItemTitle>웹툰 제목</S.ItemTitle>
          <S.ItemArtists>
            <S.ItemArtist>작가명</S.ItemArtist>
          </S.ItemArtists>
          <S.ItemFreed>3화 무료</S.ItemFreed>
          <S.ItemState>완결</S.ItemState>
        </S.ItemInfo>
      </S.Item>
      <S.Item>
        <S.ItemLeft>
          <S.Thumb>
            <S.Img alt="썸네일" />
          </S.Thumb>
        </S.ItemLeft>
        <S.ItemCount>
          <S.ItemRank>1</S.ItemRank>
          <S.ItemStatus status={"up"}>1</S.ItemStatus>
        </S.ItemCount>
        <S.ItemInfo>
          <S.ItemTitle>웹툰 제목</S.ItemTitle>
          <S.ItemArtists>
            <S.ItemArtist>작가명</S.ItemArtist>
          </S.ItemArtists>
          <S.ItemFreed>3화 무료</S.ItemFreed>
          <S.ItemState>완결</S.ItemState>
        </S.ItemInfo>
      </S.Item>
      <S.Item>
        <S.ItemLeft>
          <S.Thumb>
            <S.Img alt="썸네일" />
          </S.Thumb>
        </S.ItemLeft>
        <S.ItemCount>
          <S.ItemRank>1</S.ItemRank>
          <S.ItemStatus status={"down"}>2</S.ItemStatus>
        </S.ItemCount>
        <S.ItemInfo>
          <S.ItemTitle>웹툰 제목</S.ItemTitle>
          <S.ItemArtists>
            <S.ItemArtist>그림작가</S.ItemArtist>
            <S.ItemArtist>글작가</S.ItemArtist>
          </S.ItemArtists>
          <S.ItemFreed>3화 무료</S.ItemFreed>
          <S.ItemState>완결</S.ItemState>
        </S.ItemInfo>
      </S.Item>
    </S.ListWrap>
  );
};

export default ListGuide;
