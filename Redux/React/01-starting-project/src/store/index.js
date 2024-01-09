import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counter";
import authReducer from "../store/auth";

// configureStore works if we have multiple reducers incase of big apps
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//     if (action.type === "increment") {
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     }
//     if (action.type === "decrement") {
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     }
//     if (action.type === "increaseby5") {
//       return {
//         counter: state.counter + action.increaseValue,
//         showCounter: state.showCounter,
//       };
//     }
//     if (action.type === "toggle") {
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     }
//     return state;
//   };
//   const store = createStore(counterReducer);

// below works if we have only one reducer
// const store = createStore(counterSlice.reducer);
