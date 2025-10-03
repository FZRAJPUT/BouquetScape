import { useState } from 'react'
import AvailableProducts from './components/AvailableProducts'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import AddProduct from './pages/addProduct/AddProduct'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full pl-20'>
      <Sidebar />
      <Routes>
        <Route path="/products" element={<AvailableProducts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </div>
  )
}

export default App
