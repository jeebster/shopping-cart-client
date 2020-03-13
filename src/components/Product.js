import React from 'react'
import PropTypes from 'prop-types'

const Product = (props) => (
  <div className="card">
    <div className="card-content has-text-centered">
      <h2 className="title is-4">{props.title}</h2>
      <p className="subtitle">{props.description}</p>
      <p>Price: {`$${props.price}`}</p>
      <p>Quantity Available: {props.quantity}</p>
    </div>
    <footer className="card-footer">
      <button
        className="card-footer-item"
        onClick={props.addToCart}>
          Add to Cart
      </button>
    </footer>
  </div>
)

Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  addToCart: PropTypes.func
}

export default Product