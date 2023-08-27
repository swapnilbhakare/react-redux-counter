import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounter = { counter: 0, showConter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogleCounter(state) {
      state.showConter = !state.showConter;
    },
  },
});
const initialAuthState = { isAuthenticated: false };
const authSlice =createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
   counter: counterSlice.reducer,
   auth:authSlice.reducer

  }
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions
export default store;
