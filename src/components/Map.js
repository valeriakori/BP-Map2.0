import React, { Component } from "react";
import { initMap, myPlaces } from "../utils/GoogleMapsAPI";

class Map extends Component {
  state = {
    markers: [],
    //infoWindow: new window.google.maps.InfoWindow(),
  };

  componentDidMount() {

    console.log(myPlaces)
    let mapContainer = document.getElementById("map")
    let places = this.props.places

    initMap(myPlaces, mapContainer);
    //addMarker();
  }

  

  // Bounce animation on click/selection
  // animateMarker = () => {
  //   if (marker.getAnimation() !== null) {
  //     marker.setAnimation(null);
  //   } else {
  //     marker.setAnimation(animate.BOUNCE);
  //     setTimeout(() => {
  //       marker.setAnimation(null);
  //     }, 750);
  //   }
  // };

  //Display InfoWindow
  populateInfoWindow = e => {
    //call FoursquareAPI and set content
    //Template literal?
    const { infoWindow, places, markers } = this.state;

    infoWindow.setContent();
    // can I call this.map?
    // infoWindow.open(this.map, marker);


    let selectedPlace = places.findIndex(place => place.name === e);

    infoWindow.setContent(this.fetchContent(places[selectedPlace].requestId));
    infoWindow.open(this.map, markers[selectedPlace]);

    // infowindow.addListener('closeclick', function() {
    //   infowindow.marker = null;
    // });
  };

  //Hide filtered marker
  filterMarker = () => {
    if (this.props.query) {
      // filteredMarkers = marker.filter(marker => !marker.title.includes(query))
      // check if there is open InfoWindow on filteredMarker -> closeInfoWindow()
    }
  };

  closeInfoWindow = () => {};

  render() {
    return (
      <section className="map-section">
        <div id="map" />
      </section>
    );
  }
}

export default Map;
