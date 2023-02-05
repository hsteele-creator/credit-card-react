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
        }
        
      };
  }
  return state;
};

export default rootReducer;
