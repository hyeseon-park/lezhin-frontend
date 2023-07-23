import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../shared/styles/main.style";
import jaymee from "../../images/jaymee.svg";

const MainPage = () => {
  return (
    <S.Wrap>
      <Link to="/ranking?genre=romance">
        <S.Box>
          <img src={jaymee} alt="jaymee" />
        </S.Box>
      </Link>
    </S.Wrap>
  );
};

export default MainPage;
