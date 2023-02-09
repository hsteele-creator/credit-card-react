import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Goals.css";

const Goals = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const goals = store[currentUser].goals;
  const [goal, setGoal] = useState("");

  const remove = () => {
    console.log("remove");
    dispatch({type : "REMOVE_GOAL", payload : {name : currentUser, goal}})
  };

  const toggle = () => {
    console.log("toggle");
    dispatch({ type: "TOGGLE_GOAL" });
  };

  const add = () => {
    console.log("add");
    dispatch({
      type: "ADD_GOAL",
      payload: { name: currentUser, goal,}
    });
  };

  return (
    <>
      <div id="new-goal-container">
        <input
          type="text"
          id="new-goal"
          onChange={(e) => setGoal(e.target.value)}
        ></input>
        <button id="add-goal-btn" onClick={() => add()}>
          Add Goal
        </button>
      </div>
      <ul id="goals">
        {goals.map((goal, i) => {
          return (
            <div key={i} id="todo">
              <li id="goal">{goal.goal}</li>
              <button id="remove" onClick={() => remove()}>
                Remove
              </button>
              <button id="toggle" onClick={() => toggle()}>
                Toggle
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Goals;
