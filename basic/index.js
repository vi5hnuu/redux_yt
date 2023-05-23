// import { createStore } from "redux";

// const store = createStore(reducerX);


// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.typeamount + 1 }
//     default: return state
//   }
// }

// //global state
// console.log(store.getState());

// store.dispatch({ type: 'increment', amount: 1 })

// console.log(store.getState());

////////////////////////////////
// import { createStore } from "redux";

// const store = createStore(reducerX);


// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     default: return state
//   }
// }

// //global state
// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({ type: 'increment', amount: 1 })
//////////////////////////////
// import { createStore } from "redux";

// const store = createStore(reducerX);

// const history = []

// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     default: return state
//   }
// }

// //global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// })

// setInterval(() => {
//   store.dispatch({ type: 'increment' })
// }, 1000)
//////////////////////////////////
// import logger from "redux-logger";
// import { applyMiddleware, createStore } from "redux";


// //apply logger middleware
// const store = createStore(reducerX, applyMiddleware(logger.default));


// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     default: return state
//   }
// }

// setInterval(() => {
//   store.dispatch({ type: 'increment' })
// }, 2000)
/////////////////////////////////////
// import logger from "redux-logger";
// import { applyMiddleware, createStore } from "redux";


// //apply logger middleware
// const store = createStore(reducerX, applyMiddleware(logger.default));


// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     case 'decrement':
//       return { amount: state.amount + 1 }
//     case 'incrementByAmount':
//       return { amount: state.amount + action.amount }
//     default: return state
//   }
// }

// setInterval(() => {
//   store.dispatch({ type: 'incrementByAmount', amount: 100 })
// }, 5000)
///////////////////////////////////////
