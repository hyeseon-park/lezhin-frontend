import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
  Outlet,
} from "react-router-dom";
import GlobalStyles from "./shared/global/globalStyles";
import RankingPage from "./pages/RankingPage";
import MainPage from "./pages/MainPage";
import FilterGuide from "./shared/guide/filter.guide";
import ListGuide from "./shared/guide/list.guide";
import { RankingContextProvider } from "./context/RankingContext";

// URL query parameter default 세팅
const GenreParamRoutes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    if (
      updatedSearchParams.get("genre") !== "drama" &&
      updatedSearchParams.get("genre") !== "romance"
    ) {
      updatedSearchParams.set("genre", "romance");
      setSearchParams(updatedSearchParams);
    }
  }, [searchParams, setSearchParams]);

  return <Outlet />;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <RankingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route element={<GenreParamRoutes />}>
                <Route path="ranking" element={<RankingPage />} />
              </Route>
              <Route path="guide">
                <Route path="filter" element={<FilterGuide />} />
                <Route path="list" element={<ListGuide />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </RankingContextProvider>
    </>
  );
}

export default App;
