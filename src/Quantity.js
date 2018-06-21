import React, { Component } from 'react';

class Quantity extends Component {
  state = {
    quantity: 1
  }

  constructor(props) {
    super(props);

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  incrementQuantity() {
    this.state({ quantity : this.state.quantity + 1 })
  }

  decrementQuantity() {
    this.state({ quantity : this.state.quantity + 1 })
  }

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
