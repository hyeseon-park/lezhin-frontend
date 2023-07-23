import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../shared/styles/main.style";
import jaymee from "../../images/jaymee.svg";

const MainPage = () => {
  return (
    <S.Wrap>
      <Link to="/ranking?genre=romance">
        <S.Box size={100}>
          <S.Img src={jaymee} alt="jaymee" size={50} />
        </S.Box>
      </Link>
    </S.Wrap>
  );
};

export default MainPage;
