import { Data } from "../Data";
const INITIAL_STATE = { Data };

console.log(INITIAL_STATE)

const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "UPDATE_CARD":
      return {
        ...state,
        currentCard: action.payload.card,
      };
  }
    return state;
};

export default rootReducer