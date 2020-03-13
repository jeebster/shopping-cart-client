import React from 'react'

import { AppProvider } from './AppProvider'
import ShoppingCart from './components/ShoppingCart'
import ProductsList from './components/ProductsList'

import './App.scss'

const App = () => (
  <div>
    <AppProvider>
      <ShoppingCart />
      <ProductsList />
    </AppProvider>
  </div>
)

export default App
