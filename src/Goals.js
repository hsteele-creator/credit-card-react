import React from "react";
import { useSelector } from "react-redux";
import "./Goals.css";

const Goals = () => {
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  console.log(currentUser);
  const goals = store[currentUser].goals;
  console.log(goals);
  return (
    <>
      <ul id="goals">
        {goals.map((goal, i) => {
            return <div key={i} id="todo">
                <li id="goal">{goal}</li>
                <button>Remove</button>
                <button>Toggle</button>
            </div>
        })}
      </ul>
    </>
  );
};

export default Goals;
