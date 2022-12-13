import React from 'react'
import logo from '../assets/logo-HRNet.png'
import { Link } from 'react-router-dom'
import List from '../components/List'

function ListEmployees() {
  return (
    <div className="bg-lime-400/20 h-screen w-screen ">
      <Link to="/">
        <img
          src={logo}
          alt="logo hrnet"
          className="w-[100px] h-[100px] mx-auto p-6 rounded-full"
        />
      </Link>
      <div className="bg-white w-[100%] h-min absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center py-4">
        <h1 className="font-bold text-2xl mx-5">Current employees</h1>
        <List />
      </div>
    </div>
  )
}

export default ListEmployees
