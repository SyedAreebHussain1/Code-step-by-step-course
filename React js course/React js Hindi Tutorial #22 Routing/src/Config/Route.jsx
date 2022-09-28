import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import About from "../Component/About/About";
import Forms from "../Component/Forms/Forms";
import Navigate from "../Component/Nav/Navigate";
function AppRouter() {
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
