import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Goals.css";

const Goals = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const goals = store[currentUser].goals;
  const [newGoal, setNewGoal] = useState("");

  const remove = (goal) => {
    console.log("remove");
    dispatch({
      type: "REMOVE_GOAL",
      payload: { name: currentUser, goal },
    });
  };

  const toggle = (goal) => {
    console.log("toggle");
    dispatch({ type: "TOGGLE_GOAL", payload: { name: currentUser, goal } });
  };

  const add = () => {
    console.log("add");
    if (newGoal !== "") {
      dispatch({
        type: "ADD_GOAL",
        payload: { name: currentUser, goal: newGoal },
      });
    } else {
      alert("Goal can not be blank!")
    }
  };

  return (
    <>
      <div id="new-goal-container">
        <input
          type="text"
          id="new-goal"
          onChange={(e) => setNewGoal(e.target.value)}
        ></input>
        <button id="add-goal-btn" onClick={() => add()}>
          add
        </button>
      </div>
      <ul id="goals">
        {goals.map((goal, i) => {
          console.log(goal);
          return (
            <div key={i} id="todo">
              <li
                id="goal"
                className={goal.completed === true ? "complete" : ""}
              >
                {goal.goal}
              </li>
              <button id="remove" onClick={() => remove(goal.goal)}>
                🚮
              </button>
              <button id="toggle" onClick={() => toggle(goal.goal)}>
                ✅
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Goals;
