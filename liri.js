// twitter
var Twit = require('twit');
// spotify
var Spotify = require('node-spotify-api');
//request - OMDB
var request = require('request');

var fs = require('fs');

// Where all of the keys are located
var liri = require("./keys.js");

var T = new Twit(liri);

//my-tweets entry
var entry = process.argv[2];

var params = {
    q: 'HomeworkDarnell',
    count: 20
  }
  
  T.get('search/tweets', params, gotData);
  
  function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
  
      if (entry === "my-tweets") {
      console.log(tweets[i].text + "\n");
      }
      
    }
  }  

  
//   //SPOTIFY//    
function spotify(song){
	if (!song) {
		song = 'The Sign';
    };
    
    var spotify = new Spotify({
        id: "a304549273de46b6aa530720d9353a36",
        secret: "0f019947c11f4603971625e7a640a211"
      });
	 
	spotify.search({type: 'track', query: song}, function(error, data) {
	    if (!error && entry === "spotify-this-song") {
	        for (var i = 0; i < 10; i++) {
	        	if (data.tracks.items[i]) {
	        		console.log("\n---------------------\n");
			    	console.log('Artist: ' + data.tracks.items[i].artists[0].name)//Artist name
			    	console.log('Song: ' + data.tracks.items[i].name)//Song name
			    	console.log('Album: ' + data.tracks.items[i].album.name)//Album name
			    	console.log('Preview Url: ' + data.tracks.items[i].preview_url)//Preview URL
			    	console.log("\n---------------------\n");
			    };
	        };

	    } else {
	    	console.log('Error occurred: ' + error);
	    
        };
	});
};

var movie = process.argv[3];

function omdB(movie){
	if(!movie){
		movie = 'Mr. Nobody'
		request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
		if(!error && response.statusCode == 200) {
			var info = JSON.parse(body)
			console.log("\n---------------------\n");
			console.log("Title: " + info.Title);
			console.log("Starring: " + info.Actors + "\n");
			console.log("Year: " + info.Year);
			console.log("IMDB Rating: " + info.imdbRating);
			console.log("Country: " + info.Country + "\n");
			console.log("Plot: " + info.Plot + "\n");	
			console.log("Tomato Score: " + info.tomatoUserMeter);
			console.log("Tomato URL: " + info.tomatoURL + "\n");
			console.log("You can catch it on Netflix!");
			console.log("\n---------------------\n");
		} else {
			console.log('Error occurred' + error);
		}
	});
		
	} else {
		request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&tomatoes=true&r=json', function (error, response, body) {
			if(!error && response.statusCode == 200) {
				var info = JSON.parse(body)
				console.log("\n---------------------\n");
				console.log("Title: " + info.Title);
				console.log("Starring: " + info.Actors + "\n");
				console.log("Year: " + info.Year);
				console.log("IMDB Rating: " + info.imdbRating);
				console.log("Country: " + info.Country + "\n");
				console.log("Plot: " + info.Plot+ "\n");	
				console.log("Tomato Score: " + info.tomatoUserMeter);
				console.log("Tomato URL: " + info.tomatoURL);
				console.log("\n---------------------\n");
			} else {
				console.log('Error occurred' + error);

			}
		});
	}
}

function reading(){
	fs.readFile('assets/text-files/random.txt', 'utf8', function(error, data){
		if (!error) {
			myArray = data.split(',');
			liri(myArray[0], myArray[1]);
		} else {
			console.log('Error occurred' + error);
		}
	});
};

function appending(data){
	console.log(data);
	fs.appendFile('random.txt', data, 'utf8', function(error) {
		if (error) {
			console.log('Error occurred' + error);
		}
	})
};
