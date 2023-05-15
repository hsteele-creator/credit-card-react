export const UPDATE_USER = "UPDATE_USER";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const TOGGLE_GOAL = "TOGGLE_GOAL";

export const updateUser = (name: string) => {
  return { type: UPDATE_USER, payload: { name } };
};

export const addCard = (
  user: string,
  card: {
    cardType: string;
    cardNumber: number;
    month: string;
    year: string;
    cvv: number;
    balance: string;
  }
) => {
  return { type: ADD_CARD, payload: { name: user, data: card } };
};

export const removeCard = (user: string, cardNumber: number) => {
  return {
    type: "REMOVE_CARD",
    payload: { name: user, cardNumber },
  };
};

export const addGoal = (
  user: string,
  newGoal: { goal: string; completed: boolean }
) => {
  return {
    type: "ADD_GOAL",
    payload: { name: user, goal: newGoal },
  };
};

export const removeGoal = (
  user: string,
  goal: { goal: string; completed: boolean }
) => {
  return {
    type: "REMOVE_GOAL",
    payload: { name: user, goal },
  };
};

export const toggleGoal = (
  user: string,
  newGoal: { goal: string; completed: boolean }
) => {
  return {
    type: "TOGGLE_GOAL",
    payload: { name: user, goal: newGoal },
  };
};
