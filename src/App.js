import React, { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from "./Home";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";


export default function App() {
  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />

</Routes>

  );
}




   {/* https://www.youtube.com/watch?v=WbV3zRgpw_E 2:06 */}

