import { imageListClasses } from "@mui/material";
import { getStaticContextFromError } from "@remix-run/router";
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
    case "ADD_GOAL":
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            goals: [...Data[action.payload.name].goals, action.payload.goal],
          },
        },
      };
    case "REMOVE_GOAL":
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            goals: [
              ...Data[action.payload.name].goals.filter(
                (goal) => goal.goal === action.payload.goal.goal
              ),
            ],
          },
        },
      };
    // case "TOGGLE_GOAL":
    //   return {
    //     ...state,
    //     Data: {
    //       ...Data,
    //       [action.payload.name]: {
    //         ...Data[action.payload.name],
    //         goals: goals.filter((goal) => goal.goal === action.payload.goal),
    //       },
    //     },
    //   };
  }
  return state;
};

export default rootReducer;
