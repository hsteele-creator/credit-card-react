import React from "react";
import { useSelector } from "react-redux";
import "./Avatar.css";

const Avatars = () => {
    const store = useSelector(state => state.Data);
    const currentUser = useSelector(state => state.Data.currentUser)
    console.log(store.length)
  return (
    <>
      <img
        className="avatar"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60
"
      />
    </>
  );
};

export default Avatars;
