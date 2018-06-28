# liri-node-bot

# Welcome to LIRI

Save this file to a folder on your machine, then navigate to that folder with Terminal or the Command Line.

To run this file, you will need node.js along with several packages from from the NPM(Node Package Manager).  

Firstly follow the link below to install ![Node.js](https://nodejs.org/en/).

Install dotenv by using the command ![npm install dotenv](https://www.npmjs.com/package/dotenv).

Install ![Twitter](https://www.npmjs.com/package/twitter), ![Spotify](https://www.npmjs.com/package/node-spotify-api), and ![Request](https://www.npmjs.com/package/request) to use the ![OMDB API](http://www.omdbapi.com/). 

Use your own keys and tokens for ![Spotify](https://developer.spotify.com/dashboard/login), ![Twitter](https://apps.twitter.com/app/new), and ![OMDB](http://www.omdbapi.com/apikey.aspx) or request access at each of their respective links above. Store these keys as follows in a .env text file. 

## Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

## Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret



Run the file in the command line using node liri.js "enter-command-here".

The commands are as follows:
"my-tweets" will return the last 20 tweets and timestamps from Twitter.

"movie-this" + a movie title will return the following:  
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

"spotify-this-song" + a song title will return the following:
  * Song or track title.
  * Artist(s) name.
  * Link to a preview of that song.
  * The Album title.

"do-what-it-says" will return what is typed in our random.txt file.  Feel free to change values.  

![liri-demo](https://media.giphy.com/media/2zcrZKSYFX9LnhKtFy/giphy.gif)

