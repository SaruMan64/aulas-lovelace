const fs = require('fs');
const express = require('express');
const app = express();
const port = 4444;



app.use(express.static("public"));

app.use(express.json());

app.get('/', (req, res) => {
	res.send("ok");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
