import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboardpage from './pages/Dashboardpage'
import Truecallerpage from './pages/Truecallerpage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
   <Route path="/" element={<Navigate to="/signup"/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/signup" element={<SignUp/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/dashboard" element={<Dashboardpage/>} />
   <Route path="/truecaller" element={<Truecallerpage/>} />

   </Routes>
   </>
  )
}

export default App
