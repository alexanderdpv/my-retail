import React, { Component } from 'react';

class PurchaseActions extends Component {
  state = {
    legalCopy: ''
  }

  componentDidMount() {
    this.props.returnPolicy.map((policy) => (
      this.setState({ legalCopy : policy.legalCopy })
    ));
  }

  render () {
    const { returnPolicy } = this.props;

    return (
      <div className="purchase-actions">
        <button className="purchase-primary-cta pick-up">Pick Up In Store</button>
        <button className="purchase-primary-cta add-cart">Add To Cart</button>
        <a href="www.target.com" className="purchase-find-in-store">find in a store</a>

        <div className="purchase-returns">
          <span className="purchase-return-label">returns</span>
          <span className="purchase-return-policy" dangerouslySetInnerHTML={{__html: this.state.legalCopy}}></span>
        </div>

        <button className="purchase-secondary-cta">Add to Registry</button>
        <button className="purchase-secondary-cta">Add to List</button>
        <button className="purchase-secondary-cta">Share</button>
      </div>
    )
  }
}

export default PurchaseActions
