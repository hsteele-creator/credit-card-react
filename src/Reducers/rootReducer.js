import { imageListClasses } from "@mui/material";
import { getStaticContextFromError } from "@remix-run/router";
import { act } from "react-dom/test-utils";
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
      const updatedCards = [
        ...state.Data[action.payload.name].cards,
        action.payload.data,
      ];
      const currentUser = action.payload.name;
      return {
        ...state,
        Data: {
          ...Data,
          [currentUser]: {
            ...Data[currentUser],
            cards: updatedCards,
          },
        },
      };
    case "ADD_GOAL":
      const curUser = action.payload.name;
      const updatedGoals = [
        ...state.Data[curUser].goals,
        { goal: action.payload.goal, completed: false },
      ];
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[curUser],
            goals: updatedGoals,
          },
        },
      };
    case "REMOVE_GOAL":
      const currentGoals = [...state.Data[action.payload.name].goals];
      const newGoals = currentGoals.filter(
        (goal) => goal.goal !== action.payload.goal
      );
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            goals: newGoals,
          },
        },
      };
    case "TOGGLE_GOAL":
      const oldGoals = [...state.Data[action.payload.name].goals];
      const toggledGoals = oldGoals.map((goal) =>
        goal.goal === action.payload.goal
          ? { ...goal, completed: !goal.completed }
          : goal
      );
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            goals: toggledGoals,
          },
        },
      };
    case "UPDATE_IMAGE":
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            image: [action.payload.image],
          },
        },
      };
    case "REMOVE_CARD":
      const filteredCards = [
        ...state.Data[action.payload.name].cards.filter(
          (card) => card.cardNumber !== action.payload.cardNumber
        ),
      ];
      return {
        ...state,
        Data: {
          ...Data,
          [action.payload.name]: {
            ...Data[action.payload.name],
            cards: filteredCards,
          },
        },
      };
  }
  return state;
};

export default rootReducer;
