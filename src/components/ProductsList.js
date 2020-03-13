import React, { useContext } from 'react'
import { AppContext } from '../AppProvider'
import Product from './Product'

const ProductsList = () => {
  const { actions, state } = useContext(AppContext)
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-underlined">Products</h1>
        <div className="columns">
          {state.products.map((product) => (
            <div className="column" key={product.id}>
              <Product {...product} addToCart={() => actions.addItem(product.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsList