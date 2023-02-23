import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Goals.css";
import { addGoal, removeGoal, toggleGoal } from "./Actions";
import { TextField, Button } from "@mui/material";

const Goals = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const goals = store[currentUser].goals;
  const [newGoal, setNewGoal] = useState("");

  const remove = (goal) => {
    dispatch(removeGoal(currentUser, goal));
  };

  const toggle = (goal) => {
    dispatch(toggleGoal(currentUser, goal));
  };

  const add = () => {
    if (newGoal !== "") {
      dispatch(addGoal(currentUser, newGoal));
    } else {
      alert("Goal can not be blank!");
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
        <Button variant="contained" id="add-goal-btn" onClick={() => add()}>
          add
        </Button>
      </div>
      <ul id="goals">
        {goals.map((goal, i) => {
          return (
            <div key={i} id="todo">
              <li
                id="goal"
                className={goal.completed === true ? "complete" : ""}
              >
                {goal.goal}
              </li>
              <div id="buttons">
              <button id="remove" onClick={() => remove(goal.goal)}>
              ❌
              </button>
              <button id="toggle" onClick={() => toggle(goal.goal)}>
              ✅
              </button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Goals;
