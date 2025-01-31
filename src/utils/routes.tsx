import { lazy } from "react";
import { Route, Routes } from "react-router";
import { AppLayout } from "../layout/AppLayout";

const HomePage = lazy(() => import("../pages/HomePage"));

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
