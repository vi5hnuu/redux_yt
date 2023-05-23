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
// import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";

// const incr = 'increment'
// const decr = 'decrement'
// const incrByAmt = 'incrementByAmount'

// //apply logger middleware
// const store = createStore(reducerX, applyMiddleware(logger.default));

// //action creators
// function increment() {
//   return { type: incr }
// }
// function decrement() {
//   return { type: decr }
// }
// function incrementByAmount(payload) {
//   return { type: incrByAmt, payload }
// }

// //reducers
// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     case 'decrement':
//       return { amount: state.amount - 1 }
//     case 'incrementByAmount':
//       return { amount: state.amount + action.payload.amount }
//     default: return state
//   }
// }

// setInterval(() => {
//   store.dispatch(incrementByAmount({ amount: 100 }))
//   store.dispatch(decrement())
//   store.dispatch(increment())
// }, 5000)
///////////////////////////////////
// import axios from "axios";
// import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// const incr = 'increment'
// const decr = 'decrement'
// const incrByAmt = 'incrementByAmount'

// //apply logger middleware
// const store = createStore(reducerX, applyMiddleware(logger.default, thunk.default));

// //action creators
// function increment() {
//   return { type: incr }
// }
// function decrement() {
//   return { type: decr }
// }
// function incrementByAmount(payload) {
//   return { type: incrByAmt, payload }
// }

// //thunk
// function getUserAccount(id) {
//   return async (dispatch, getState) => {
//     const { data } = await axios.get(`http://localhost:3000/account/${id}`)
//     console.log(getState());
//     dispatch(incrementByAmount({ amount: data.amount }))
//   }
// }

// //reducers
// function reducerX(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case 'increment':
//       return { amount: state.amount + 1 }
//     case 'decrement':
//       return { amount: state.amount - 1 }
//     case 'incrementByAmount':
//       return { amount: state.amount + action.payload.amount }
//     default: return state
//   }
// }

// setInterval(() => {
//   store.dispatch(getUserAccount(1))
// }, 2000)
////////////////////////////
// import axios from "axios";
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// const incrAmt = 'amount/increment'
// const decrAmt = 'amount/decrement'
// const incrAmtByX = 'amount/incrementByAmount'
// const incrBns = 'bonus/increment'
// const decrBns = 'bonus/decrement'
// const incrBnsByX = 'bonus/incrementByAmount'

// //apply logger middleware
// const store = createStore(combineReducers(
//   {
//     amountS: reducerAmount,
//     bonusS: reducerBonus
//   }
// ), applyMiddleware(logger.default, thunk.default));

// //action creators
// function incrementAmt() {
//   return { type: incrAmt }
// }
// function decrementAmt() {
//   return { type: decrAmt }
// }
// function incrementAmtByX(payload) {
//   return { type: incrAmtByX, payload }
// }
// function incrementBns() {
//   return { type: incrBns }
// }
// function decrementBns() {
//   return { type: decrBns }
// }
// function incrementBnsByX(payload) {
//   return { type: incrBnsByX, payload }
// }

// //thunks
// function getUserAccount(id) {
//   return async (dispatch, getState) => {
//     const { data } = await axios.get(`http://localhost:3000/account/${id}`)
//     dispatch(incrementAmtByX({ x: data.amount }))
//   }
// }
// function getUserBonus(id) {
//   return async (dispatch, getState) => {
//     const { data } = await axios.get(`http://localhost:3000/bonus/${id}`)
//     dispatch(incrementBnsByX({ x: data.points }))
//   }
// }

// //reducers
// function reducerAmount(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case incrAmt:
//       return { amount: state.amount + 1 }
//     case decrAmt:
//       return { amount: state.amount - 1 }
//     case incrAmtByX:
//       return { amount: state.amount + action.payload.x }
//     default: return state
//   }
// }
// function reducerBonus(state = { bonus: 1 }, action) {
//   switch (action.type) {
//     case incrBns:
//       return { bonus: state.bonus + 1 }
//     case decrBns:
//       return { bonus: state.bonus - 1 }
//     case incrBnsByX:
//       return { bonus: state.bonus + action.payload.x }
//     default: return state
//   }
// }

// setInterval(() => {
//   store.dispatch(getUserBonus(1))
// }, 2000)
////////////////////////////
import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const incrAmt = 'amount/increment'
const decrAmt = 'amount/decrement'
const incrAmtByX = 'amount/incrementByAmount'
const getUserAcFF = 'account/getUser/fullfilled'
const getUserAcRj = 'account/getUser/rejected'
const getUserAcPP = 'account/getUser/pending'

//apply logger middleware
const store = createStore(reducerAmount, applyMiddleware(logger.default, thunk.default));

//action creators
function incrementAmt() {
  return { type: incrAmt }
}
function decrementAmt() {
  return { type: decrAmt }
}
function incrementAmtByX(payload) {
  return { type: incrAmtByX, payload }
}
function getUserAccountFullfilled(payload) {
  return { type: getUserAcFF, payload }
}
function getUserAccountPending() {
  return { type: getUserAcPP }
}
function getUserAccountRejected(payload) {
  return { type: getUserAcRj, payload }
}


//thunks
function getUserAccount(id) {
  return async (dispatch, getState) => {
    dispatch(getUserAccountPending())
    try {
      const { data } = await axios.get(`http://localhost:3000/accountt/${id}`)
      dispatch(getUserAccountFullfilled({ x: data.amount }))
    } catch (error) {
      dispatch(getUserAccountRejected({ error: error.message }))
    }
  }
}

//reducers
function reducerAmount(state = { amount: 1 }, action) {
  switch (action.type) {
    case incrAmt:
      return { amount: state.amount + 1 }
    case decrAmt:
      return { amount: state.amount - 1 }
    case incrAmtByX:
      return { amount: state.amount + action.payload.x }
    case getUserAcFF:
      return { amount: state.amount + action.payload.x }
    case getUserAcPP:
      return { amount: state.amount, pending: true }
    case getUserAcRj:
      return { amount: state.amount, error: action.payload.error }

    default: return state
  }
}

store.dispatch(getUserAccount(1))
