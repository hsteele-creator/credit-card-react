import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddCard from "./AddCard";
import Contact from "./Contact";
import Nav from "./Nav";

function App() {
  const store = useSelector((store) => store.Data);
  console.log(store);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/AddCard" element={<AddCard />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
