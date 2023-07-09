
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // guardar usuario y contraseña ingresada
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Cargar archivo json y comparar lo ingresado con lo guardado; la próxima versión va a sumar el darse de alta en la platarforma
  fetch("http://127.0.0.1:5500/assets/javascript/usuarios.json")
    .then(response => response.json())
    .then(data => {
      
      let user = data.usuarios.find(user => user.username === username);
      console.log(user);
      // Verificar si se encontró el usuario y la contraseña coincide, se utilizó ternario
      user && user.password === password
        ? (console.log("ANduvo loginnn"),
          swal("Login exitoso", "¡Bienvenido, " + username + "!", "success"),
          // se aguarda 1 seg y te redirecciona a la pagina de carga de pacientes
          setTimeout(function () {
            window.location.href = "http://127.0.0.1:5500/pages/charge.html";
          }, 1000))
        : swal("Error", "Usuario o contraseña incorrectos \n\n pruebe con ( admin / password )", "error");
    })

    .catch(error => {
      console.log("Error al cargar el archivo JSON", error);
    });
});



