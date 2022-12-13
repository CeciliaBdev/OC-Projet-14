import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo-HRNet.png'
// import { Modal } from '@ceciliabdev/react-modal'
import Form from '../components/Form'

function CreateEmployee() {
  // const [openModal, setOpenModal] = useState(false)
  // const message = 'Contenu de la modale'

  return (
    <div className="bg-lime-400/20 h-screen w-screen ">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 rounded-lg">
        <div className="flex gap-1">
          <Link
            to="/listEmployees"
            className="border border-solid border-lime-700  rounded-full bg-white  px-5 py-4   hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300 w-50 my-2"
          >
            <span className="relative text-black">View current employees</span>
          </Link>
          <Link
            to="/"
            className="border border-solid border-lime-700  rounded-full bg-white  px-5 py-4   hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300 w-50 my-2"
          >
            <span className="relative text-black">Home</span>
          </Link>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default CreateEmployee
