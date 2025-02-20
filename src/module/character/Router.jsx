import React from "react";

import { Routes, Route } from "react-router-dom";

import { List, View } from "./page";

const CharacterRouter = () => (
  <Routes path="/characters">
    <Route index element={<List />} />
    <Route path=":id" element={<View />} />
  </Routes>
);

export default CharacterRouter;
