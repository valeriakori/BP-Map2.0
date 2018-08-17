import React, { Component } from 'react';
import "./index.css";
import List from "./components/List";
import Map from "./components/Map";
import { myPlaces, populateInfoWindow } from "./utils/GoogleMapsAPI"

class App extends Component {

  state = {
    query: '',
    places: myPlaces,
    selectedPlace: ''
  }

  handleQuery = query => {
    console.log(query)
    if (query) {
      //this.setState({ query: query })
      this.filterList(query)
      //filterMarker()
    } else {
      this.setState({ places: myPlaces })
      //resetMarker()
    }
  };

  filterList = (query) => {
    let filteredList = myPlaces.filter(place => place.title.includes(query))
    this.setState({ places: filteredList })
  }

  handleSelection = e => {
    this.setState({ seletedPlace: e })
    populateInfoWindow(e)
    // handles click on ListItem and calls Maps populateInfoWindow method
  }

  render() {
    const { places, query, selectedPlace } = this.state
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <main className="app-container">
          <List places={places} query={query} handleQuery={this.handleQuery} handleSelection={this.handleSelection} />
          <Map places={places} query={query} selectedPlace={selectedPlace} />
        </main>
      </div>
    );
  }
}

export default App;
