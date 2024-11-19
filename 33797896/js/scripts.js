//INDEX

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "mel" || (username === "Mel" && password === "123")) {
      window.location.href = `admin.html?user=${username}`;
    } else {
      alert("Usuario incorrecto");
    }
  });

//ADMIN
document.getElementById("welcomeMessage").innerText = `Bienvenido/a ${user}!`;
