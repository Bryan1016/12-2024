let noCount = 0;
const maxFotos = 10;
const fotos = [
    "imagenes/1.jpeg", "imagenes/2.jpeg", "imagenes/3.jpeg", "imagenes/4.jpeg",
    "imagenes/5.jpeg", "imagenes/6.jpeg", "imagenes/7.jpeg", "imagenes/8.jpeg",
    "imagenes/9.jpeg", "imagenes/10.jpeg",
];
const mensajes = [
    "Realmente me duele haberte lastimado con mis actitudes.",
    "Siempre recuerdo los momentos felices que compartimos.",
    "Te extraño todos los días, eres una parte importante de mi vida.",
    "Lamento no haber valorado lo que teníamos en su momento.",
    "Cada recuerdo contigo me hace darme cuenta de cuánto te quiero.",
    "Entiendo que cometí errores, y estoy aprendiendo de ellos.",
    "Te llevo siempre conmigo, esa foto tuya de niña aún está en mi billetera.",
    "Todos los días deseo que me des otra oportunidad.",
    "Perdón por no haber sido la mejor persona para tí.",
    "Han pasado muchas noches desde que ya no estás, y no te olvidé"
];

let mensajeInicialMostrado = false;

function mostrarMensaje() {
    document.getElementById("inicio").style.display = "none"; 
    document.getElementById("mensaje").style.display = "block"; 

    const audio = document.getElementById("audio-perdon");
    audio.play().catch(error => console.error("Error al reproducir el audio:", error));
}

function perdonar() {
    ocultarTodo();
    document.getElementById("agradecimiento").style.display = "block"; 

    const numero = "51945649449"; 
    const mensaje = "Hola Bryan, Quiero hablar contigo."; 
    const encodedMessage = encodeURIComponent(mensaje); 
    const whatsappLink = `https://wa.me/${numero}?text=${encodedMessage}`; 

    document.getElementById("whatsapp-link").href = whatsappLink; 
}

function noPerdonar() {
    ocultarTodo(); 

    if (!mensajeInicialMostrado) {
        mostrarMensajeInicial();
        mensajeInicialMostrado = true;
    } else {
        if (noCount < maxFotos) {
            mostrarImagen();
        } else {
            noCount = 0;  // Reiniciar el contador si se llega al máximo
            mostrarImagen(); 
        }
        noCount++;
    }
}

function mostrarMensajeInicial() {
    const mensajeInicialContainer = document.createElement("div");
    mensajeInicialContainer.id = "mensaje-inicial";
    mensajeInicialContainer.innerHTML = `
        <h2>Aqui dejo algunas de nuestras fotos juntos ❤️</h2>
        <button onclick="continuarCiclo()">Ver fotos</button>
    `;
    document.body.appendChild(mensajeInicialContainer);

    
}

function continuarCiclo() {
    document.getElementById("mensaje-inicial").remove(); 
    noPerdonar(); 
}

function mostrarImagen() {
    document.getElementById("imagen-container").style.display = "block"; 
    document.getElementById("imagen").src = fotos[noCount % maxFotos]; 
    document.getElementById("mensaje-imagen").innerText = mensajes[noCount % maxFotos]; 
}

function ocultarTodo() {
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("agradecimiento").style.display = "none";
    document.getElementById("imagen-container").style.display = "none";
}