import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addThought, removeThought, toggleThought } from "./app/thoughtSlice";
import "./CSS/Thoughts.css";

export default function Thoughts() {
  const [inputValue, setInputValue] = useState("");
  const thoughts = useSelector((state) => state.thoughts);

  useEffect(() => {
    console.log("Thoughts from state:", thoughts);
  }, [thoughts]);

  console.log(thoughts);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addThought(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className="thoughts-container">
      <h2 className="thoughts-heading">Your thoughts</h2>
      <form onSubmit={handleSubmit} className="thoughts-form">
        <input
          type="text"
          placeholder="Enter your thoughts..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="thoughts-input"
        />
        <input type="submit" value="Submit" className="thoughts-input-submit" />
      </form>
      <ul className="thoughts-list">
        {thoughts && thoughts.length > 0 ? (
          thoughts.map((thought) => (
            <li key={thought.id} className="thoughts-list-item">
              <span
                style={{
                  textDecoration: thought.done ? "line-through" : "none",
                }}
              >
                {thought.text}
              </span>
              <button
                onClick={() => dispatch(toggleThought(thought.id))}
                className="thoughts-done-button"
              >
                {thought.done ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => dispatch(removeThought(thought.id))}
                className="thoughts-remove-button"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className="thoughts-list-item">No thoughts available.</li>
        )}
      </ul>
    </div>
  );
}
