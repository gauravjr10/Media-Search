import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPages'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <div className='min-h-screen text-white bg-black w-full'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
        </Routes>
        <ToastContainer/>
      </div>
    </>
  )
}


export default App
