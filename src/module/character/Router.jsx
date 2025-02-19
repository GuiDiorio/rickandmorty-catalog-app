import React from "react";

import { Routes, Route } from "react-router-dom";

import CharacterPage from "./page";

const CharacterRouter = () => {
  return (
    <Routes path="/characters">
      <Route index element={<CharacterPage />} />
    </Routes>
  );
};

export default CharacterRouter;
