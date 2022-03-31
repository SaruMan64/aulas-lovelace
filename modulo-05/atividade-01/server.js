const fs = require('fs');
const sass = require('sass');
const express = require('express');
const app = express();
const port = 44440;

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
]

function tokenKey() {
	const a = Math.random();
	const b = Math.random();
	const c = Math.random();
	const key = (((a * 100) ** b) / c) * 100000;
	return key.toString().split('.').join('');
}

app.use(express.static("public"));

app.use(express.json());

app.post('/login', (req, res) => {
	const reqClient = req.body;
	client.forEach(el => {
		if (reqClient[0] === el.name && reqClient[1] === el.password) {
			el.token = tokenKey();
			console.log("login");
			res.json(el.token);
		}
	});
});

app.get('/client', (req, res) => {
	const token = req.query.token;
	client.forEach(el => {
		if (el.token === token) {
			console.log("info")
			res.json({ name: el.name, phone: el.phone, like: el.like });
		}
	})
});

app.get('/logout', (req, res) => {
	const token = req.query.token;
	client.forEach(el => {
		if (el.token === token) {
			el.token = null;
			console.log("logout")
			res.json("ok");
		}
	})
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
