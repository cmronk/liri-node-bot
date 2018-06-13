// sets environment variables with dotenv packages
require("dotenv").config();

// requiring keys.js
var fs = require("fs");
var keys = require("./keys.js");

// requiring Twitter
var Twitter = require("twitter");

// requiring spotify
var Spotify = require("node-spotify-api");

var request = require("request");

function AccessKeys() { }
// accessing our keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

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

console.log(command);
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


        // Twitter
        function showTweets() {
            var params = { screen_name: 'MeanChristine4', limit: 20 };
            client.get("statuses/user_timeline", params, function (error, tweets, response) {
                if (!error) {
                    for (var i = 0; i < tweets.length; i++) {
                        console.log(tweets[i].text);
                    }
                }
            });

        };

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

            console.log(song);

            spotify
                .search({ type: 'track', query: 'All the Small Things'})
                .then(function(response){
                    console.log(response);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

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

                request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=5218948a", function (error, response, body) {

                    // If the request is successful (i.e. if the response status code is 200)
                    if (!error && response.statusCode === 200) {
                        return console.log("Movie Title: " + movie + "\n Year released: " + JSON.parse(body).Year + "\n IMDB rating: " + JSON.parse(body).imdbRating + "\n Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value + "\n Country: " + JSON.parse(body).Country + "\n Language: " + JSON.parse(body).Language + "\n Plot: " + JSON.parse(body).Plot + "\n Actors: " + JSON.parse(body).Actors);
                    }
                });
            };
        };

    // calling function here for now.  switch case isn't calling it quite yet
    // showMovies();

    // function doIt() {

    // }
};