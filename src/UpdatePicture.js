import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import "./UpdateInfo.css";

const UpdatePicture = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currrentUser = useSelector((state) => state.Data.currentUser);
  const image = store[currrentUser].image;
  const currentCards = store[currrentUser].cards;
  const [newImage, setNewImage] = useState("");
  const [card, setCard] = useState(currentCards[0].cardNumber);

  const changeImage = () => {
    if (newImage !== "") {
      dispatch({
        type: "UPDATE_IMAGE",
        payload: { name: currrentUser, image: newImage },
      });
      setNewImage("");
    } else {
      alert("image can not be blank");
    }
  };

  return (
    <>
      <h2 id="update-info-title">Update Profile Image</h2>

      <div id="img-container">
        <img id="current-user-img" src={image} />

        <div id="input-container">
          <TextField
            id="new-url"
            size="small"
            placeholder="new image url"
            onChange={(e) => setNewImage(e.target.value)}
            value={newImage}
          />
          <Button
            variant="contained"
            id="img-btn"
            onClick={() => changeImage()}
          >
            Change Image
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpdatePicture;
