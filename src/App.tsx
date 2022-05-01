import * as React from "react";
import { SearchResultsList } from "components/searchResultsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchArea } from "form/searchArea";

export const App: React.FC = () => {
  return (
    <Router>
      {/* <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <SearchArea />
            </div>
          }
        ></Route>
        <Route path="/search" element={<SearchResultsList />}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<SearchArea />} />
        <Route path="/search" element={<SearchResultsList />} />
      </Routes>
    </Router>
  );
};
