We would like you to build A small application using the SoundCloud public API. The goal of your application is to provide an interesting way to explore tracks via SoundCloud’s Search API.

#### The Problem
As a musician and avid Sound Cloud user, one of the main issues that exist in the Sound Cloud search experience is the inability to search for things using geographic location. This is a feature that is usually standard on almost every high caliber web platform such as Sound Cloud. The fact that Sound Cloud allows users to enter in nick names and aliases for their city and state makes it impossible to find users or songs by location.

#### The Solution
I created a simple app that allows people to search for all the songs pertaining to a specific genre that can also be further filtered by the location of the user. For instance, if you wanted to find all the users who have songs in the hip-hop genre that live in Atlanta, then you could do so. As a musician who likes to collaborate with other musicians, I feel like this feature would allow Sound Cloud to be a great tool to find other musicians in in a specific area with similar taste.

#### The Future
In the future I would like to integrate a feature that rejects users from putting in false city & state names. The integration of this feature shouldn't be too difficult. I could use a third party API that populates an object with all the cities in the world and check each users input for city and state against the official city and state names contained in the API. At this point my solution would be most effective. I also have the app ready and set up to take advantage of React-Redux which will allow my app to be very manageable in the future as the project gets bigger.

#### Technologies Used

1. React
2. React-Redux
3. React-Router
4. Webpack
5. Babel
6. Sound Cloud's API

## API End Points

1. /tracks/people GET all tracks
2. /tracks/users/:id GET user by id

### Installation

```
$ npm install
```

To run the app:

```
$ npm start
```

---
