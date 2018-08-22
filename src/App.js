import React, { Component } from "react";
import "./index.css";
import List from "./components/List";
import Map from "./components/Map";
import * as myPlaces from "./utils/places.json";
import {
  populateInfoWindow,
  filterMarker,
  resetMarker
} from "./utils/GoogleMapsAPI";
import { fetchImages } from "./utils/FoursquareAPI";

class App extends Component {
  state = {
    places: myPlaces,
    hasError: false
  };

  //Sends out fetch requests to Foursquare once app started
  componentDidMount() {
    fetchImages()
  }

  //Handles error catching
  componentDidCatch(err) {
    console.log("An error occured " + err);
    this.setState({ hasError: true });
  }

  // Handles input field query
  handleQuery = query => {
    console.log(query);
    if (query) {
      this.filterList(query);
      filterMarker(query);
    } else {
      this.setState({ places: myPlaces });
      resetMarker();
    }
  };

  // Filters displayed list items
  filterList = query => {
    let filteredList = myPlaces.filter(place => place.title.includes(query));
    this.setState({ places: filteredList });
  };

  // handles click on ListItem and calls populateInfoWindow
  handleSelection = e => {
    this.setState({ seletedPlace: e });
    populateInfoWindow(e);
  };

  render() {
    const { places, hasError } = this.state;
    return (
      <div>
        <nav>
          <h1>Budapest - A Város Amely Egysít</h1>
          <br />
          <p>(The City That Unites)</p>
        </nav>
        <main className="app-container">
          <List
            places={places}
            handleQuery={this.handleQuery}
            handleSelection={this.handleSelection}
          />
          {hasError ? (
            window.alert("Something went wrong. Please check your Google Maps API key connection and reload the browser")
          ) : (
            <Map places={places} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
