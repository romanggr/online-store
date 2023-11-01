import React from 'react'
import { GlobalStyles } from './css/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Products from './pages/Products'
import Basket from './pages/Basket'
import { Provider } from 'react-redux'
import { store } from './store/store'
import OneProductCart from './pages/OneProductCart'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Products />} />
            <Route path='/cart/:id' element={<OneProductCart />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='*' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App