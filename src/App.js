import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Home, NavBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
