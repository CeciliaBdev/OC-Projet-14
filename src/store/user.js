import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeesKnown: [
    {
      // id: 0,
      firstname: 'Cecilia ',
      lastname: 'Bernard',
      startdate: '24-11-2022',
      department: 'Marketing',
      birthdate: '21-05-1989',
      street: 'St roch',
      city: 'Eyguieres',
      state: 'AL',
      zipcode: 13430,
    },
    {
      // id: 1,
      firstname: 'Vanessa ',
      lastname: 'Ricci',
      startdate: '26-11-2022',
      department: 'Marketing',
      birthdate: '13-08-1986',
      street: 'Chemin du moulon',
      city: 'Miramas',
      state: 'CA',
      zipcode: 13230,
    },
    // test paginations avec plusieurs employés
    // {
    //   // id: 0,
    //   firstname: 'Cecilia ',
    //   lastname: 'Bernard',
    //   startdate: '24-11-2022',
    //   department: 'Marketing',
    //   birthdate: '21-05-1989',
    //   street: 'St roch',
    //   city: 'Eyguieres',
    //   state: 'AL',
    //   zipcode: 13430,
    // },
    // {
    //   // id: 1,
    //   firstname: 'Vanessa ',
    //   lastname: 'Ricci',
    //   startdate: '26-11-2022',
    //   department: 'Marketing',
    //   birthdate: '13-08-1986',
    //   street: 'Chemin du moulon',
    //   city: 'Miramas',
    //   state: 'CA',
    //   zipcode: 13230,
    // },
    // {
    //   // id: 0,
    //   firstname: 'Cecilia ',
    //   lastname: 'Bernard',
    //   startdate: '24-11-2022',
    //   department: 'Marketing',
    //   birthdate: '21-05-1989',
    //   street: 'St roch',
    //   city: 'Eyguieres',
    //   state: 'AL',
    //   zipcode: 13430,
    // },
    // {
    //   // id: 1,
    //   firstname: 'Vanessa ',
    //   lastname: 'Ricci',
    //   startdate: '26-11-2022',
    //   department: 'Marketing',
    //   birthdate: '13-08-1986',
    //   street: 'Chemin du moulon',
    //   city: 'Miramas',
    //   state: 'CA',
    //   zipcode: 13230,
    // },
    // {
    //   // id: 0,
    //   firstname: 'Cecilia ',
    //   lastname: 'Bernard',
    //   startdate: '24-11-2022',
    //   department: 'Marketing',
    //   birthdate: '21-05-1989',
    //   street: 'St roch',
    //   city: 'Eyguieres',
    //   state: 'AL',
    //   zipcode: 13430,
    // },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addEmployee(state, action) {
      // j'ajoute dans mon tableau les nouveaux employées
      state.employeesKnown.push(action.payload)
    },
  },
})
export const { addEmployee } = userSlice.actions

export default userSlice.reducer
