import React from 'react'
import { BrowserRouter,Routes,Route,useLocation } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <BrowserRouter>
      {/* {!isHidden && <Navbar />} */}
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
      </Routes>
    </BrowserRouter>
  );
}
