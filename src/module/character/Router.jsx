import React from "react";

import { Routes, Route } from "react-router-dom";

import { List } from "./page";

const CharacterRouter = () => {
  return (
    <Routes path="/characters">
      <Route index element={<List />} />
    </Routes>
  );
};

export default CharacterRouter;
