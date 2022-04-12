// declaration of variables
const fs = require('fs');

/* const sass = require('sass');*/

const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors')

const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');

const { signin, signup, signupsuccess, signinsuccess , signinsuccessadm } = require('./component/spa');

const { signupUser, readUsers } = require('./component/registeredusers');

const adm = [
	{
		id: 1,
		fullName: "Yeté Abunã Marques Labarca",
		username: "SaruMan64",
		email: "yete@yete.com",
		password: "admin",
		userType: "admin",
	}
];


// functions



// middlewares
app.use(cors({
	origin: ["http://localhost:8000"],
	credentials: true,
	optionsSuccessStatus: 200
}));

app.use(express.json());

app.use(cookieParser());

const 


// REST
app.get('/', (req, res) => {
	if (req.cookies.signin) {
		jwt.verify(res.cookies.signin, "Quero Acabar", (err, decoded) => {
			if (decoded.userType === 'admin'){
				res.json({ html: signinsuccessadm });
			} else {
				res.json({ html: signinsuccess });
			}
		});
	}
	else {
		console.log('first')
		res.json({ html: signin });
	}
});

app.get('/signinspa', (req, res) => {
	console.log('signin SPA'); //, signin);
	res.json({ html: signin });
});

app.get('/signupspa', (req, res) => {
	console.log('signup SPA'); //, signup);
	res.json({ html: signup });
});

app.post('/signup', async (req, res) => {
	console.log('signup'); //, signupsuccess);
	const signupObj = req.body;
	console.log(signupObj);
	signupUser(signupObj, 'client');
	res.json({ html: signupsuccess });
});

app.post('/signin', async (req, res) => {
	const readData = await readUsers();
	const singinObj = req.body;
	if (adm[0].username == singinObj.username && adm[0].password == singinObj.password) {
		res.cookie('signin', jwt.sign({username: adm[0].username, userType: adm[0].userType}, "Quero Acabar isso!!!", {expiresIn: '600s'}))
		res.json({ html: signinsuccessadm });
	}
	else {
		readData.forEach(el => {
			if (el.username === singinObj.username && el.password === singinObj.password) {
				res.cookie('signin', jwt.sign({username: el.username, userType: el.userType}, "Quero Acabar isso!!!", {expiresIn: '600s'}))
				res.json({ html: signinsuccess });
			}
		});
		res.json('não');
	}
});



// Listen Port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});
