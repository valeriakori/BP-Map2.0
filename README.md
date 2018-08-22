## Budapest - The City That Unites (offical city slogan)

The city that I spend 3 months, had the most interesting internship (Linguarum on the map), met incredible people and found the inspiration to start coding in.

Exactly one year later I am finishing up my last Udacity project. I remember it like it was yesterday that I sat in my room (in my house in budapest *singing*, Casa Baja on the map) and wrote my application for the Google Udacity Nanodegree Scholarship Challenge. The last year has probably been the most exhausting but rewarding, interesting and fun of my life. Bp made me transition careers to a path that seemed out of my reach.

At this place I would like to thank everyone who has been a part of my journey into programming, my **friends in Bp**, my extremly educational internship and boss **Gabor**, the whole **Udacity community** and **Google** who gave me this opportunity, my **co-workers** who support and challenge me and are just great to work with and last but not least my **boyfriend** who always cheered me up when I had a meltdown because I couldn't figure something out.

### How to run this project

In order to run the app properly you will need a Google Maps API Key, as well as a Foursquare Client ID and Client Secret.
You may obtain those through following ressources:
Maps API Key: https://cloud.google.com/maps-platform/#get-started
Foursquare Signup: https://de.foursquare.com/developers/signup

Add your Google Maps API Key at `public/index.html` on line 15.
Add your Foursquare crededentials at `src/utils/crededentials.js`.


Fork and clone the repo using
`git clone https://github.com/valeriakori/Budapest-React-Map-.git`
`cd` into the folder and run `npm install`.
After the installation finished run `npm start` and open `localhost:3000` in your browser.

Note that this will only start the development build, thus the serviceworker is not available.
To activate the serviceworker get the app into production mode:
After initial instalation run `npm run build` and `serve -s build`.

### Dependecies and Stack
API: Google Maps, Foursquare
Code: HTML, CSS, React, ES6