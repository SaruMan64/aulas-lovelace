const express = require('express');
const Redis = require("ioredis");

const app = express();

const subscriber = new Redis({ port: 6379, host: 'localhost', password: 'abacate' })

let config = {};

const channel = 'server-settings';
subscriber.subscribe(channel, (err, count) => {
	if (err) {
		console.error("Failed to subscribe: %s", err.message);
	} else {
		console.log(
			`Subscribed successfully! This client is currently subscribed to ${count} channels (${channel}).`
		);
	}
});

subscriber.on("message", (channel, message) => {
	console.log(JSON.parse(message)); // 'message'
	config = JSON.parse(message);
});

app.get(`/new-settings`, (req, res) => {
	setTimeout(() => {
		res.send({
			message: `${config.message}`,
			delay: `${config.delay}`,
		});
	}, config.delay);
});

app.listen(5005);
