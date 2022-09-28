import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound";
import PublicRoutes from "./PublicRoutes";

function App() {
  return (
    <div id="app-div" className="App vh-100">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
