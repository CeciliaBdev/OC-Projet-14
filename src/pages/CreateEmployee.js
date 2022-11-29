import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo-HRNet.svg'
import { Modal } from '@ceciliabdev/react-modal'

function CreateEmployee() {
  const [openModal, setOpenModal] = useState(false)
  const message = 'Contenu de la modale'

  return (
    <div className="bg-lime-400/20 h-screen w-screen ">
      <Link to="/" className="">
        <img src={logo} alt="logo hrnet" className="w-24 mx-auto p-5" />
      </Link>

      <div className="bg-white w-3/4 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
        <h1 className="font-bold text-2xl m-12">Create employee</h1>

        {/* form */}
        <form type="submit">
          <div className="flex flex-col gap-8">
            <div>
              <label>
                Firstname
                <input type="text" className="border mx-3" />
              </label>
              <label>
                Lastname
                <input type="text" className="border mx-3" />
              </label>
            </div>
            {/* selection de date */}
            <div>
              <label>
                Date of birth
                <input type="text" className="border mx-3" />
              </label>
              <label>
                StartDate
                <input type="text" className="border mx-3" />
              </label>
            </div>
            {/* Adress */}
            <div>
              <fieldset className="border border-solid border-gray-300 p-3">
                <legend>Adress</legend>

                <label>
                  Street
                  <input type="text" className="border mx-3" />
                </label>
                <label>
                  City
                  <input type="text" className="border mx-3" />
                </label>
                {/* menu déroulants */}
                <div> 2 menus déroulants</div>
              </fieldset>
              {/* 1 menu deroulant */}
              <div>Department</div>
            </div>
          </div>
        </form>

        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Open
        </button>
        {openModal && <Modal closeModal={setOpenModal} content={message} />}

        <div>
          <Link to="/listEmployees" className="">
            View current employees
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee
