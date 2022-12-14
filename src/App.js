import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import CreateEmployee from './pages/CreateEmployee'
import ListEmployees from './pages/ListEmployees'
import Error from './pages/Error'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/createEmployee" element={<CreateEmployee />} />
        <Route path="/listEmployees" element={<ListEmployees />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
