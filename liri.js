require("dotenv").config();


var fs = require("fs");
var keys = require("./keys.js");

fs.readFile("keys.js", "utf8",function(err, data) {
    if (err){
        return console.log()
    }
})

var spotify = new spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var spotify = require("node-spotify-api");

// liri needs these commands
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var nodeArgs = process.argv;
console.log(nodeArgs);

var command = "";

for (var i=2; i<nodeArgs.length; i++){
    if (i > 2 && i < nodeArgs.length) {
        console.log(nodeArgs[i])

        command = command + " " + nodeArgs[i];
}
    else {
        command += nodeArgs[i];
    }
};

switch (command) {
    case "my-tweets":
    tweets();
    break;

    case "spotify-this-song":
    songs();
    break;

    case "movie-this":
    movies();
    break;

    case "do-what-it-says":
    doIt();
    break;
}

function tweets() {

}

function songs() {

}

function movies() {

}

function doIt() {

}