import React from 'react'
import { useState } from 'react'
import { Modal } from '@ceciliabdev/react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/user'

import { optionStates, optionDepartment } from '../Datas/datas'

function FormHRnet() {
  const [openModal, setOpenModal] = useState(false)
  const message = `L' employé a bien été créé`

  //redux
  const dispatch = useDispatch()

  //constantes formulaires
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [dateOfStart, setDateOfStart] = useState('')
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
      dateOfBirth: format(dateOfBirth, 'dd-MM-yyyy'),
      dateOfStart: format(dateOfStart, 'dd-MM-yyyy'),
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
    <div className="bg-white p-5">
      <form className="flex flex-col gap-5 w-96">
        <div className="flex gap-5">
          <label>FirstName</label>
          <input
            type="text"
            className="border border-solid"
            id="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label>LastName</label>
          <input
            type="text"
            className="border border-solid"
            id="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="flex ">
          <label className="w-44">Date of birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            className="border border-solid"
            dateFormat="dd-MM-yyyy"
          />
        </div>
        <div className="flex ">
          <label className="w-44">Start Date</label>
          <DatePicker
            selected={dateOfStart}
            onChange={(date) => setDateOfStart(date)}
            className="border border-solid"
            dateFormat="dd-MM-yyyy"
          />
        </div>
        <div>
          <fieldset className="border border-state">
            <legend>Adress</legend>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 ">
                <label>Street</label>
                <input
                  type="text"
                  className="border border-solid"
                  id="street"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="flex gap-5">
                <label>City</label>
                <input
                  type="text"
                  className="border border-solid"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label>State</label>
                <Select options={optionStates} onChange={setState} />
              </div>
              <div className="flex gap-5">
                <label>Zip Code</label>
                <input
                  type="number"
                  className="border border-solid"
                  id="city"
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <div>
            <label>Department</label>
            <Select options={optionDepartment} onChange={setDepartment} />
          </div>
        </div>

        <button
          type="submit"
          className="border border-solid"
          onClick={createEmployee}
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
