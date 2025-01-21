import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addThought, removeThought, toggleThought } from "./app/thoughtSlice";

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
    <div>
      <h2>Your thoughts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your thoughts..."
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {thoughts && thoughts.length > 0 ? (
          thoughts.map((thought) => (
            <li key={thought.id}>
              <span
                style={{
                  textDecoration: thought.done ? "line-through" : "none",
                }}
              >
                {thought.text}
              </span>
              <button onClick={() => dispatch(toggleThought(thought.id))}>
                {thought.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => dispatch(removeThought(thought.id))}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No thoughts available.</li>
        )}
      </ul>
    </div>
  );
}
