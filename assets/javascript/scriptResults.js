
// se recuperan los pacientes guardados en local storage
let pacientes = JSON.parse(localStorage.getItem('pacientes'));

// se obtiene el contenedor de resultados
let resultadosContainer = document.getElementById('resultados-pacientes');

// Se recorre lacientes y se agrega al div
pacientes.forEach(function (paciente) {
    
    var pacienteDiv = document.createElement('div');
    pacienteDiv.classList.add('paciente');
    pacienteDiv.classList.add('p-3');
    // Se agrega el contenido del paciente al div
    pacienteDiv.innerHTML = `
        <h3>${paciente.nombre} ${paciente.apellido}</h3>
        <p>Documento: ${paciente.documento}</p>
        <p>Obra Social: ${paciente.obraSocial}</p>
        <p>Estado: ${paciente.estado}</p>
    `;
    // se agrega el div del paciente al contenedor de resultados
    resultadosContainer.appendChild(pacienteDiv);
});