import React from "react";
import * as S from "../styles/list.style";

const ListGuide = () => {
  return (
    <S.Item>
      {/* <S.ItemTop2> */}
      <S.ItemLeft>
        <S.Thumb>
          <S.Img src={""} alt="썸네일" />
        </S.Thumb>
      </S.ItemLeft>
      <S.ItemCount>
        <S.ItemRank>{}</S.ItemRank>
        <S.ItemTitle>{}</S.ItemTitle>
      </S.ItemCount>
      <S.ItemInfo>
        <S.ItemTitle>{}</S.ItemTitle>
        <S.ItemArtist>{}</S.ItemArtist>
        <S.ItemFreed>{}화 무료</S.ItemFreed>
      </S.ItemInfo>
      {/* </S.ItemTop2> */}
    </S.Item>
  );
};

export default ListGuide;
