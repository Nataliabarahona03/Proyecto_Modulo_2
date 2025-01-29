// Definición de las preguntas, alternativas, respuestas correctas y los votos
const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?", //texto pregunta
      alternativas: ["Berlín", "Madrid", "París", "Roma"], //alternativas
      respuestaCorrecta: 3, // El número de la respuesta correcta
      votos: [0, 0, 0, 0] // Votos iniciales para cada alternativa
    },
    {
      pregunta: "¿En qué año llegó el hombre a la luna?",
      alternativas: ["1959", "1969", "1979", "1989"],
      respuestaCorrecta: 2,
      votos: [0, 0, 0, 0] 
    },
    {
      pregunta: "¿Quién pintó la Mona Lisa?",
      alternativas: ["Van Gogh", "Picasso", "Da Vinci", "Dalí"],
      respuestaCorrecta: 3,
      votos: [0, 0, 0, 0]
    },
    {
      pregunta: "¿En qué continente está Egipto?",
      alternativas: ["África", "Asia", "Europa", "América"],
      respuestaCorrecta: 1,
      votos: [0, 0, 0, 0]
    },
    {
      pregunta: "¿Cuántos planetas hay en el sistema solar?",
      alternativas: ["8", "9", "7", "6"],
      respuestaCorrecta: 1,
      votos: [0, 0, 0, 0]
    },
    {
      pregunta: "¿Cuál es el océano más grande del mundo?",
      alternativas: ["Atlántico", "Índico", "Pacífico", "Ártico"],
      respuestaCorrecta: 3,
      votos: [0, 0, 0, 0]
    },
    {
      pregunta: "¿Quién escribió 'Cien años de soledad'?",
      alternativas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Isabel Allende"],
      respuestaCorrecta: 1,
      votos: [0, 0, 0, 0]
    },
    {
        pregunta: "¿Quién es el autor de 'Don Quijote de la Mancha'?",
        alternativas: ["Gabriel García Márquez", "Julio Cortázar", "Miguel de Cervantes", "Mario Vargas Llosa"],
        respuestaCorrecta: 3,
        votos: [0, 0, 0, 0]
    }
];

// Función para mostrar la pregunta y las alternativas
const mostrarPregunta = (preguntaObj) => {
    const { pregunta, alternativas } = preguntaObj;
    console.log(pregunta); // Muestra la pregunta en la consola
    alternativas.forEach((alternativa, index) => {
      console.log(`${index + 1}. ${alternativa}`); // Muestra las alternativas con números
    });
  
    // pide y recibe la respuesta del usuario (solo el número)
    let respuestaUsuario = prompt(`${pregunta}\n${alternativas.map((a, i) => `${i + 1}. ${a}`).join("\n")}`);
    
    // Asegurarnos de que la respuesta sea un número y que esté en el rango correcto
    respuestaUsuario = parseInt(respuestaUsuario, 10);
  
    // Comprobamos que el número ingresado sea válido
    if (isNaN(respuestaUsuario) || respuestaUsuario < 1 || respuestaUsuario > 4) {
      console.log("Respuesta inválida. Por favor, ingresa un número entre 1 y 4.");
      return null; // Retornamos null si la respuesta no es válida
    }
  
    return respuestaUsuario; // Retornamos la respuesta como un número
};

// Función para verificar si la respuesta es correcta o incorrecta
const verificarRespuesta = (respuestaUsuario, respuestaCorrecta, preguntaObj) => {
     preguntaObj.votos[respuestaUsuario - 1]++; // Incrementamos los votos para la alternativa seleccionada
    if (respuestaUsuario === respuestaCorrecta) {
      console.log("¡Correcto!"); // Respuesta correcta
      return true; //retorna true si la respuesta es correcta
    } else {
      console.log(`¡Incorrecto! La respuesta correcta es: ${preguntaObj.alternativas[respuestaCorrecta - 1]}`); // Respuesta incorrecta
      return false; //retorna false si es incorrecta
    }
};

// Función para iniciar la encuesta y manejar el flujo
const iniciarEncuesta = (preguntas) => {
    let puntaje = 0; //iniciamos el puntaje en 0

    // Recorre las preguntas
    preguntas.forEach((preguntaObj) => {
      let respuestaUsuario = null;
      
      // Mientras la respuesta no sea válida, seguimos pidiendo la respuesta
      while (respuestaUsuario === null) {
        respuestaUsuario = mostrarPregunta(preguntaObj); // Muestra la pregunta y recibe la respuesta
      }

      // Verifica la respuesta
      const esCorrecta = verificarRespuesta(respuestaUsuario, preguntaObj.respuestaCorrecta, preguntaObj);
      
      // Si la respuesta es correcta, incrementa el puntaje
      if (esCorrecta) {
        puntaje++;
      }

      console.log("-------------------------------------------------"); // Separa las preguntas
    });

    mostrarPuntajeFinal(puntaje, preguntas.length); // Mostramos el puntaje final
    mostrarResultadosDeVotos(preguntas); // Mostramos los resultados de los votos
};

// Función para mostrar el puntaje final
const mostrarPuntajeFinal = (puntaje, totalPreguntas) => {
    console.log(`Tu puntaje final es: ${puntaje} de ${totalPreguntas}`);
};

// Función para mostrar los resultados de los votos
const mostrarResultadosDeVotos = (preguntas) => {
    preguntas.forEach((preguntaObj) => {
      console.log(`Resultados para la pregunta: "${preguntaObj.pregunta}"`);
      preguntaObj.alternativas.forEach((alternativa, i) => {
        console.log(`${alternativa}: ${preguntaObj.votos[i]} votos`); // Mostramos cuántos votos recibió cada alternativa
      });
      console.log("-------------------------------------------------");
    });
};

// Evento para iniciar la encuesta al hacer clic en el botón
document.getElementById('iniciarEncuestaBtn').addEventListener('click', () => {
    iniciarEncuesta(preguntas); // Llamamos a la función para iniciar la encuesta
});
 