import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/ranking?genre=romance">Ranking 페이지로 이동</Link>
    </div>
  );
};

export default MainPage;
