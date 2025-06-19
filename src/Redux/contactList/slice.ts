import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/status'

type ContactState = {
  data: Contact[]
}

const initialState: ContactState = {
  data: [
    {
      name: 'Ana Julia',
      email: 'anajulia@example.com',
      telephone: 999999999,
      favorite: enums.status.FAVORITE,
      id: 1,
    },
    {
      name: 'Kayn the goat',
      email: 'kaynkaynkayn@example.com',
      telephone: 999999999,
      favorite: enums.status.FAVORITE,
      id: 2,
    },
    {
      name: 'Irelia Ionia',
      email: 'ireliaioniana@example.com',
      telephone: 999999999,
      favorite: enums.status.NORMAL,
      id: 3,
    },
    {
      name: 'Fiora de Demacia',
      email: 'fiora.123@example.com',
      telephone: 999999999,
      favorite: enums.status.NORMAL,
      id: 4,
    },
    {
      name: 'Maria Antonietta',
      email: 'maria_antonietta@example.com',
      telephone: 999999999,
      favorite: enums.status.NORMAL,
      id: 5,
    },
    {
      name: 'Jubileu Pipoca',
      email: 'jubileupipoca@example.com',
      telephone: 999999999,
      favorite: enums.status.NORMAL,
      id: 6,
    },
    {
      name: 'Cristiano Ronaldo',
      email: 'cristinaoronaldo@example.com',
      telephone: 999999999,
      favorite: enums.status.FAVORITE,
      id: 7,
    },
    {
      name: 'Yasuo Yone',
      email: 'yasuoyone@example.com',
      telephone: 999999999,
      favorite: enums.status.NORMAL,
      id: 8,
    },
    {
      name: 'Son Goku',
      email: 'songoku@example.com',
      telephone: 999999999,
      favorite: enums.status.FAVORITE,
      id: 9,
    },
  ],
}

const contactListSlice = createSlice({
  name: 'ContactList',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.data = [
        ...state.data.filter(contact => contact.id !== action.payload),
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.data.findIndex(
        contact => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.data[contactIndex] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const thereIsName = state.data.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          action.payload.name.toLocaleLowerCase()
      )

      if (thereIsName) {
        alert('Já existe um contato com este nome.')
      } else {
        const lastContact = state.data[state.data.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
        }
        state.data.push(newContact)
      }
    },
    changeStatusFavorite: (
      state,
      action: PayloadAction<{ id: number; status: enums.status }>
    ) => {
      const contactIndex = state.data.findIndex(
        contact => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.data[contactIndex].favorite = action.payload.status
      }
    },
    changeStatusNormal: (
      state,
      action: PayloadAction<{ id: number; status: enums.status }>
    ) => {
      const contactIndex = state.data.findIndex(
        contact => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.data[contactIndex].favorite = action.payload.status
      }
    },
  },
})

export default contactListSlice.reducer
export const { remove, edit, add, changeStatusFavorite, changeStatusNormal } =
  contactListSlice.actions
