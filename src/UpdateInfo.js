import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UpdateInfo.css"

const UpdateInfo = () => {
  const store = useSelector((state) => state.Data);
  const currrentUser = useSelector((state) => state.Data.currentUser);
  const image = store[currrentUser].image;
  return (
    <>
      <h1 id="update-info-title">Update Info</h1>

      <div id="img-container">
      <img id="current-user-img" src={image} />
      </div>
    </>
  );
};

export default UpdateInfo;
