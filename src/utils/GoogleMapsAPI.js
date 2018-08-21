import * as myPlaces from "./places.json";
//import { imageUrls } from "./FoursquareAPI";


let infoWindow

//console.log(imageUrls)

// array of markers 
let markers = [];

// animates selected marker
const bounceMarker = marker => {
  let animate = window.google.maps.Animation;

  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(animate.BOUNCE);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 750);
  }
};

// returns initialised map + markers
const initMap = (marker, id) => {
  
  infoWindow = new window.google.maps.InfoWindow();

  let animate = window.google.maps.Animation;

  this.map = new window.google.maps.Map(id, {
    center: { lat: 47.497912, lng: 19.040235 },
    zoom: 13
  });

  const bounds = new window.google.maps.LatLngBounds()

  marker.forEach(place => {
    let marker = new window.google.maps.Marker({
      position: place.location,
      map: this.map,
      title: place.title,
      animation: animate.DROP
    });

    markers.push(marker);

    bounds.extend(place.location)

    // Add bounce animation on click
    marker.addListener("click", () => {
      let animate = window.google.maps.Animation;

      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(animate.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 750);
      }
    });
    //marker.addListener('click', bounceMarker(something))

    // Open Infowindow on click
    //marker.addListener("click", populateInfoWindow());
  });

  this.map.fitBounds(bounds)
};


const populateInfoWindow = e => {

  // let content = ''
  // let selectedPlace = myPlaces.findIndex(place => place.title === e);
  // let image = imageUrls.findIndex(image => image.title === e)

  // content = 
  // `<div tab-index="0">
  // <h6>${myPlaces[selectedPlace].title}</h6>
  // <img src="${imageUrls[image].photoUrl}" alt=${imageUrls[image].title}>
  // <p>${myPlaces[selectedPlace].description}</p>
  // </div>`

  // bounceMarker(markers[selectedPlace]);

  // infoWindow.setContent(content);
  // infoWindow.open(this.map, markers[selectedPlace]);

  //let image = fetchImage(myPlaces[selectedPlace].requestId);

  //console.log(image);
};

const filterMarker = query => {
  resetMarker();
  markers.forEach(marker => {
    if (!marker.title.includes(query)) {
      console.log(marker);
      marker.setMap(null);
    }
  });
};

const resetMarker = () => {
  markers.forEach(marker => marker.setMap(this.map));
};

export { myPlaces, initMap, populateInfoWindow, filterMarker, resetMarker };
