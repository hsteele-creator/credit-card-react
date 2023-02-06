import { Data } from "../Data";
const INITIAL_STATE = { Data };

const rootReducer = (state = INITIAL_STATE, action) => {
  console.log(state)
  switch (action.type) {
    case "UPDATE_USER":
      return {
        Data : {
          ...Data, 
          currentUser: action.payload.name,
        },
      }
    case "ADD_CARD":
      return {
        Data : {
          ...Data,
          [action.payload.name] : {
            ...state,
            cards : [
              ...cards,
              action.payload.data
            ]
          }
        }
      }
  }
  return state;
};

export default rootReducer;
