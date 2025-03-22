import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./Home";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

// https://www.youtube.com/watch?v=WbV3zRgpw_E 2:06
