const ramos = [
  {
    semestre: 1,
    nombre: "álgebra"
  },
  {
    semestre: 1,
    nombre: "geometría"
  },
  {
    semestre: 1,
    nombre: "química"
  },
  {
    semestre: 1,
    nombre: "introducción a la programación"
  },
  {
    semestre: 1,
    nombre: "taller 1: introducción a la profesión"
  },
  {
    semestre: 2,
    nombre: "comunicación idioma español"
  },
  {
    semestre: 2,
    nombre: "álgebra lineal",
    requisitos: ["álgebra"]
  },
  {
    semestre: 2,
    nombre: "cálculo en una variable",
    requisitos: ["álgebra", "geometría"]
  },
  {
    semestre: 2,
    nombre: "electivo 1"
  },
  {
    semestre: 2,
    nombre: "educación física y salud"
  },
  {
    semestre: 2,
    nombre: "programación",
    requisitos: ["introducción a la programación"]
  },
  {
    semestre: 2,
    nombre: "taller 2: programación aplicada",
    requisitos: ["introducción a la programación", "taller 1: introducción a la profesión"]
  },
  {
    semestre: 3,
    nombre: "física mecánica",
    requisitos: ["geometría", "álgebra"]
  },
  {
    semestre: 3,
    nombre: "comunicación idioma inglés"
  },
  {
    semestre: 3,
    nombre: "ecuaciones diferenciales",
    requisitos: ["cálculo en una variable", "álgebra lineal"]
  },
  {
    semestre: 3,
    nombre: "cálculo en varias variables",
    requisitos: ["cálculo en una variable"]
  },
  {
    semestre: 3,
    nombre: "estructura de datos y algoritmos",
    requisitos: ["programación"]
  },
  {
    semestre: 3,
    nombre: "taller 3: estructura de datos y algoritmos",
    requisitos: ["programación", "taller 2: programación aplicada"]
  },
  {
    semestre: 4,
    nombre: "física ondas y electromagnetismo",
    requisitos: ["cálculo en una variable", "física mecánica"]
  },
  {
    semestre: 4,
    nombre: "métodos numéricos",
    requisitos: ["ecuaciones diferenciales", "cálculo en varias variables"]
  },
  {
    semestre: 4,
    nombre: "estadística y probabilidad",
    requisitos: ["álgebra lineal"]
  },
  {
    semestre: 4,
    nombre: "programación orientada a objetos",
    requisitos: ["programación"]
  },
  {
    semestre: 4,
    nombre: "estructuras discretas",
    requisitos: ["álgebra lineal"]
  },
  {
    semestre: 4,
    nombre: "taller 4: construcción de software",
    requisitos: ["estructura de datos y algoritmos", "taller 3: estructura de datos y algoritmos"]
  },
  {
    semestre: 5,
    nombre: "inglés instrumental"
  },
  {
    semestre: 5,
    nombre: "práctica inicial",
    requisitos: ["taller 4: construcción de software"]
  },
  {
    semestre: 5,
    nombre: "optativo especialización 1"
  },
  {
    semestre: 5,
    nombre: "arquitectura de computadores",
    requisitos: ["estadística y probabilidad", "estructuras discretas", "taller 3: estructura de datos y algoritmos"]
  },
  {
    semestre: 5,
    nombre: "base de datos",
    requisitos: ["taller 4: construcción de software"]
  },
  {
    semestre: 5,
    nombre: "teoría de autómatas",
    requisitos: ["estructuras discretas", "taller 3: estructura de datos y algoritmos"]
  },
  {
    semestre: 5,
    nombre: "diseño y análisis de algoritmos",
    requisitos: ["estructura de datos y algoritmos", "estadística y probabilidad", "estructuras discretas"]
  },
  {
    semestre: 6,
    nombre: "inglés funcional",
    requisitos: ["inglés instrumental"]
  },
  {
    semestre: 6,
    nombre: "programación en paradigmas funcional y paralelo",
    requisitos: ["arquitectura de computadores", "diseño y análisis de algoritmos", "programación orientada a objetos"]
  },
  {
    semestre: 6,
    nombre: "sistemas operativos",
    requisitos: ["arquitectura de computadores", "taller 3: estructura de datos y algoritmos"]
  },
  {
    semestre: 6,
    nombre: "investigación operativa",
    requisitos: ["álgebra lineal", "cálculo en varias variables", "estadística y probabilidad"]
  },
  {
    semestre: 6,
    nombre: "ingeniería de requisitos",
    requisitos: ["base de datos", "taller 4: construcción de software"]
  },
  {
    semestre: 6,
    nombre: "arquitectura de software",
    requisitos: ["base de datos"]
  },
  {
    semestre: 7,
    nombre: "optativo especialización 2"
  },
  {
    semestre: 7,
    nombre: "gestión organizacional",
    requisitos: ["cálculo en varias variables", "práctica inicial", "taller 4: construcción de software"]
  },
  {
    semestre: 7,
    nombre: "comunicaciones",
    requisitos: ["sistemas operativos", "teoría de autómatas"]
  },
  {
    semestre: 7,
    nombre: "interacción humano-computador",
    requisitos: ["ingeniería de requisitos", "inglés funcional"]
  },
  {
    semestre: 7,
    nombre: "ingeniería de software",
    requisitos: ["arquitectura de software", "ingeniería de requisitos"]
  },
  {
    semestre: 7,
    nombre: "inteligencia artificial",
    requisitos: ["diseño y análisis de algoritmos", "programación en paradigmas funcional y paralelo"]
  },
  {
    semestre: 8,
    nombre: "optativo especialización 3"
  },
  {
    semestre: 8,
    nombre: "evaluación de proyectos informáticos",
    requisitos: ["gestión organizacional", "ingeniería de software", "investigación operativa"]
  },
  {
    semestre: 8,
    nombre: "redes",
    requisitos: ["comunicaciones"]
  },
  {
    semestre: 8,
    nombre: "sistemas de información",
    requisitos: ["gestión organizacional", "ingeniería de software"]
  },
  {
    semestre: 8,
    nombre: "seminario de ética profesional",
    requisitos: ["gestión organizacional"]
  },
  {
    semestre: 8,
    nombre: "taller 5: ingeniería de software",
    requisitos: ["ingeniería de software", "interacción humano-computador"]
  },
  {
    semestre: 9,
    nombre: "optativo profundización 1"
  },
  {
    semestre: 9,
    nombre: "taller 6: emprendimiento",
    requisitos: ["evaluación de proyectos informáticos"]
  },
  {
    semestre: 9,
    nombre: "sistemas de gestión",
    requisitos: ["evaluación de proyectos informáticos", "sistemas de información"]
  },
  {
    semestre: 9,
    nombre: "sistemas distribuidos",
    requisitos: ["sistemas operativos"]
  },
  {
    semestre: 9,
    nombre: "taller 7: integración de tecnología de la información y comunicación",
    requisitos: ["redes"]
  },
  {
    semestre: 9,
    nombre: "taller de construcción de software"
  },
  {
    semestre: 9,
    nombre: "métodos y modelos de ingeniería de software",
    requisitos: ["taller 5: ingeniería de software"]
  },
  {
    semestre: 10,
    nombre: "optativo de profundización 2"
  },
  {
    semestre: 10,
    nombre: "tecnología de la información para la gestión organizacional",
    requisitos: ["seminario de ética profesional", "sistemas de gestión"]
  },
  {
    semestre: 10,
    nombre: "realidad tecnológica nacional",
    requisitos: ["taller 9"] // puedes cambiar esto si quieres que requiera todo
  },
  {
    semestre: 10,
    nombre: "taller de título",
    requisitos: ["métodos y modelos de ingeniería de software", "sistemas de gestión", "taller 7: integración de tecnología de la información y comunicación"]
  },
  {
    semestre: 11,
    nombre: "práctica profesional",
    requisitos: ["taller de título"]
  },
  {
    semestre: 11,
    nombre: "proyecto de título",
    requisitos: ["taller de título"]
  }
];

const estadoRamos = {};

function actualizarEstados() {
  ramos.forEach((ramo) => {
    const requisitos = ramo.requisitos || [];
    const aprobados = requisitos.every(req => estadoRamos[req]);
    const id = generarID(ramo);
    const div = document.getElementById(id);

    if (estadoRamos[ramo.nombre]) {
      div.className = "ramo aprobado";
    } else if (aprobados) {
      div.className = "ramo desbloqueado";
    } else {
      div.className = "ramo bloqueado";
    }
  });
}

function generarID(ramo) {
  return ramo.nombre.replace(/\s+/g, "-").toLowerCase();
}

function crearMalla() {
  const malla = document.getElementById("malla");
  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(s => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.innerHTML = `<h2>Semestre ${s}</h2>`;
    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.id = generarID(ramo);
      div.textContent = ramo.nombre;
      div.onclick = () => {
        const requisitos = ramo.requisitos || [];
        const aprobados = requisitos.every(req => estadoRamos[req]);
        if (!aprobados) return;
        estadoRamos[ramo.nombre] = !estadoRamos[ramo.nombre];
        actualizarEstados();
      };
      contenedor.appendChild(div);
    });
    malla.appendChild(contenedor);
  });

  actualizarEstados();
}

document.addEventListener("DOMContentLoaded", crearMalla);
