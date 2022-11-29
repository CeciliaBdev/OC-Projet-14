import React from 'react'
import logo from '../assets/logo-HRNet.svg'
import { Link } from 'react-router-dom'

function ListEmployees() {
  return (
    <div className="bg-lime-400/20 h-screen w-screen ">
      <Link to="/" className="">
        <img src={logo} alt="logo hrnet" className="w-24 mx-auto p-5" />
      </Link>
      <div className="bg-white w-3/4 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="font-bold text-2xl m-12">Current employees</h1>
      </div>
    </div>
  )
}

export default ListEmployees