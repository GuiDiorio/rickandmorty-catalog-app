import React from "react";
import { Routes, Route } from "react-router-dom";

import { List } from "./page";

const EpisodeRouter = () => {
  return (
    <Routes path="/episodes">
      <Route index element={<List />} />
    </Routes>
  );
};

export default EpisodeRouter;
