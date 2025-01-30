// Aqui vemos la logica para mostrar las preguntas, verificar las respuestas y llevar el puntaje.

class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas;
        this.puntaje = 0;
        this.indexPregunta = 0;
    }
  
    mostrarPregunta() {
        const pregunta = this.preguntas[this.indexPregunta]; // Accedemos a la pregunta actual
        const questionContainer = document.getElementById("question-container"); // Elemento en el HTML donde insertamos la pregunta y alternativas
        const resultContainer = document.getElementById("result"); // Elemento para mostrar resultados
  
        // Limpiar contenedores para evitar que se acumulen las preguntas anteriores
        questionContainer.innerHTML = "";
        resultContainer.innerHTML = "";
  
        // Mostrar la pregunta
        const preguntaElemento = document.createElement("h2");
        preguntaElemento.textContent = pregunta.pregunta;
        questionContainer.appendChild(preguntaElemento);
  
        // Mostrar alternativas como botones
        pregunta.alternativas.forEach((alternativa) => {
            const boton = document.createElement("button");
            boton.textContent = alternativa;
            boton.classList.add("btn");
            boton.onclick = () => this.verificarRespuesta(boton.textContent, pregunta.respuestaCorrecta, pregunta); // Pasar la pregunta actual para actualizar los votos
            questionContainer.appendChild(boton);
        });
  
        // Mostrar en consola la pregunta actual
        console.log(`Pregunta ${this.indexPregunta + 1}: ${pregunta.pregunta}`);
    }
  
    verificarRespuesta(respuestaUsuario, respuestaCorrecta, preguntaObj) {
        const resultContainer = document.getElementById("result");
  
        // Incrementar los votos para la alternativa seleccionada
        const alternativaSeleccionada = preguntaObj.alternativas.indexOf(respuestaUsuario);
        preguntaObj.votos[alternativaSeleccionada]++;
  
        // Verificar si la respuesta es correcta
        if (respuestaUsuario === respuestaCorrecta) {
            resultContainer.textContent = "¡Correcto!";
            this.puntaje++;
            console.log(`Respuesta Correcta: ${respuestaUsuario}`);
        } else {
            resultContainer.textContent = `¡Incorrecto! La respuesta correcta es: ${respuestaCorrecta}`;
            console.log(`Respuesta Incorrecta. Tu respuesta: ${respuestaUsuario}, Correcta: ${respuestaCorrecta}`);
        }
  
        // Pasar a la siguiente pregunta después de un breve retraso
        setTimeout(() => {
            this.indexPregunta++;
            if (this.indexPregunta < this.preguntas.length) {
                this.mostrarPregunta();
            } else {
                this.mostrarPuntajeFinal();
                this.mostrarVotos(); // Mostrar votos al final de la encuesta
            }
        }, 1500);
    }
  
    mostrarPuntajeFinal() {
        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `Tu puntaje final es: ${this.puntaje} de ${this.preguntas.length}`;
        console.log(`Puntaje Final: ${this.puntaje} de ${this.preguntas.length}`);
    }
  
    mostrarVotos() {
        // Mostrar los resultados de los votos para cada pregunta
        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML += "<h3>Resultados de Votos:</h3>";
  
        this.preguntas.forEach((preguntaObj) => {
            const preguntaTitulo = document.createElement("h4");
            preguntaTitulo.textContent = `Pregunta: ${preguntaObj.pregunta}`;
            resultContainer.appendChild(preguntaTitulo);
  
            preguntaObj.alternativas.forEach((alternativa, i) => {
                const votoTexto = document.createElement("p");
                votoTexto.textContent = `${alternativa}: ${preguntaObj.votos[i]} votos`;
                resultContainer.appendChild(votoTexto);
            });
  
            resultContainer.appendChild(document.createElement("br"));
        });
    }
  
    iniciarEncuesta() {
        this.mostrarPregunta();
    }
  }
  
    
    //definir las preguntas y alternativas
    const preguntas = [
      {
        pregunta: "¿Cuál es la capital de Francia?", //texto de la pregunta
        alternativas: ["Berlín", "Madrid", "París", "Roma"], //array con las alternativas
        respuestaCorrecta: "París", //alternativa correcta
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿En qué año llegó el hombre a la luna?",
        alternativas: ["1959", "1969", "1979", "1989"],
        respuestaCorrecta: "1969",
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        alternativas: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        respuestaCorrecta: "Leonardo da Vinci",
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        alternativas: ["Atlántico", "Pacífico", "Índico", "Ártico"],
        respuestaCorrecta: "Pacífico",
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿Quién es el autor de 'Don Quijote de la Mancha'?",
        alternativas: ["Gabriel García Márquez", "Julio Cortázar", "Miguel de Cervantes", "Mario Vargas Llosa"],
        respuestaCorrecta: "Miguel de Cervantes",
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿Cuál es el continente más grande?",
        alternativas: ["Asia", "África", "Europa", "América"],
        respuestaCorrecta: "Asia",
        votos: [0, 0, 0, 0]
      },
      {
        pregunta: "¿Cuántos planetas tiene el sistema solar?",
        alternativas: ["7", "8", "9", "10"],
        respuestaCorrecta: "8",
        votos: [0, 0, 0, 0]
      }
    ];
    
    const encuesta = new Encuesta(preguntas); //esto crea un objeto que tiene las propiedades y metodos definidos anteriormente
    encuesta.iniciarEncuesta(); //inicia el flujo de la encuesta, mostrando la primra pregunta
    
    