// função de cosulta os psicologos já cadastrados
async function psicologos() {
    const response = await fetch("http://localhost:3000/psicologos");
    const psicologos = await response.json();
    console.log("Psicólogos:", psicologos);
    renderPsicologos(psicologos);
}

// função de cosulta os psicologos já cadastrados
async function pacientes() {
    const response = await fetch("http://localhost:3000/pacientes");
    const pacientes = await response.json();
    console.log("Pacientes:", pacientes);
    renderPacientes(pacientes);
}

// função para mostrar o total de pacientes cadastrados
async function totalPacientes() {
    const response = await fetch('http://localhost:3000/total/Pacientes')
    const contPacienete = await response.json();
    console.log('Total de pacientes cadastrados', contPacienete);
    renderTotalPacientes(contPacienete);
}

// Função para criar a lista de psicólogos
function renderPsicologos(psiData) {
    const psicologosList = document.getElementById("psicologos-list");
    psicologosList.innerHTML = "";

    psiData.forEach((psicologo) => {
        const psicologoDiv = document.createElement("div");
        psicologoDiv.innerHTML = `
        <strong>${psicologo.nome}</strong><br>
        CRP: ${psicologo.crp}<br>
        Telefone: ${psicologo.telefone}<br>
        E-mail: ${psicologo.email}<br>
        Data de entrada: ${psicologo.createdAt}<br><br>`;
        psicologosList.appendChild(psicologoDiv);
    });
}

// Função para criar a lista de pacientes
function renderPacientes(pacienteData) {
    const pacientesList = document.getElementById("pacientes-list");
    pacientesList.innerHTML = "";

    pacienteData.forEach((paciente) => {
        const pacienteDiv = document.createElement("div");
        pacienteDiv.innerHTML = `
        <strong>${paciente.nome}</strong><br>
        CPF: ${paciente.cpf}<br>
        Telefone: ${paciente.telefone}<br>
        E-mail: ${paciente.email}<br>
        Data de entrada: ${paciente.createdAt}<br><br>`;
        pacientesList.appendChild(pacienteDiv);
    });
}

function renderTotalPacientes(total) {
    const totalPacientes = document.getElementById('total-pacientes');
    totalPacientes.innerHTML = "";
    
    const pacientesList = document.createElement('p')
    pacientesList.textContent = `Total de pacientes cadastrados: ${total}`

    totalPacientes.appendChild(pacientesList)
}

// Chamando as funções para renderizar as listas
async function obtendoDados() {
    await pacientes()
    await psicologos()
    await totalPacientes()
}

obtendoDados()