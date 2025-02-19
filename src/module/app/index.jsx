import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import CharacterRouter from "../character/Router";
import EpisodeRouter from "../episode/Router";
import LocationRouter from "../location/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters/*" index element={<CharacterRouter />} />
        <Route path="/episodes/*" element={<EpisodeRouter />} />
        <Route path="/locations/*" element={<LocationRouter />} />

        <Route path="/*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

App.defaultProps = {};
App.propTypes = {};

export default App;
