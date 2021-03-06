import React, { Component } from 'react';

class PurchaseActions extends Component {
  state = {
    legalCopy: ''
  }

  componentDidMount() {
    const { returnPolicy } = this.props;

    returnPolicy.map((policy) => (
      this.setState({ legalCopy : policy.legalCopy })
    ));
  }

  renderChannelButtons() {
    const { channelCode } = this.props;
    const channelCodeInt = Number.parseInt(channelCode, 10);

    if (channelCodeInt === 0) {
      return (
        <div className="purchase-shopping-links">
          <button className="purchase-primary-cta pick-up">Pick Up In Store</button>
          <button className="purchase-primary-cta add-cart">Add To Cart</button>
        </div>
      )
    } else if (channelCodeInt === 1) {
      return (
        <button className="purchase-primary-cta add-cart">Add To Cart</button>
      )
    } else if (channelCodeInt === 2) {
      return (
        <button className="purchase-primary-cta pick-up">Pick Up In Store</button>
      )
    }
  }

  render () {
    return (
      <div className="purchase-actions">
        {this.renderChannelButtons()}
        <a href="http://www.target.com" className="purchase-find-in-store">find in a store</a>

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
