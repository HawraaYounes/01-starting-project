import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCount: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCount= !state.showCount;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: (state.counter += 1),
      showCount: state.showCount,
    };
  }
  if (action.type === "increase") {
    return {
      counter: (state.counter += action.amount),
      showCount: state.showCount,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: (state.counter -= 1),
      showCount: state.showCount,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCount: !state.showCount,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
