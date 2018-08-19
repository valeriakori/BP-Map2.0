import * as cred from "./crededentials.js";
import myPlaces from "./GoogleMapsAPI";

export let imageUrls = [
  {
    title: "Casa Baja",
    photoUrl: "url"
  },
  {
    title: "Linguarum",
    photoUrl: "url"
  }
];

// Returns requested venues' imageUrl
const fetchImage = () => {
  const requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
    cred.CLIENT_ID
  }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;

  myPlaces.forEach(places => {
    if (!places.requestURL) {
      return;
    } else {
      venueID = places.requestURL;
    }
    fetch(requestURL)
      .then(response => response.json())
      .then(getImageUrl)
      .catch(error => console.log("Oopsie daisy, an error occured: " + error));
  });
};

const getImageUrl = data => {
  let imageUrl = {
    title: "",
    photoUrl: ""
  };
  let photo = "";

  // if iteration of place is not reachable, maybe move this whole function to second then
  console.log(place)
  if (
    data.response &&
    data.response.photos &&
    data.response.photos.items &&
    data.response.photos.items.length > 0
  ) {
    imageUrl.title = place.title;

    photo = data.response.photos.items[0];
    imageUrl.photoUrl = photo.prefix + "cap300" + photo.suffix;

    imageUrls.push(imageUrl);
  }
};
