# Frontend Challenge

Run `npm i` to install dependencies and `npm start` to run the app.

Library used:

- redux: single source of truth for all the external information
- react-router: a nice way to organize the app by routes

First the app check the localstorage to see if there are gnomes loaded already, if not it fetch from the api and save the gnomes to the localstorage and then pass them to redux store.</br>

The app is intuitive to use, is possible to scroll through all gnomes or filter them by name, age, professions or common friends. Once selected one is possible to see more detailed information and be redirected to the page of his friends.

The app is responsive for mobile.
