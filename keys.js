
var myTweets = process.argv[2];
var Twitter = require('twitter');

var twitterKeys = new Twitter({
  consumer_key: 'AO86d1pAWduGCJ1qi2kZK0kQZ',
  consumer_secret: 'AwYTEkeEVWcC2mgvc3KhDBWPYarLIPMYIONfsIrwtheasYlYia',
  access_token_key: '910343909754015744-37YyzXr2avA3NNadRIzH7lmfRCWq2lZ',
  access_token_secret: '6vBVNXkrBTNbCfA0Nnw3iOdlj9rRox4UNeJHKy312jSDB'

});

var params = {
  count: 20,
  //HomeworkDarnell: 'nodejs'
  q: "HomeworkDarnell"
}

module.exports = {
  twitterKeys: twitterKeys
}


twitterKeys.get('search/tweets', params, function(error, tweets, response) {
 if (!error && myTweets === "my-tweets") {
  console.log(response);
 }
});