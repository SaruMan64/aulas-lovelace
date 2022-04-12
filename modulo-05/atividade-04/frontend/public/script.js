window.onload = () => { preReady() };

async function preReady() {
    const response = await fetch(`http://localhost:4000/`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/text",
            "Access-Control-Allow-Credentials": true,
        }
    });
    const resObj = await response.json();
    const html = resObj.html.replace('\n', '');
    if (response.status >= 200 && response.status < 300) {
        console.log('input page');
        document.body.innerHTML = '';
        document.body.innerHTML = html;
        return true;
    }
}

async function spa(route) {
    const response = await fetch(`http://localhost:4000/${route}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/text",
            "Access-Control-Allow-Credentials": true,
        }
    });
    const resObj = await response.json();
    const html = resObj.html.replace('\n', '');
    if (response.status >= 200 && response.status < 300) {
        console.log('input page');
        document.body.innerHTML = '';
        document.body.innerHTML = html;
        return true;
    }
}

async function signup() {
    const response = await fetch(`http://localhost:4000/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            "fullName": document.getElementById('fullname').value,
            "username": document.getElementById('username').value,
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
        })
    });
    const resObj = await response.json();
    const html = resObj.html.replace('\n', '');
    if (response.status >= 200 && response.status < 300) {
        console.log('input page');
        document.body.innerHTML = '';
        document.body.innerHTML = html;
        return true;
    }
}


async function signin() {
    const response = await fetch(`http://localhost:4000/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            "username": document.getElementById('username').value,
            "password": document.getElementById('password').value
        })
    });
    const resObj = await response.json();
    /*const html = resObj.html.replace('\n', '');
    if (response.status >= 200 && response.status < 300) {
        console.log('input page');
        document.body.innerHTML = '';
        document.body.innerHTML = html;
        return true;
    } */
}

/* 
async function login() {
    const clientLogin = [document.getElementById("name").value, document.getElementById("password").value];
    const response = await fetch(`http://localhost:44440/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify(clientLogin)
    });
    document.getElementById("login").classList.toggle("hidden");
    //document.getElementById("login").remove();
    client();
    document.getElementById("content").classList.toggle("visible");
}

async function client() {
    const name = document.getElementById("nameClient");
    const phone = document.getElementById("phoneClient");
    const like = document.getElementById("likeClient");

    const response = await fetch(`http://localhost:44440/client`);
    const client = await response.json();

    name.innerHTML = `Olá ${client.name}!!!`;
    phone.innerHTML = client.phone;
    like.innerHTML = client.like;
}

async function logout() {
    const response = await fetch(`http://localhost:44440/logout`);
    document.getElementById("form").reset();
    document.getElementById("content").classList.toggle("visible");
    document.getElementById("login").classList.toggle("hidden");
}
 */