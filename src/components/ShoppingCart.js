import React, { useContext } from 'react'
import { AppContext } from '../AppProvider'

const ShoppingCartTable = (actions, state) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {state.cart.items.map((item) =>
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{`$${item.price}`}</td>
            <td>
              <button
                onClick={() => actions.decrementItemQuantity(item.id)}
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() => actions.incrementItemQuantity(item.id)}
              >
                +
              </button>
            </td>
            <td>
              <button onClick={() => actions.removeItem(item.id)}>Remove from Cart</button>
            </td>
          </tr>
        )}
        <tr>
          <td>
            <b>Total: {`$${state.cart.total}`}</b>
          </td>
        </tr>
      </tbody>
    </table>
  </>
)

const EmptyShoppingCart = () => (
  <p className="subtitle">Your cart is empty. Add some products!</p>
)

const ShoppingCart = () => {
  const { actions, state } = useContext(AppContext)
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-underlined">Shopping Cart</h1>
        <p className="subtitle">{state.cart.items.length} item(s) in your cart</p>
        {
          state.cart.items.length > 0 ? ShoppingCartTable(actions, state) :
            EmptyShoppingCart()
        }
      </div>
    </section>
  )
}

export default ShoppingCart