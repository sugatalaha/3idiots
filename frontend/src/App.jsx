import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import {Toaster} from 'react-hot-toast';

import './App.css'
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { useAuthStore } from './store/useAuthStore';



function App() {

  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();
 
  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  console.log(authUser);
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/"/>}/>
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/"/>}/>

      </Routes>
      <Toaster/>
    </>
  )
}

export default App
