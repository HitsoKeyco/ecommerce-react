
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useEffect } from 'react'
import ProductIdPage from './pages/ProductIdPage'
import Header from './components/shared/Header'
import CartPages from './pages/CartPages'
import { getCartThunk } from './store/slices/cart.slice'

import PurchasesPage from './pages/PurchasesPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  },[])
  
  

  
  return (
    <>
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/product/:id' element={ <ProductIdPage />} />     
        <Route element={ <ProtectedRoutes />}>
          <Route path='/cart' element={ <CartPages />} />
          <Route path='/purchases' element={ <PurchasesPage />} />
        </Route>
      </Routes>
    </div>      
    </>
  )
}

export default App
