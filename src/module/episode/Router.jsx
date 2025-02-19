import React from "react";
import { Routes, Route } from "react-router-dom";
import EpisodePage from "./page";

const EpisodeRouter = () => {
  return (
    <Routes path="/episodes">
      <Route index element={<EpisodePage />} />
    </Routes>
  );
};

export default EpisodeRouter;
