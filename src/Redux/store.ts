import { configureStore } from '@reduxjs/toolkit'
import contactListSlice from './contactList/slice'
import filterSlice from './filter/slice'

const store = configureStore({
  reducer: {
    contactListReducer: contactListSlice,
    filterReducer: filterSlice,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
