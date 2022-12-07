import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-HRNet.svg'
// import { Modal } from '@ceciliabdev/react-modal'
import Form from '../components/Form'

function CreateEmployee() {
  // const [openModal, setOpenModal] = useState(false)
  // const message = 'Contenu de la modale'

  return (
    <div className="bg-lime-400/20 h-screen w-screen ">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 rounded-lg">
        <Link to="/" className="">
          <img src={logo} alt="logo hrnet" className="w-12 mx-auto py-1" />
        </Link>
        <Form />

        <div className="my-6">
          <Link
            to="/listEmployees"
            className="border border-solid border-lime-700  rounded-full  relative rounded px-5 py-4 overflow-hidden group bg-white relative hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-8 -mt-12 transition-all duration-1000 transform translate-x-12 bg-lime-400/20 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-black">View current employees</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee
