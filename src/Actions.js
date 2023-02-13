export const UPDATE_USER = "UPDATE_USER"
export const ADD_CARD = "ADD_CARD"
export const REMOVE_CARD = "REMOVE_CARD"
export const ADD_GOAL = "ADD_GOAL"
export const REMOVE_GOAL = "REMOVE_GOAL"
export const TOGGLE_GOAL = "TOGGLE_GOAL"

export const updateUser = (name) => {
    return {type: UPDATE_USER, payload : {name}}
}

export const addCard = (user, card) => {
    return {type: ADD_CARD, payload : {name : user, data : card}}
}

export const removeCard = (user, cardNumber) => {
    return {
      type: "REMOVE_CARD",
      payload: { name: user, cardNumber },
    };
  };

export const addGoal = (user, newGoal) => {
  return {
    type: "ADD_GOAL",
    payload : {name : user, goal : newGoal}
  }
}

export const removeGoal = (user, goal) => {
  return {
    type: "REMOVE_GOAL",
    payload : {name : user, goal}
  }
}

export const toggleGoal = (user, newGoal) => {
  return {
    type: "TOGGLE_GOAL",
    payload : {name : user, goal : newGoal}
  }
}