import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFoundPage from './pages/not_found/NotFoundPage'
import HomeLoader from './components/HomeLoader'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 3.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer) // cleanup
  }, [])

  if (loading) {
    // Show only loader while loading
    return(
      <div className='h-screen w-full flex items-center justify-center'>
    <HomeLoader />
      </div> 
  )
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
