import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Projects />}
      />
    </Routes>
  );
};  