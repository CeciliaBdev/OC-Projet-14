import { Link } from 'react-router-dom'
import logo from '../assets/logo-HRNet.png'

function Accueil() {
  const employeesLocalStorage = localStorage.getItem('persist:user')
  console.log('local', employeesLocalStorage)
  return (
    <div className="bg-lime-400/20 h-screen w-screen">
      <div className="bg-white w-[60%] h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 sm:py-5 rounded-xl drop-shadow-2xl">
        <div className="grid grid-rows-3  items-center h-full content-center  ">
          <img
            src={logo}
            alt="logo hrnet"
            className=" mx-auto"
            width="100px"
            height="100px"
          />
          <h1 className="text-center text-lime-700 font-bold text-3xl">
            HRnet
          </h1>
          <div className="grid grid-cols-1 gap-2 h-12 sm:grid-cols-2  ">
            <div className=" h-full w-full   flex justify-center items-center">
              <Link
                to="/createEmployee"
                className="border border-solid border-lime-700  rounded-full bg-white  px-5 py-4   hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300 w-44"
              >
                <span className="flex justify-center text-black">
                  Create employee
                </span>
              </Link>
            </div>

            <div className=" h-full w-full   flex justify-center items-center">
              <Link
                to="/listEmployees"
                className="border border-solid border-lime-700  rounded-full bg-white  px-5 py-4   hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300 w-44"
              >
                <span className=" flex justify-center text-black">
                  List employees
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Accueil
