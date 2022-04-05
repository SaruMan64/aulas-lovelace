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