var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

//argument variables
require("dotenv").config();
var request = process.argv[2];
var input = process.argv[3];

var artist = search.join("");


axios.get("http://omdbapi.com/?t=" + artist + "/apikey=trilogy").then(
    function (response) {
      quick = response.data[0];
      // console.log("You searched for: "+ artist);
      console.log("Venue: " + quick.venue.name);
      console.log("Location: " + quick.venue.city);
      console.log("Date: moment(quick.datetime).format('MM-DD-YY'));
      };

      function spotifySong() {
        var songArg = process.argv;
        input = input + "+";
        if (input === undefined) {
          input = "The Sign Ace of Base";
        } else {
          for (var i = 4; i < songArg.length; i++) {
            input += songArg[i] + "+";
          }
        }

        spotify.search({
          type: 'track',
          query: input,
          limit: 1
        }, function (err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
          
          console.log(input);
          var quick = data.tracks.items;
          console.log("Artist: " + quick[0].artists[0].name)
          console.log("Song Name: " + quick[0].name);
          console.log("Check out a Preview: " + JSON.stringify(quick[0].external_urls));
          console.log("Album: " + quick[0].album.name);


        });
      }


      function view() {

        fs.readFile("random.txt", "utf8", function (error, data) {

          if (error) {
            return console.log(error);
          }

          var theCommand = data.split(',');


          request = theCommand[0];
          input = theCommand[1];



          songSearch();

        });
      }

      function songSearch() {

        if (request == "spotify-this-song") {
          spotifySong();
        } else if (request === 'concert-this') {
          view();
        } else {
          console.log("sorry, you used an invalid command!");
        }

      }

      songSearch();
