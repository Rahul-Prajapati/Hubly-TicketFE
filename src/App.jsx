import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Landing from './pages/Landing/Landing'
import Signup from './pages/SignUp/Signup'
import Login from './pages/Login/Login'
import Dashboard from './pages/DashBoard/Dashboard';

function App() {

// authentication function
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; 
};

// Private Route Component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/signin' element={<Login />} />

          <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App
