import * as cred from "./crededentials.js";
import * as myPlaces from "./places.json";

let imageUrls = [
  "../img/casabaja.png", "../img/linguarum.png"
];

// Generates array of urls to catch which is passed to Promise.all()
const generateUrlArray = arr => {
  let urlsToFetch = [];

  arr.map(place => {
    if (!place.requestId) {
      return;
    } else {
      let venueID = place.requestId;

      let requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
        cred.CLIENT_ID
        }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;
      urlsToFetch.push(requestURL);
    }
  });

  return urlsToFetch;
};

// Sends out fetch request to Foursquare
const fetchImages = () => {
  let fetchUrls = generateUrlArray(myPlaces);

  Promise.all(
    fetchUrls.map(url => {
      fetch(url)
        .then(response => response.json())
        .then(getImageUrl)
        .catch( err =>
          console.log(err)
          //window.alert("Unfortunately we were unable to fetch the requested images from Foursquare \n For the full experience check your Foursquare Crededentials and request quota and reload the page")
        );
    })
  );
};

// Returns requested venues' imageUrl
const getImageUrl = (data) => {
  let photoUrl = "";

  let photo = "";

  if (
    data.response &&
    data.response.photos &&
    data.response.photos.items &&
    data.response.photos.items.length > 0
  ) {
    photo = data.response.photos.items[0];
    photoUrl = photo.prefix + "cap300" + photo.suffix;

    imageUrls.push(photoUrl);
  }
}

export { imageUrls, fetchImages };
