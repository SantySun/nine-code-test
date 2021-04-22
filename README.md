### Nine API Coding Test

This repo is the proposed answer to Nine Digital's coding test. It has been deployed to Heroku with the following URL:

> https://nine-tech-test.herokuapp.com

To try this API endpoint, send a `POST` request to the given URL with the following data structure in request body:

```javascript
{
  payload: [
    {
      "country": "UK",
      "description": "What's life like when you have enough children to field your own football team?",
      "drm": true,
      "episodeCount": 3,
      "genre": "Reality",
      "image": {
        "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
      },
      "language": "English",
      "nextEpisode": null,
      "primaryColour": "#ff7800",
      "seasons": [
        {
          "slug": "show/16kidsandcounting/season/1"
        }
      ],
      "slug": "show/16kidsandcounting",
      "title": "16 Kids and Counting",
      "tvChannel": "GEM"
    },
    {
      "slug": "show/seapatrol",
      "title": "Sea Patrol",
      "tvChannel": "Channel 9"
    },
  ],
  "skip": 0,
  "take": 10,
  "totalRecords": 75
}
```
The server will return filtered data with `drm == true` and `episodeCount > 0`.

To start this server locally, just run:

```javascript
npm start
```
or 
```javascript
yarn start
```


To start testing, just run:
```javascript
yarn test
``` 
or 
```javascript
npm test
```