import React from "react";
import { Routes, Route } from "react-router-dom";

import { List, View } from "./page";

const EpisodeRouter = () => {
  return (
    <Routes path="/episodes">
      <Route index element={<List />} />
      <Route path=":id" element={<View />} />
    </Routes>
  );
};

export default EpisodeRouter;
