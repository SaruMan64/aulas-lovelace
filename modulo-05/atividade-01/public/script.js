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
    const token = await response.json();
    document.getElementById("token").value = token;
    document.getElementById("login").classList.toggle("hidden");
    client();
    document.getElementById("content").classList.toggle("visible");
}

async function client() {
    const token = document.getElementById('token').value;
    const name = document.getElementById("nameClient");
    const phone = document.getElementById("phoneClient");
    const like = document.getElementById("likeClient");

    const response = await fetch(`http://localhost:44440/client?token=${token}`);
    const client = await response.json();
    
    name.innerHTML = `Olá ${client.name}!!!`;
    phone.innerHTML = client.phone;
    like.innerHTML = client.like;
}

async function logout() {
    const token = document.getElementById('token').value;
    const response = await fetch(`http://localhost:44440/logout?token=${token}`);
    document.getElementById("form").reset(); 
    document.getElementById("content").classList.toggle("visible");
    document.getElementById("login").classList.toggle("hidden");
}