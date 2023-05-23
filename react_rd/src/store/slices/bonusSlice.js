import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bonusSlice = createSlice({
  name: 'bonus-slice',
  initialState: { points: 0 },
  reducers: {
    init: (state, action) => {
      return { points: action.payload.points }
    },
    initPending: (state, action) => {
      return { points: state.points, pending: true }
    },
    initRejected: (state, action) => {
      return { points: state.points, error: action.payload.error }
    },
    increment: (state, action) => {
      state.points += 1
    },
    decrement: (state, action) => {
      state.points -= 1
    },
    incrementAmtByX: (state, action) => {
      state.points += action.payload.x
    }
  }
})
//thunks
function initilizeBonus(id) {
  return async (dispatch, getState) => {
    dispatch(bonusSlice.actions.initPending())
    try {
      const { data } = await axios.get(`http://localhost:3000/bonuses/${id}`)
      setTimeout(() => {
        dispatch(bonusSlice.actions.init({ points: data.points }))
      }, 5000)
    } catch (error) {
      dispatch(bonusSlice.actions.initRejected)
    }
  }
}
export const thunks = { initilizeBonus }
export const slice = bonusSlice
export const actions = bonusSlice.actions