import React from 'react'
import { useState, useRef } from 'react'
import { Modal } from '@ceciliabdev/react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { format } from 'date-fns'
import locale from 'date-fns/locale/zh-CN'
import moment from 'moment'
import getYear from 'date-fns/getYear'
import { getMonth } from 'date-fns'
import range from 'lodash.range'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { addEmployee } from '../store/user'
import { optionStates, optionDepartment } from '../Datas/datas'
// import Datepicker_years from './Datepicker_years'

function FormHRnet() {
  const [openModal, setOpenModal] = useState(false)
  //const message = `L' employé a bien été créé`
  const [message, setMessage] = useState('')

  //redux
  const dispatch = useDispatch()
  //reference formulaire
  const form = useRef(null)

  // // custom datepicker
  const years = range(1950, getYear(new Date()) + 1, 1)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  //constantes formulaires
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [startdate, setStartdate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState([])
  const [zipcode, setZipcode] = useState('')
  const [department, setDepartment] = useState('')

  // test useForm
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const registerOptions = {
    department: { required: 'Department is required' },
    state: { required: 'State id required' },
    birthdate: { required: 'Birthdate incorrect' },
    startdate: { required: 'Stardate incorrect' },
  }
  const dateFormated = (date) => {
    return `${format(new Date(date), 'dd-MM-yyyy')}`
  }
  //submite button
  const createEmployee = (data) => {
    const FormatData = {
      firstname: data.firstname,
      lastname: data.lastname,
      birthdate: dateFormated(data.birthdate),
      startdate: dateFormated(data.startdate),
      street: data.street,
      city: data.city,
      state: data.state.value,
      zipcode: data.zipcode,
      department: data.department.value,
    }
    console.log(data)
    console.log(FormatData)
    dispatch(addEmployee(FormatData))
    // e.preventDefault()
    // const identityEmployee = {
    //   firstname,
    //   lastname,
    //   birthdate: format(birthdate, 'dd-MM-yyyy'),
    //   startdate: format(startdate, 'dd-MM-yyyy'),
    //   street,
    //   city,
    //   state: state.value,
    //   zipcode,
    //   department: department.value,
    // }
    // const regexName = /^[A-zÀ-ú-]{2,}$/
    // const regexAdress = /^[A-Za-z0-9-\s]{2,}$/
    // if (
    //   (regexName.test(firstname) && regexName.test(lastname)) === true &&
    //   (regexAdress.test(city) && regexAdress.test(street)) === true &&
    //   zipcode > 0
    // ) {
    //   dispatch(addEmployee(identityEmployee))
    //   console.log(identityEmployee)
    //   setFirstname('')
    //   setLastname('')
    //   setBirthdate('')
    //   setStartdate('')
    //   setStreet('')
    //   setCity('')
    //   setZipcode('')
    //   form.current.reset()
    //   setOpenModal(true)
    //   setMessage(`L employé *  ${firstname}-${lastname}  *  a bien été créé`)
    // } else {
    //   //console.log('formulaire incomplet')
    //   setOpenModal(true)
    //   setMessage(
    //     'Formulaire incomplet, Veuillez remplir correctement les champs'
    //   )
    // }
  }

  return (
    <div className="bg-white p-5 rounded-xl drop-shadow-2xl">
      <form
        onSubmit={handleSubmit(createEmployee)}
        className="flex flex-col w-72 items-center z-10"
        ref={form}
      >
        <label>FirstName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1 hover:bg-lime-100"
          id="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          {...register(
            'firstname',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,}$/ }
          )}
        />
        {errors.firstname && (
          <span className="text-red-400 text-xs">Firstname incorrect</span>
        )}
        <label>LastName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1 hover:bg-lime-100"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
          {...register(
            'lastname',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,}$/ }
          )}
        />
        {errors.lastname && (
          <span className="text-red-400 text-xs">Lastname incorrect</span>
        )}

        {/* <DatePicker
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
            className="border border-solid justify-items-center py-1 hover:bg-lime-100"
            dateFormat="dd-MM-yyyy"
            name="birthdate"
            required
          /> */}

        <label className="">Birth Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="birthdate"
            rules={registerOptions.birthdate}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                // selected={startdate}
                // onChange={(date) => setStartdate(date)}
                selected={value}
                onChange={onChange}
                className="border border-solid justify-items-center py-1 hover:bg-lime-100"
              />
            )}
          />
        </div>
        {errors.birthdate && (
          <span className="text-red-400 text-xs">Birthdate incorrect </span>
        )}

        <label className="">Start Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="startdate"
            rules={registerOptions.startdate}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                // selected={startdate}
                // onChange={(date) => setStartdate(date)}
                selected={value}
                onChange={onChange}
                className="border border-solid justify-items-center py-1 hover:bg-lime-100"
              />
            )}
          />
        </div>
        {errors.startdate && (
          <span className="text-red-400 text-xs">Startdate incorrect </span>
        )}
        <fieldset className="border border-state p-5">
          <legend>Adress</legend>
          <div className="flex flex-col items-center">
            <label>Street</label>
            <input
              type="text"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
              {...register(
                'street',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.street && (
              <span className="text-red-400 text-xs">Street incorrect</span>
            )}

            <label>City</label>
            <input
              type="text"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              {...register(
                'city',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.city && (
              <span className="text-red-400 text-xs">City incorrect</span>
            )}

            <label>State</label>
            {/* <Select
              options={optionStates}
              onChange={setState}
              className="w-44 "
              // required
              name="state"
            /> */}
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={registerOptions.state}
              render={({ field }) => (
                <Select
                  options={optionStates}
                  {...field}
                  label="Text field"
                  className="w-44 z-12"
                />
              )}
            />
            {errors.state && (
              <span className="text-red-400 text-xs">State incorrect</span>
            )}

            <label>Zip Code</label>
            <input
              type="number"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="city"
              onChange={(e) => setZipcode(parseInt(e.target.value))}
              {...register('zipcode', { required: true })}
            />
            {errors.zipcode && (
              <span className="text-red-400 text-xs">Zipcode incorrect</span>
            )}
          </div>
        </fieldset>
        <label>Department</label>
        {/* <Select
          options={optionDepartment}
          onChange={setDepartment}
          className="w-44 z-12"
          name="department"
          label={state}
          // required
        /> */}
        <Controller
          name="department"
          control={control}
          defaultValue=""
          rules={registerOptions.department}
          render={({ field }) => (
            <Select
              options={optionDepartment}
              {...field}
              label="Text field"
              className="w-44 z-12"
            />
          )}
        />
        {errors.department && (
          <span className="text-red-400 text-xs">Department incorrect</span>
        )}
        {/* <button
          className="openModalBtn border border-solid px-5 py-2 my-4 rounded hover:bg-lime-600"
          type="submit"
        >
          Save
        </button> */}
        {/* {openModal && <Modal closeModal={setOpenModal} content={message} />} */}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormHRnet
