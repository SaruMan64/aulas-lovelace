// declaration of variables
const express = require('express');
const app = express();
const port = 8000;

// functions


// middlewares
app.use("/", express.static("public"));


// Listen Port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
