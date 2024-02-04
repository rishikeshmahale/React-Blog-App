import React from 'react';
import "./App.scss";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home, SingleBlog } from "./Pages";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/blog/:id" element = {<SingleBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;