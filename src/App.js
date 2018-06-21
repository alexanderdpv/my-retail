import React, { Component } from 'react';
import ItemDescription from './Components/ItemDescription/itemDescription';
import ItemImages from './Components/ItemImages/itemImages';
import Reviews from './Components/Reviews/reviews';
import ItemDetails from './Components/ItemDetails/itemDetails';
import './simple-grid.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';

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
      <div className="App container">
        {this.state.catalogItems.map((catalogItem) => (
          <div>
            <div className="row">
              <ItemImages images={catalogItem.Images} title={catalogItem.title}/>
              <ItemDetails item={catalogItem}/>
              <Reviews reviews={catalogItem.CustomerReview}/>
              <ItemDescription itemDescriptions={catalogItem.ItemDescription}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
