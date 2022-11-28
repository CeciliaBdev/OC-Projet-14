import { Link } from 'react-router-dom'
import bg from '../assets/background.jpg'
import logo from '../assets/logo-HRNet.svg'

function Accueil() {
  return (
    <div className="bg-lime-400/20 h-screen w-screen">
      {/* <img
        src={bg}
        alt="backgound"
        className="opacity-10 h-screen w-screen object-cover relative"
      /> */}
      <div className="bg-white w-1/3 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5">
        <div className="grid grid-rows-3  items-center h-full content-center  ">
          <img src={logo} alt="logo hrnet" className="w-24 mx-auto" />
          <h1 className="text-center text-lime-700 font-bold text-2xl">
            HRnet
          </h1>
          <div className="grid grid-cols-2  h-12 ">
            <div className=" h-full w-full  hover:border hover:bg-lime-400/50 flex justify-center items-center">
              <Link to="/createEmployee">Create employee</Link>
            </div>
            <div className=" h-full w-full  hover:border hover:bg-lime-500/50 flex justify-center items-center">
              <Link to="/listEmployees"> List employees</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Accueil
