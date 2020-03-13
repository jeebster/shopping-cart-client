// These components provide centralized state management for use with `useContext` hook

import React, { useState, useEffect } from 'react'
import cloneDeep from 'lodash/cloneDeep' // robust alternative to Object.assign

const AppContext = React.createContext({
  products: [],
  cart: {
    items: [],
    total: 0
  }
})

const AppProvider = (props) => {
  // Actions
  const addItem = (itemId) => {
    const { cart, products } = state
    const cartQueryItem = cart.items.find((item) => item.id === itemId)

    if (cartQueryItem !== undefined ) {
      // Item reference exists in cart, update the quantity
      incrementItemQuantity(itemId)
    } else {
      // This is a new cart item, set base quantity and add to cart.items
      const productQueryItem = products.find((item) => item.id === itemId)

      // keep state immutable via copy
      const productCopy = cloneDeep(productQueryItem)
      productCopy.quantity = 1

      setState(prevState => ({
        ...prevState,
        cart: {
          total: prevState.cart.total + productCopy.price,
          items: [...prevState.cart.items, productCopy]
        }
      }))
    }
  }

  const removeItem = (itemId) => {
    setState(prevState => ({
      ...prevState,
      cart: {
        total: prevState.cart.total - calculateLineItemTotal(itemId),
        items: prevState.cart.items.filter(item => item.id !== itemId)
      }
    }))
  }

  const incrementItemQuantity = (itemId) => {
    // keep state immutable via copy
    const cartItems = cloneDeep(state.cart.items)
    const products = cloneDeep(state.products)

    const cartQueryItem = cartItems.find((item) => item.id === itemId)
    const productQueryItem = products.find((item) => item.id === itemId)

    if (cartQueryItem !== undefined) {
      // ensure that we are not exceeding the available product quantity
      // this should ideally be handled in the checkout process via database locking
      if (cartQueryItem.quantity < productQueryItem.quantity) {
        cartQueryItem.quantity++

        setState(prevState => ({
          ...prevState,
          cart: {
            total: prevState.cart.total + cartQueryItem.price,
            items: cartItems
          }
        }))
      }
    }
  }

  const decrementItemQuantity = (itemId) => {
    // keep state immutable via copy
    const cartItems = cloneDeep(state.cart.items) // keep state immutable via copy
    const cartQueryItem = cartItems.find((item) => item.id === itemId)

    if (cartQueryItem !== undefined) {
      if (cartQueryItem.quantity > 1) {
        cartQueryItem.quantity--
        setState(prevState => ({
          ...prevState,
          cart: {
            total: prevState.cart.total - cartQueryItem.price,
            items: cartItems
          }
        }))
      }
    }
  }

  // Helper functions
  const calculateLineItemTotal = (itemId) => {
    const item = state.cart.items.find((item) => item.id === itemId)
    return item.quantity * item.price
  }

  // State
  const [state, setState] = useState({
    products: [],
    cart: {
      items: [],
      total: 0
    }
  })

  // Fetch products from API server
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => res.json())
      .then(json =>
        setState(
          prevState => (
            { ...prevState, products: json['products'] }
          )
        )
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <AppContext.Provider
      value={
        {
          state: state,
          actions: {
            addItem,
            removeItem,
            incrementItemQuantity,
            decrementItemQuantity
          }
        }
      }
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }