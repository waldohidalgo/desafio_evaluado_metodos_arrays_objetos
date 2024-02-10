/*
Cambio la forma de mostrar en el HTML desde document.write a innerHTML vía creación de tag 
usando JavaScript

document.write("<p>Estadisticas centro medico ñuñoa</p>");
*/

const titulo_header = document.querySelector(".titulo_pagina");
titulo_header.innerHTML = "Estadísticas Centro Médico Ñuñoa";

var radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

var dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

//Agregar código para el desafio 2 aquí

const nuevosRegistrosTraumatologia = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];
traumatologia.push(...nuevosRegistrosTraumatologia); //Ejercicio 1
radiologia.shift(); //Ejercicio 2
radiologia.pop(); // Ejercicio 2

/*
Ejercico 3
*/

const lista_consultas_dental = document.querySelector(
  ".lista_consultas_dental"
);

for (let indice_dental in dental) {
  const fila_dental = document.createElement("p");
  fila_dental.classList.add("elemento_consulta_dental");
  if (indice_dental % 2 == 0) {
    fila_dental.classList.add("elemento_consulta_dental_par");
  } else {
    fila_dental.classList.add("elemento_consulta_dental_impar");
  }
  fila_dental.innerHTML = `${dental[indice_dental].hora} - ${dental[indice_dental].especialista} - ${dental[indice_dental].paciente} - ${dental[indice_dental].rut} - ${dental[indice_dental].prevision}`;
  lista_consultas_dental.appendChild(fila_dental);
  const parrafoSeparador = document.createElement("p");
  lista_consultas_dental.appendChild(parrafoSeparador);
}

/*
Ejercicio 4
*/
const listado_pacientes = [
  ...radiologia.map((obj) => obj.paciente),
  ...traumatologia.map((obj) => obj.paciente),
  ...dental.map((obj) => obj.paciente),
].sort();

const seccionListaPacientes = document.querySelector(".lista_pacientes");
const contenedor_pacientes = document.createElement("div");
contenedor_pacientes.classList.add("contenedor_pacientes");

for (let indice in listado_pacientes) {
  const elemento_paciente = document.createElement("p");
  elemento_paciente.innerHTML = listado_pacientes[indice];
  contenedor_pacientes.appendChild(elemento_paciente);
}
seccionListaPacientes.appendChild(contenedor_pacientes);

/*
Ejercicio 5
*/
const pacientesIsapreDental = dental.filter((obj) => obj.prevision == "ISAPRE");

const seccion_dental_isapre = document.querySelector(".lista_dental_isapre");
const contenedor_dental_isapre = document.createElement("div");
contenedor_dental_isapre.classList.add("contenedor_dental_isapre");

for (let indice in pacientesIsapreDental) {
  const elemento_paciente_isapre = document.createElement("p");
  elemento_paciente_isapre.innerHTML = `${pacientesIsapreDental[indice].paciente} - ${pacientesIsapreDental[indice].prevision}`;
  contenedor_dental_isapre.appendChild(elemento_paciente_isapre);
}
seccion_dental_isapre.appendChild(contenedor_dental_isapre);

/*
Ejercicio 6
*/

const pacientesFonasaTraumatologia = traumatologia.filter(
  (obj) => obj.prevision == "FONASA"
);
const seccion_traumatologia_fonasa = document.querySelector(
  ".lista_traumatologia_fonasa"
);
const contenedor_traumatologia_fonasa = document.createElement("div");
contenedor_traumatologia_fonasa.classList.add(
  "contenedor_traumatologia_fonasa"
);

for (let indice in pacientesFonasaTraumatologia) {
  const elemento_paciente_fonasa = document.createElement("p");
  elemento_paciente_fonasa.innerHTML = `${pacientesFonasaTraumatologia[indice].paciente} - ${pacientesFonasaTraumatologia[indice].prevision}`;
  contenedor_traumatologia_fonasa.appendChild(elemento_paciente_fonasa);
}
seccion_traumatologia_fonasa.appendChild(contenedor_traumatologia_fonasa);

//Agregar código para el desafio 2 aquí
/*
for (let indice in pacientesIsapreDental)
  document.write(
    `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
  );
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

document.write(
  `<p>Primera atencion: ${radiologia[0].paciente} - ${
    radiologia[0].prevision
  } | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
    radiologia[radiologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${traumatologia[0].paciente} - ${
    traumatologia[0].prevision
  } | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
    traumatologia[traumatologia.length - 1].prevision
  }.</p>`
);
document.write(
  `<p>Primera atencion: ${dental[0].paciente} - ${
    dental[0].prevision
  } | Última atención: ${dental[dental.length - 1].paciente} - ${
    dental[dental.length - 1].prevision
  }.</p>`
);
*/
