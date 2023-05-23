import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: 'account-slice',
  initialState: { amount: 0 },
  reducers: {
    increment: (state, action) => {
      state.amount += 1
    },
    decrement: (state, action) => {
      state.amount -= 1
    },
    incrementAmtByX: (state, action) => {
      state.amount += action.payload.x
    }
  }
})

export const slice = accountSlice
export const actions = accountSlice.actions