import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddCard from "./AddCard";
import Contact from "./Contact";
import Nav from "./Nav";
import UpdateInfo from "./UpdateInfo";
import Avatars from "./Avatars";

function App() {
  const store = useSelector((store) => store.Data);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Avatars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/AddCard" element={<AddCard />} />
          <Route exact path="/UpdateInfo" element={<UpdateInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
