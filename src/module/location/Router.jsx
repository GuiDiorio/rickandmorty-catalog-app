import React from "react";
import { Routes, Route } from "react-router-dom";

import { List } from "./page";

const LocationRouter = () => {
  return (
    <Routes path="/locations">
      <Route index element={<List />} />
    </Routes>
  );
};

export default LocationRouter;
