// declaration of variables
const fs = require('fs');

/* const sass = require('sass');*/

const express = require('express');
const app = express();
const port = 44440;

const cookieParser = require('cookie-parser');

const client = [
	{
		id: 1,
		name: "Yete",
		password: "yete",
		token: null,
		phone: "1234-5678",
		like: "Física"
	},
	{
		id: 2,
		name: "Orlando",
		password: "orlando",
		token: null,
		phone: "4321-5678",
		like: "Animação"
	},
	{
		id: 3,
		name: "Lovelace",
		password: "lovelace",
		token: null,
		phone: "1234-8765",
		like: "Programação"
	},
	{
		id: 4,
		name: "Cleberson",
		password: "cleberson",
		token: null,
		phone: "4321-8765",
		like: "Fruta"
	},
	{
		id: 5,
		name: "SaruMan64",
		password: "1234",
		token: null,
		phone: "8765-1234",
		like: "Abacate"
	},
];


// functions
function tokenKey() {
	const a = Math.random();
	const b = Math.random();
	const c = Math.random();
	const key = (((a * 100) ** b) / c) * 100000;
	return key.toString().split('.').join('');
}


// middlewares
app.use("/", express.static("public"));

app.use(express.json());

app.use(cookieParser());


// REST
app.post('/login', (req, res) => {
	const reqClient = req.body;
	client.forEach(el => {
		if (reqClient[0] === el.name && reqClient[1] === el.password) {
			el.token = tokenKey();
			console.log("login", el.token);
			/* res.json(el.token); */
			res.cookie("Login", el.token);
			res.json("ok")
		}
	});
});

app.get('/client', (req, res) => {
	const token = req.cookies.Login;
	console.log(token);
	client.forEach(el => {
		if (el.token === token) {
			console.log("info")
			res.json({ name: el.name, phone: el.phone, like: el.like });
		}
	})
});

app.get('/logout', (req, res) => {
	const token = req.cookies.Login;
	client.forEach(el => {
		if (el.token === token) {
			el.token = null;
			res.clearCookie("Login")
			console.log("logout", "Clear cookie")
			res.json("ok");
		}
	})
});

app.post("/send", (req, res) => {
	res.cookie("Teste", "true");
	res.send("Cookie sent!");
});

app.post("/read", (req, res) => {

	let response = "Not logged in!";
	console.log(req.cookies);

	if (req.cookies.Teste == "true") {
		response = "Yup! You are logged in!";
	}

	res.send(response);
});

app.get("/clear", (req, res) => {
	res.clearCookie(req.query.cookie);
	res.send(`Cookie ${req.query.cookie} is clear.`);
});




// Listen Port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
