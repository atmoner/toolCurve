var Twit = require('twit')

var T = new Twit({
	consumer_key:         '...',
	consumer_secret:      '...',
	access_token:         '...',
	access_token_secret:  '...',
	timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
	strictSSL:            true,     // optional - requires SSL certificates to be valid.
}) 

var search = '#generationidentitaire'

T.get('search/tweets', { q: search, count: 2 }, function(err, data, response) {
	
	//console.log(data.statuses)
	data.statuses.forEach((statuses) => {
		console.log('Tweet contenant '+search+' par @'+statuses.user.screen_name) 
	});
	
})
