import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Card from "../components/card/Card";
import MainPage from "./MainPage";
import BookInnerPage from "./BookInnerPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="main-page" />} />
      <Route path="/" element={<Card />}>
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/book/:bookId/*" element={<BookInnerPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
