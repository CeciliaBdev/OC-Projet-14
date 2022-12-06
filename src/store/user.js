import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  identityEmployee: {
    firstname: '',
    lastname: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
    },
  },
})

export const { addEmployee } = userSlice.actions

export default userSlice.reducer
