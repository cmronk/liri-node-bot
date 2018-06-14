// sets environment variables with dotenv packages
require("dotenv").config();
// requiring keys.js
var fs = require("fs");
var keys = require("./keys.js");

// requiring Twitter
var Twitter = require("twitter");

// requiring spotify
var Spotify = require("node-spotify-api");

// required dependency for OMDB
var request = require("request");

// accessing our keys from keys.js which gets info from .env
function AccessKeys() { }
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// taking in the 3rd index of process.argv to get our command for LIRI
var command = process.argv[2];

// initially had this in case our commands were more than one word
// // Taking in user commands to gather one of the below cases
// var command = "";

// // using the third index of process.argv for our commands
// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {

//         command = command + " " + nodeArgs[i];
//     }
//     else {
//         command += nodeArgs[i];
//     }
// };

// console.log(command);
switch (command) {
    case "my-tweets":
        showTweets();
        break;

    case "spotify-this-song":
        songs();
        break;

    case "movie-this":
        showMovies();
        break;

    case "do-what-it-says":
        doIt();
        break;
}

// Twitter
function showTweets() {
    var params = { screen_name: 'MeanChristine4', limit: 20 };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);

                console.log(tweets[i].text);
            }
        }
    });

};

// Spotify
function songs() {
    var nodeArgs = process.argv;

    var song = "";

    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            song = song + " " + nodeArgs[i];
        }
        else {
            song += nodeArgs[i];
        }
    };
    // if no song is specified, some TOTO for you
    if (!song) {
        song = "Africa";
        console.log("Did you mean 'Africa?'")
    }

    spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function (response) {
            var spotifyResult = response.tracks.items[0];
            console.log("Song Name: " + spotifyResult.name + "\nArtist(s) name: " + spotifyResult.artists[0].name + "\nAlbum: " + spotifyResult.album.name + "\nSong Preview Link: " + spotifyResult.external_urls.spotify);
        })
        .catch(function (err) {
            console.log(err);
        });
};

// OMDB 
function showMovies() {
    var nodeArgs = process.argv;

    var movie = "";

    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            movie = movie + " " + nodeArgs[i];
        }
        else {
            movie += nodeArgs[i];
        }
    }
    // if no movie is specified, we will pick for them :D
    if (!movie) {
        movie = "Mr. Nobody";
        console.log("Did you mean 'Mr. Nobody'?")
    }
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=5218948a", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            return console.log("Movie Title: " + movie + "\n Year released: " + JSON.parse(body).Year + "\n IMDB rating: " + JSON.parse(body).imdbRating + "\n Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value + "\n Country: " + JSON.parse(body).Country + "\n Language: " + JSON.parse(body).Language + "\n Plot: " + JSON.parse(body).Plot + "\n Actors: " + JSON.parse(body).Actors);
        }
    });
};


// this function needs some work    to do: enable function to run after "do-what-it-says"
function doIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {
            var randomFileSplit = data.split(",", 2);
            command = randomFileSplit[0];
            var userInput = randomFileSplit[1];

            if (command === "my-tweets") {
                showTweets();
            }
            if (command === "spotify-this-song") {
                userInput = song;
                songs();
            }
            if (command === "movie-this") {
                userInput = movie;
                showMovies();
            }
        }
    });
}
