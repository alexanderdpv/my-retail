import React, { Component } from 'react';
import ItemDescription from './Components/ItemDescription/itemDescription';
import ItemImages from './Components/ItemImages/itemImages';
import Reviews from './Components/Reviews/reviews';
import ItemDetails from './Components/ItemDetails/itemDetails';
import itemData from './item-data.json';
import './simple-grid.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {itemData.CatalogEntryView.map((catalogItem) => (
          <div key={catalogItem} className="row">
            <ItemImages images={catalogItem.Images} title={catalogItem.title}/>

            <ItemDetails offers={catalogItem.Offers} promotions={catalogItem.Promotions}
              channelCode={catalogItem.purchasingChannelCode} returnPolicy={catalogItem.ReturnPolicy}/>

            <Reviews reviews={catalogItem.CustomerReview}/>
            <ItemDescription itemDescriptions={catalogItem.ItemDescription}/>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
