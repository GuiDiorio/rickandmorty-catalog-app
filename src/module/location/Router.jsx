import React from "react";
import { Routes, Route } from "react-router-dom";

import LocationPage from "./page";

const LocationRouter = () => {
  return (
    <Routes path="/locations">
      <Route index element={<LocationPage />} />
    </Routes>
  );
};

export default LocationRouter;
