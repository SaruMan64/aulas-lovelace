const signin = `
<aside class"singup-aside">
<h1>Sing In To ...</h1>
<form class"signin-form">
  <input type="text" name="username" id="username" placeholder="Username">
  <input type="password" name="password" id="password" placeholder="Password">
</form>
<button id='signin' onclick="signin()">SING IN</button>
</aside>
<main class"singup-main">
<h1>Hello, Friend!</h1>
<p>Enter your personal details and start jouney with us</p>
<button id="singup-spa" onclick="spa('signupspa')">SING UP</button>
</main>
`;


const signup = `
<main class="singin-main">
    <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
    <button id="singin-spa" onclick="spa('signinspa')">SIGN IN</button>
  </main>
  <aside class"singin-aside">
    <h1>Create Account</h1>
    <form class"signup-form">
      <input type="text" name="fullname" id="fullname" placeholder="Full Name">
      <input type="text" name="username" id="username" placeholder="Username">
      <input type="email" name="email" id="email" placeholder="E-mail">
      <input type="password" name="password" id="password" placeholder="Password">
    </form>
    <button id='signup' onclick='signup()'>SING UP</button>
  </aside>
`;

const signupsuccess = `
<main class"singup-main">
    <h1>Hello, Friend!</h1>
    <p>Enter your personal details and start jouney with us</p>
    <button id="singup-spa" onclick="spa('signupspa')">SING UP</button>
    </main>
      <aside class"singin-aside">
        <h1>Success</h1>
        <p id="signup-success">Congratulation, yours account has been successfully created</p>
        <span>&#10004;</span>
        <button id="singin-spa" onclick="spa('signinspa')">CONTINUE</button>
      </aside>
`;

const signinsuccess = `
<main class"singup-main">
    <h1>Hello, </h1>
    <p>Enter your personal details and start jouney with us</p>
    <button id="singup-spa" onclick="spa('signupspa')">SING UP</button>
    </main>
      <aside class"singin-aside">
        <h1>Success</h1>
        <p id="signup-success">Congratulation, yours account has been successfully created</p>
        <span>&#10004;</span>
        <button id="singin-spa" onclick="spa('signinspa')">CONTINUE</button>
      </aside>
`;

const signinsuccessadm = `
<main class"singup-main">
    <h1>Hello, ADM!</h1>
    <p>Enter your personal details and start jouney with us</p>
    <button id="singup-spa" onclick="spa('signupspa')">SING UP</button>
    </main>
      <aside class"singin-aside">
        <h1>Success</h1>
        <form class"signup-form">
      <input type="text" name="title" id="title" placeholder="Title">
      <input type="text" name="description" id="description" placeholder="Description">
      <input type="date" name="date" id="date" placeholder="Date">
      <input type="time" name="time" id="time" placeholder="Time">
    </form>
    <button id='signup' onclick='signup()'>SING UP</button>
      </aside>
`;

module.exports = { signin, signup, signupsuccess, signinsuccess , signinsuccessadm };