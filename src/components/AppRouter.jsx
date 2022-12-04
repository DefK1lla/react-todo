import React from "react";
import { Route, Routes } from "react-router-dom";

import Projects from "../pages/Projects";
import Project from "../pages/Project";
export default function AppRouter() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Projects />}
      />
      <Route
        exact
        path="/projects/:id"
        element={<Project />}
      />
    </Routes>
  );
};  