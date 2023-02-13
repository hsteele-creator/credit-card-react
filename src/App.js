import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddCard from "./AddCard";
import Goals from "./Goals";
import Nav from "./Nav";
import UpdatePicture from "./UpdatePicture";
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
          <Route exact path="/Goals" element={<Goals />} />
          <Route exact path="/AddCard" element={<AddCard />} />
          <Route exact path="/UpdatePicture" element={<UpdatePicture />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
