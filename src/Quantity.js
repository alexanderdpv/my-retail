import React, { Component } from 'react';

class Quantity extends Component {
  render () {
    return (
      <div className="quantity">
        <span className="quantity-label">quantity: </span>
        <i className="quantity-decrement fa fa-minus-circle"></i>
        <span className="quantity-value">1</span>
        <i className="quantity-increment fa fa-plus-circle"></i>
      </div>
    )
  }
}

export default Quantity
