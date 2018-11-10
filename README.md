# Frontend Challenge

Run `npm i` to install dependencies and `npm start` to run the app.

Library used:

- redux: single source of truth for all the external information
- react-router: a nice way to organize the app by routes

## How to handle a list of 1337 images

I used `IntersectionObserver` native API.
Here is what MDN says about it:

```
The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport.
```

When the image is whithin the reach of the viewport the observable will assign the link to the image to the img src property, and when is not in reach of the viewport the image simply doesn't have a link to point to. So it's only loading the image when the user reach the position of that image

---

First the app check the localstorage to see if there are gnomes loaded already, if not it fetch from the api and save the gnomes to the localstorage and then pass them to redux store.</br>

The app is intuitive to use, is possible to scroll through all gnomes or filter them by name, age, professions or common friends. Once selected one is possible to see more detailed information and be redirected to the page of his friends.

The app is responsive and made for mobile first.
