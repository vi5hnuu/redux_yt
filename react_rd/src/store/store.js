import { configureStore } from '@reduxjs/toolkit'
import { slice as AccountSlice } from './slices/accountSlice'
import { slice as BonusSlice } from './slices/bonusSlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
export const store = configureStore({
  reducer: {
    accountS: AccountSlice.reducer,
    bonusS: BonusSlice.reducer
  },
  middleware: [thunk, logger]
})
