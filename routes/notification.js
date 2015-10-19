var express = require('express');
var router = express.Router();

var Pusher = require('pusher');
var escapeHTML = require('escape-html');

var app_id = process.env.PUSHER_APP_ID || '148801';
var app_key = process.env.PUSHER_APP_KEY || '674579b28886235b9637';
var app_secret = process.env.PUSHER_APP_SECRET || '34df96e2f99abecfe054';

var pusher = new Pusher({
	appId: app_id,
	key: app_key,
	secret: app_secret
});

router.post('/', function(req, res){
	var message = escapeHTML(req.param('message'));
	pusher.trigger('notifications', 'new_notification', {
		message: message
	});
	res.send("Notification triggered!")
});

module.exports = router;
