import { configureStore } from '@reduxjs/toolkit'
import global from './reducers/global'

export const store = configureStore({
  reducer: {
    global,
  },
})