import React from "react";
import * as S from "../shared/styles/filter.style";
import { FilterProps } from "../interfaces/all";

const Filter = ({ headerTitle, filtering, onFilterChange }: FilterProps) => {
  return (
    <S.FilterHeader>
      <S.FilterHeaderTitle>{headerTitle} 장르 랭킹</S.FilterHeaderTitle>
      <S.FilterRow>
        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="scheduled"
            checked={filtering.scheduled}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filtering.scheduled}>
            <S.FilterSpan>연재중</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="completed"
            checked={filtering.completed}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filtering.completed}>
            <S.FilterSpan>완결</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>

        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="freed"
            checked={filtering.freed}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filtering.freed}>
            <S.FilterSpan>무료회차 3회 이상</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>

        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="print"
            checked={filtering.print}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filtering.print}>
            <S.FilterSpan>단행본 작품</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
      </S.FilterRow>
    </S.FilterHeader>
  );
};

export default Filter;
