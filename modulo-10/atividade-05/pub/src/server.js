const express = require('express');
const Redis = require("ioredis");

const app = express();

const publisher = new Redis({ port: 6379, host: 'localhost', password: 'abacate' })

app.use(express.json());

app.get('/server-settings', (req, res) => {
	const { message, delay } = req.query;
	const channel = 'server-settings';
	publisher.publish('server-settings', JSON.stringify({
		message, delay
	}));
	console.log(`Published '${message}' to ${channel}`);
	res.send(`Published '${message}' to ${channel}`);
});

app.listen(5001);
