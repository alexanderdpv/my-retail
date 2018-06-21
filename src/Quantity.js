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
    this.setState({ quantity : this.state.quantity + 1 })
  }

  decrementQuantity() {
    if (this.state.quantity > 1) {
      this.setState({ quantity : this.state.quantity - 1 })
    }
  }

  render () {
    return (
      <div className="quantity">
        <span className="quantity-label">quantity: </span>
        <a href="#" onClick={this.decrementQuantity}>
          <i className="quantity-decrement fa fa-minus-circle"></i>
        </a>
        <span className="quantity-value">{this.state.quantity}</span>
        <a href="#" onClick={this.incrementQuantity}>
          <i className="quantity-increment fa fa-plus-circle"></i>
        </a>
      </div>
    )
  }
}

export default Quantity
