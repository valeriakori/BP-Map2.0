import React, { Component } from "react";
//import initMap from "../utils/GoogleMapsAPI";
//"export 'default' (imported as 'initMap') was not found in '../utils/GoogleMapsAPI'


class Map extends Component {
  state = {
    markers: [],
    //infoWindow: new window.google.maps.InfoWindow(),
    animate: window.google.maps.Animation
  };

  componentDidMount() {
    //initMap();
    // call addMarker(this.props.places)
  }

  addMarker = placesArray => {
    const { markers, animate } = this.state;
    placesArray.forEach(place => {
      let marker = new window.google.maps.Marker({
        position: place.location,
        map: this.map,
        title: place.title,
        animation: animate.DROP
      });

      markers.push(marker);
      console.log(markers);

      marker.addListener("click", this.animateMarker());

      marker.addListener("click", this.populateInfoWindow());
    });
  };

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
