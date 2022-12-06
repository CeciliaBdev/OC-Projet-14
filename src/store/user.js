import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesKnown: [
    {
      // id: 1,
      firstname: 'ceciliaTest ',
      lastname: 'bernardTest',
      startdate: '11/24/2022',
      department: 'Marketing',
      birthdate: '21/05/1989',
      street: 'st roch',
      city: 'Eyguieres',
      state: 'Alabam',
      zipcode: '150',
    },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employeesKnown.push(action.payload)
    },
  },
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer
