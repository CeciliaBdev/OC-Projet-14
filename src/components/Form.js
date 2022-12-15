import React from 'react'
import { useState, useRef } from 'react'
import { Modal } from '@ceciliabdev/react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { addEmployee } from '../store/user'
import { optionStates, optionDepartment } from '../Datas/datas'

function FormHRnet() {
  const [openModal, setOpenModal] = useState(false)
  //const message = `L' employé a bien été créé`
  const [message, setMessage] = useState('')
  //redux
  const dispatch = useDispatch()
  //reference formulaire
  const form = useRef(null)

  // use useForm
  const {
    register,
    handleSubmit,
    reset,
    control,
    defaultValues,
    formState: { errors, isValid },
  } = useForm()

  //format date datepicker
  const dateFormated = (date) => {
    return `${format(new Date(date), 'dd-MM-yyyy')}`
  }

  //submite button
  const createEmployee = (data) => {
    //pas d'erreurs
    if (isValid) {
      const FormatData = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: dateFormated(data.birthdate),
        startdate: dateFormated(data.startdate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zipcode: parseInt(data.zipcode),
        department: data.department.value,
      }
      console.log(data)
      console.log(FormatData)
      //envoi dans la liste d'employés
      dispatch(addEmployee(FormatData))

      //Logique localstorage pour persist redux
      //1. je recupère ce qui est présent le store
      //2. j'ajoute mon nouvel employé (FormatData)
      //3. au refresh conserve le localstorage

      //employeesLocalStorage.push(FormatData)
      localStorage.setItem(
        'persist:user',
        JSON.stringify('FormatData', FormatData)
      )
      // //ouverture modal et message
      setOpenModal(true)
      setMessage(
        `Employee  ${data.firstname} ${data.lastname}  has been created `
      )
      reset({
        firstname: '',
        lastname: '',
        street: '',
        city: '',
        state: '',
        zipcode: null,
      })
    } else {
      console.log('formulaire incomplet')
    }
  }

  return (
    <div className="bg-white py-1 px-5 rounded-xl drop-shadow-2xl">
      <form
        onSubmit={handleSubmit(createEmployee)}
        className="flex flex-col w-72 items-center z-10"
        ref={form}
      >
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1 hover:bg-lime-100"
          id="firstname"
          // onChange={(e) => setFirstname(e.target.value)}
          {...register(
            'firstname',
            { required: true },
            { pattern: /^[A-zÀ-ú-]{2,}$/ }
          )}
        />
        {errors.firstname && (
          <span className="text-red-400 text-xs">Firstname incorrect</span>
        )}
        <label htmlFor="lastname">LastName</label>
        <input
          type="text"
          className="border border-solid w-44 py-1 hover:bg-lime-100"
          id="lastname"
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

        <label htmlFor="birthdate">Birth Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="birthdate"
            rules={{ required: 'Birthdate required' }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                // selected={startdate}
                // onChange={(date) => setStartdate(date)}
                selected={value}
                onChange={onChange}
                className="border border-solid justify-items-center py-1 hover:bg-lime-100"
                dateFormat="dd-MM-yyyy"
                id="birthdate"
              />
            )}
          />
        </div>

        <span className="text-red-400 text-xs">
          {errors.birthdate && errors.birthdate.message}
        </span>

        <label htmlFor="startdate">Start Date</label>
        <div className="flex">
          <Controller
            control={control}
            name="startdate"
            rules={{ required: 'StartDate required' }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={onChange}
                className="border border-solid justify-items-center py-1 hover:bg-lime-100"
                dateFormat="dd-MM-yyyy"
                id="startdate"
              />
            )}
          />
        </div>
        <span className="text-red-400 text-xs">
          {errors.startdate && errors.startdate.message}
        </span>
        <fieldset className="border border-state p-5">
          <legend>Adress</legend>
          <div className="flex flex-col items-center">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="street"
              {...register(
                'street',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.street && (
              <span className="text-red-400 text-xs">Street incorrect</span>
            )}
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="city"
              {...register(
                'city',
                { required: true },
                { pattern: /^[A-zÀ-ú-]{2,}$/ }
              )}
            />
            {errors.city && (
              <span className="text-red-400 text-xs">City incorrect</span>
            )}
            <label htmlFor="state">State</label>
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
              rules={{ required: 'Select a state' }}
              render={({ field }) => (
                <Select
                  options={optionStates}
                  {...field}
                  label="Text field"
                  className="w-44 z-12"
                  inputId="state"
                />
              )}
            />
            <span className="text-red-400 text-xs">
              {errors.state && errors.state.message}
            </span>

            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="number"
              className="border border-solid w-44 py-1 hover:bg-lime-100"
              id="zipcode"
              // onChange={(e) => setZipcode(parseInt(e.target.value))}
              {...register('zipcode', { required: true })}
            />
            {errors.zipcode && (
              <span className="text-red-400 text-xs">Zipcode incorrect</span>
            )}
          </div>
        </fieldset>
        <label htmlFor="department">Department</label>
        <Controller
          name="department"
          control={control}
          defaultValue=""
          rules={{ required: 'Select a department' }}
          render={({ field }) => (
            <Select
              options={optionDepartment}
              {...field}
              label="Text field"
              className="w-44 z-12"
              inputId="department"
            />
          )}
        />
        <span className="text-red-400 text-xs">
          {errors.department && errors.department.message}
        </span>

        <button
          className="openModalBtn border border-solid px-5 py-2 my-4 rounded hover:bg-lime-400/20"
          type="submit"
        >
          Save
        </button>
        {openModal && <Modal closeModal={setOpenModal} content={message} />}
      </form>
    </div>
  )
}

export default FormHRnet
