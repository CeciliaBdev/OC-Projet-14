import React from 'react'
import { useState } from 'react'
import { Modal } from '@ceciliabdev/react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/user'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'

import { optionStates, optionDepartment } from '../Datas/datas'

function FormHRnet() {
  const [openModal, setOpenModal] = useState(false)
  const message = `L' employé a bien été créé`

  //redux
  const dispatch = useDispatch()

  //constantes formulaires
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [startdate, setStartdate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [department, setDepartment] = useState('')

  //submite button
  function createEmployee(e) {
    e.preventDefault()
    // console.log('firstname', firstname)
    // console.log('lastname', lastname)

    const identityEmployee = {
      firstname,
      lastname,
      birthdate: format(birthdate, 'dd-MM-yyyy'),
      startdate: format(startdate, 'dd-MM-yyyy'),
      street,
      city,
      state: state.value,
      zipcode,
      department: department.value,
    }
    console.log(identityEmployee)
    dispatch(addEmployee(identityEmployee))

    // A faire :
    // vider le formulaire une fois envoyé
    // formater les dates - ok
  }

  return (
    <div className="bg-white p-5 rounded-xl drop-shadow-2xl">
      <form
        onSubmit={createEmployee}
        className="flex flex-col w-72 items-center"
      >
        <label>FirstName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1"
          id="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
          required
          minLength={2}
          maxLength={20}
        />

        <label>LastName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
          name="lastname"
          required
          minLength={2}
          maxLength={20}
        />

        <label className="">Date of birth</label>
        <div className="flex">
          <DatePicker
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
            className="border border-solid justify-items-center py-1"
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>

        <label className="">Start Date</label>
        <div className="flex">
          <DatePicker
            selected={startdate}
            onChange={(date) => setStartdate(date)}
            className="border border-solid justify-items-center py-1"
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>

        <fieldset className="border border-state p-5">
          <legend>Adress</legend>
          <div className="flex flex-col items-center">
            <label>Street</label>
            <input
              type="text"
              className="border border-solid w-44 py-1"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
              required
              minLength={2}
              maxLength={30}
            />

            <label>City</label>
            <input
              type="text"
              className="border border-solid w-44 py-1"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              required
              minLength={2}
              maxLength={30}
            />

            <label>State</label>
            <Select
              options={optionStates}
              onChange={setState}
              className="w-44"
            />

            <label>Zip Code</label>
            <input
              type="number"
              className="border border-solid w-44 py-1"
              id="city"
              onChange={(e) => setZipcode(e.target.value)}
              required
              min={0}
            />
          </div>
        </fieldset>

        <label>Department</label>
        <Select
          options={optionDepartment}
          onChange={setDepartment}
          className="w-44"
        />

        <button
          type="submit"
          className="border border-solid w-44 my-4 hover:bg-slate-100 rounded py-2"
        >
          Save
        </button>
      </form>
      {/* <button
        className="openModalBtn border border-solid px-5 py-2 rounded hover:bg-slate-100"
        onClick={() => {
          setOpenModal(true)
        }}
        type="submit"
      >
        Save
      </button>

      {openModal && <Modal closeModal={setOpenModal} content={message} />} */}
    </div>
  )
}

export default FormHRnet
