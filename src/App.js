import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/createUser" />
        <Route path="/listUsers" />
      </Routes>
    </div>
  )
}

export default App
