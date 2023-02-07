import { imageListClasses } from "@mui/material";
import { Data } from "../Data";
const INITIAL_STATE = { Data };

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        Data: {
          ...Data,
          currentUser: action.payload.name,
        },
      };
    case "ADD_CARD":
      console.log("card added");
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            cards: [...Data[action.payload.name].cards, action.payload.data],
          },
        },
      };
    case "REMOVE_GOAL":
      console.log("remove todo");
    case "TOGGLE_GOAL":
      console.log("toggle todo");
  }
  return state;
};

export default rootReducer;
