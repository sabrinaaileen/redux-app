import { createSlice } from "@reduxjs/toolkit";

const thoughtsSlice = createSlice({
  name: "thoughts",
  initialState: [
    { id: 1, text: "Why is the sky blue?", done: false },
    { id: 2, text: "Why is the grass green?", done: false },
    { id: 3, text: "Why is sun rising?", done: false },
  ],
  reducers: {
    addThought: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
    removeThought: (state, action) => {
      return state.filter((thought) => thought.id !== action.payload);
    },
    toggleThought: (state, action) => {
      const thought = state.find((thought) => thought.id === action.payload);
      if (thought) {
        thought.done = !thought.done;
      }
    },
  },
});

export const { addThought, removeThought, toggleThought } =
  thoughtsSlice.actions;
export default thoughtsSlice.reducer;
