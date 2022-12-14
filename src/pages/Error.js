import { Link } from 'react-router-dom'

function Error() {
  const employeesLocalStorage = localStorage.getItem('persist:user')
  console.log('local', employeesLocalStorage)
  return (
    <div className="bg-lime-400/20 h-screen w-screen">
      <div className="bg-white w-[60%] h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 sm:py-5 rounded-xl drop-shadow-2xl">
        <div className="flex flex-col gap-12 justify-center items-center h-full">
          <p className="font-bold text-xl">Page not found</p>
          <Link
            to="/"
            className="border border-solid border-lime-700  rounded-full bg-white  px-5 py-4   hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300 w-36"
          >
            <span className="flex justify-center text-black">Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Error
