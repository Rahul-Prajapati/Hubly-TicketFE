import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Signup from './pages/SignUp/Signup'
import Login from './pages/Login/Login'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/signin' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
