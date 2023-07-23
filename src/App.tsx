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
import { RankingContextProvider } from "./context/RankingContext";

// URL query parameter default 세팅
const GenreParamRoutes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (
      searchParams.get("genre") !== "drama" &&
      searchParams.get("genre") !== "romance"
    ) {
      const newSearchParams = new URLSearchParams({ genre: "romance" });
      setSearchParams(newSearchParams);
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
            </Route>
          </Routes>
        </BrowserRouter>
      </RankingContextProvider>
    </>
  );
}

export default App;
