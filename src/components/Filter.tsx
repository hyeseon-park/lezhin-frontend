import React, { useContext } from "react";
import * as S from "../shared/styles/filter.style";
import * as M from "../shared/styles/main.style";
import { FilterProps } from "../interfaces/all";
import { RankingContext } from "../context/RankingContext";
import jaymee from "../images/jaymee.svg";
import { Link } from "react-router-dom";

const Filter = React.memo(({ onFilterChange }: FilterProps) => {
  const { headerTitle, filterings } = useContext(RankingContext)!;

  return (
    <S.FilterHeader>
      <S.FilterTitle>
        <Link to="/">
          <M.FilterBox size={30}>
            <M.Img src={jaymee} alt="jaymee" size={15} />
          </M.FilterBox>
        </Link>
        <S.FilterHeaderTitle>{headerTitle} 장르 랭킹</S.FilterHeaderTitle>
      </S.FilterTitle>
      <S.FilterRow>
        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="scheduled"
            checked={filterings.scheduled}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filterings.scheduled}>
            <S.FilterSpan>연재중</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="completed"
            checked={filterings.completed}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filterings.completed}>
            <S.FilterSpan>완결</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>

        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="freed"
            checked={filterings.freed}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filterings.freed}>
            <S.FilterSpan>무료회차 3회 이상</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>

        <S.FilterLabel>
          <S.FilterInput
            type="checkbox"
            name="print"
            checked={filterings.print}
            onChange={onFilterChange}
          />
          <S.FilterBox checked={filterings.print}>
            <S.FilterSpan>단행본 작품</S.FilterSpan>
          </S.FilterBox>
        </S.FilterLabel>
      </S.FilterRow>
    </S.FilterHeader>
  );
});

export default Filter;
