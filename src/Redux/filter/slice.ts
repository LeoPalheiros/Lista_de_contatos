import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/status'

type filterState = {
  status: enums.status.ALL | enums.status.FAVORITE | enums.status.NORMAL
  searchTerm?: string
}

const initialState: filterState = {
  searchTerm: '',
  status: enums.status.ALL,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    changeFilter: (state, action: PayloadAction<filterState>) => {
      state.status = action.payload.status
    },
  },
})

export default filterSlice.reducer
export const { changeTerm, changeFilter } = filterSlice.actions
