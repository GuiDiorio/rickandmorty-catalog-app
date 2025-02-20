import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import CharacterRouter from "../character/Router";
import EpisodeRouter from "../episode/Router";
import LocationRouter from "../location/Router";
import { Theme } from "./components";

const App = () => (
  <Theme>
    <BrowserRouter>
      <Routes>
        <Route path="/characters/*" index element={<CharacterRouter />} />
        <Route path="/episodes/*" element={<EpisodeRouter />} />
        <Route path="/locations/*" element={<LocationRouter />} />

        <Route path="/*" element={<Navigate to="/characters" replace />} />
      </Routes>
    </BrowserRouter>
  </Theme>
);

App.defaultProps = {};
App.propTypes = {};

export default App;
