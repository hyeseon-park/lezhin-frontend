import React from "react";
import * as S from "../styles/filter.style";

const FilterGuide = () => {
  return (
    <S.FilterHeader>
      <S.FilterHeaderTitle>로맨스 장르 랭킹</S.FilterHeaderTitle>
      <S.FilterRow>
        <S.FilterLabel>
          <S.FilterInput type="checkbox" name="scheduled" checked={true} />
          <S.FilterBox checked={true}>
            <S.FilterSpan>연재중</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
        <S.FilterLabel>
          <S.FilterInput type="checkbox" name="completed" checked={false} />
          <S.FilterBox checked={false}>
            <S.FilterSpan>완결</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
        <S.FilterLabel>
          <S.FilterInput type="checkbox" name="freed" checked={true} />
          <S.FilterBox checked={true}>
            <S.FilterSpan>무료회차 3회 이상</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
        <S.FilterLabel>
          <S.FilterInput type="checkbox" name="print" checked={false} />
          <S.FilterBox checked={false}>
            <S.FilterSpan>단행본 작품</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
      </S.FilterRow>
    </S.FilterHeader>
  );
};

export default FilterGuide;
