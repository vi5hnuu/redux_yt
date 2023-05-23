import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const accountSlice = createSlice({
  name: 'account-slice',
  initialState: { amount: 0 },
  reducers: {
    init: (state, action) => {
      return { amount: action.payload.amount }
    },
    initPending: (state, action) => {
      return { amount: state.amount, pending: true }
    },
    initRejeected: (state, action) => {
      return { amount: state.amount, error: action.payload.error }
    },
    increment: (state, action) => {
      state.amount += 1
    },
    decrement: (state, action) => {
      state.amount -= 1
    },
    incrementAmtByX: (state, action) => {
      state.amount += action.payload.x
    }
  },
})

//thunks
function initilizeAmount(id) {
  return async (dispatch, getState) => {
    dispatch(accountSlice.actions.initPending())
    try {
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
      setTimeout(() => {
        dispatch(accountSlice.actions.init({ amount: data.amount }))
      }, 5000)
    } catch (error) {
      dispatch(accountSlice.actions.initRejeected({ error: error.message }))
    }
  }
}

export const thunks = { initilizeAmount }
export const slice = accountSlice
export const actions = accountSlice.actions