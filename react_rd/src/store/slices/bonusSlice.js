import { createSlice } from "@reduxjs/toolkit";

const bonusSlice = createSlice({
  name: 'bonus-slice',
  initialState: { points: 0 },
  reducers: {
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

export const slice = bonusSlice
export const actions = bonusSlice.actions