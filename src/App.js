import React, { Component } from 'react';
import Price from './Price';
import Promotion from './Promotion';
import Quantity from './Quantity';
import PurchaseActions from './PurchaseActions';
import ItemDescription from './ItemDescription';
import ItemImages from './ItemImages';
import Reviews from './Reviews';
import * as CatalogService from './CatalogService';
import './App.css';
import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {
    catalogItems: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/CatalogEntryView')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({ catalogItems : responseJSON });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.catalogItems.map((catalogItem) => (
          <div>
            <ItemImages images={catalogItem.Images} title={catalogItem.title}></ItemImages>
            <div className="item-details">
              <Price offers={catalogItem.Offers}></Price>
              <Promotion promotions={catalogItem.Promotions}></Promotion>
              <Quantity></Quantity>
              <PurchaseActions channelCode={catalogItem.purchasingChannelCode} returnPolicy={catalogItem.ReturnPolicy}></PurchaseActions>
              <ItemDescription itemDescriptions={catalogItem.ItemDescription}></ItemDescription>
              <Reviews reviews={catalogItem.CustomerReview}></Reviews>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
