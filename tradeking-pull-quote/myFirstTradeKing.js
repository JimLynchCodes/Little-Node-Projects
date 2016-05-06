// Use the OAuth module
var oauth = require('oauth');

// Setup key/secret for authentication and API endpoint URL
var configuration = {
  api_url: "https://api.tradeking.com/v1",
  consumer_key: "29g1M0oZPLTETYOVcB1bVbYYISJUJ78lypzNjwuiyjs4",
  consumer_secret: "dvuwDfffGBnv0Sdxiqq17amoc0tiaY95qwzmk1pjs981",
  access_token: "HgqMUGGcMd1NFhJOMdgN9Rh7n4hH7gfCGVP0qq8lI4w1",
  access_secret: "zGAjy8IpabpP55ab03ZFngxovNSFIYOvImPBvvnGw8o5"
}

// Setup the OAuth Consumer
var tradeking_consumer = new oauth.OAuth(
  "https://developers.tradeking.com/oauth/request_token",
  "https://developers.tradeking.com/oauth/access_token",
  configuration.consumer_key,
  configuration.consumer_secret,
  "1.0",
  "http://mywebsite.com/tradeking/callback",
  "HMAC-SHA1");

// Make a request to the API endpoint
// Manually update the access token/secret as parameters.  Typically this would be done through an OAuth callback when 
// authenticating other users.
tradeking_consumer.get(configuration.api_url+'/market/ext/quotes.json?symbols=QQQ160408C00109500', configuration.access_token, configuration.access_secret,
  function(error, data, response) {
    // Parse the JSON data
    // account_data = JSON.parse(data);
    account_data = JSON.parse(data);
    // Display the response
    console.log(account_data.response);
  }
);