import * as cred from "./crededentials.js";

// Returns requested venues' imageUrl
export const fetchImage = venueID => {
  const requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${
    cred.CLIENT_ID
  }&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`;

  fetch(requestURL)
    .then(response => response.json())
    .then(getImageUrl)
    .catch(error => console.log("Oopsie daisy, an error occured: " + error))
};

const getImageUrl = data => {
  let photo = ''
  let photoUrl = "";

//   if (data.response && data.response.items && data.response.items.length > 0) {
  if (data.response && data.response.photos && data.response.photos.items && data.response.photos.items.length > 0) {

    photo = data.response.photos.items[0];
    photoUrl = photo.prefix + "cap300" + photo.suffix;
    console.log(photoUrl);

    return photoUrl;
  }
};

