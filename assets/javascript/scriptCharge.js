// Funcion para guardar datos de pacientes en local storage
function guardarPaciente(paciente) {
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || []; //si encuentra en local storage lo toma, si no encuentra nada hay un operador avanzado or para que le asigne un array vacío
    pacientes.push(paciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

let formulario = document.getElementById("formulario-paciente");
let elementosFormulario = document.querySelectorAll(
    "#formulario-paciente input"
);

elementosFormulario.forEach(function (elemento) {
    elemento.addEventListener("focus", function () {
        this.setAttribute("placeholder", "");
    });
});

// capturo la información escrita en el formulario y lo envio al local storage
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nuevoPaciente = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        documento: document.getElementById("documento").value,
        obraSocial: document.getElementById("obraSocial").value,
        estado: document.getElementById("estado").value,
    };

    guardarPaciente(nuevoPaciente);

    swal("Buen trabajo!", "Paciente registrado", "success")
    document.getElementById("formulario-paciente").reset();
    setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/pages/charge.html";
      }, 1000)
});
