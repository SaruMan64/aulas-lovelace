// declaration of variables
const fs = require('fs');

/* const sass = require('sass');*/

const express = require('express');
const app = express();
const port = 44440;

const cookieParser = require('cookie-parser');

const bcrypt = require('bcrypt');
const crypto = require('crypto');

const client = [
	{
		id: 1,
		name: "Yete",
		password: "yete",
		cookieToken: null,
		phone: "1234-5678",
		like: "Física"
	},
	{
		id: 2,
		name: "Orlando",
		password: "orlando",
		cookieToken: null,
		phone: "4321-5678",
		like: "Animação"
	},
	{
		id: 3,
		name: "Lovelace",
		password: "lovelace",
		cookieToken: null,
		phone: "1234-8765",
		like: "Programação"
	},
	{
		id: 4,
		name: "Cleberson",
		password: "cleberson",
		cookieToken: null,
		phone: "4321-8765",
		like: "Fruta"
	},
	{
		id: 5,
		name: "SaruMan64",
		password: "1234",
		cookieToken: null,
		phone: "8765-1234",
		like: "Abacate"
	},
];


// functions



// middlewares
app.use("/", express.static("public"));

app.use(express.json());

app.use(cookieParser());


// REST
app.post('/login', (req, res) => {
	const reqClient = req.body;
	client.forEach(el => {
		if (reqClient[0] === el.name && reqClient[1] === el.password) {
			el.cookieToken = crypto.randomUUID();
			bcrypt.hash(el.cookieToken, 10).then(hash => {
				console.log("login", hash);
				/* res.json(hash); */
				res.cookie("Login", hash);
				res.json("ok")
			})
		}
	});
});

app.get('/client', (req, res) => {
	const cookieToken = req.cookies.Login;
	console.log(cookieToken);
	client.forEach(el => {
		if (el.cookieToken !== null && el.cookieToken !== undefined) {
			bcrypt.compare(el.cookieToken, cookieToken).then(comp => {
				if (comp) {
					console.log("info")
					res.json({ name: el.name, phone: el.phone, like: el.like });
				}
			});
		}
	});
});

app.get('/logout', (req, res) => {
	const cookieToken = req.cookies.Login;
	client.forEach(el => {
		if (el.cookieToken !== null && el.cookieToken !== undefined) {
			bcrypt.compare(el.cookieToken, cookieToken).then(comp => {
				if (comp) {
					el.cookieToken = null;
					res.clearCookie("Login")
					console.log("logout", "Clear cookie")
					res.json("ok");
				}
			});
		}
	});
});


// Listen Port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
