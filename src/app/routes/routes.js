import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const Home = lazy(() => import("pages/Home"));

const routes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} /> */}
      </Routes>
    </Router>
  );
};

export default routes;
