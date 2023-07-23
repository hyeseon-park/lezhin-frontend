import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./shared/global/globalStyles";
import RankingPage from "./pages/RankingPage";
import MainPage from "./pages/MainPage";
import FilterGuide from "./shared/guide/filter.guide";
import ListGuide from "./shared/guide/list.guide";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="ranking" element={<RankingPage />} />
            <Route path="guide">
              <Route path="filter" element={<FilterGuide />} />
              <Route path="list" element={<ListGuide />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
