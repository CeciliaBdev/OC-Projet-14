import React from 'react'
import { useState } from 'react'
import { Modal } from '@ceciliabdev/react-modal'

function Form() {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', inputs)
  }

  const [openModal, setOpenModal] = useState(false)
  const message = `L' employé ** ${inputs.firstname} ${inputs.lastname} ** a bien été créé`

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label>
          Firstname:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname || ''}
            onChange={handleChange}
            className="border mx-3"
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            name="lastname"
            value={inputs.lastname || ''}
            onChange={handleChange}
            className="border mx-3"
          />
        </label>
      </div>
      <div>
        <label>Date of birth:</label>
      </div>

      {/* <input type="submit" /> */}
      <button
        className="openModalBtn border border-solid px-5 py-2 rounded hover:bg-slate-100"
        onClick={() => {
          setOpenModal(true)
        }}
        type="submit"
      >
        Save
      </button>
      {openModal && <Modal closeModal={setOpenModal} content={message} />}
    </form>
  )
}

export default Form
