import * as cred from "./Crededentials.js"

// Returns requested venues' imageUrl
export const getImage = (venueID) => {
    let photoUrl = ""

    const requestURL = `https://api.foursquare.com/v2/venues/${venueID}/photos?limit=1&client_id=${cred.CLIENT_ID}&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`

    fetch(requestURL)
        .then(response => {
            if (!response.ok) {
                throw response
            } else return response.json()
        })
        .then(data => {
            const photo = data.response.photo
            photoUrl = photo.prefix + "cap300" + photo.suffix
            return photoUrl
        })

    //return photoUrl
}

// Returns requested venues' description
export const getDescription = (venueID) => {

    let description = ''

    const requestURL = `https://api.foursquare.com/v2/venues/${venueID}/client_id=${cred.CLIENT_ID}&client_secret=${cred.CLIENT_SECRET}&v=${cred.version}`
    fetch(requestURL)
        .then(response => {
            if (!response.ok) {
                throw response
            } else return response.json()
        })
        .then(data => {
            description = data.response.description
            return description
        })

    //return description
}