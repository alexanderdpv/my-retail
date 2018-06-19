import React, { Component } from 'react';

class Quantity extends Component {
  render () {
    return (
      <div className="quantity">
        <span className="quantity-label">quantity: </span>
        <button className="quantity-decrement round-button">-</button>
        <span className="quantity-value">1</span>
        <button className="quantity-increment round-button">+</button>
      </div>
    )
  }
}

export default Quantity
