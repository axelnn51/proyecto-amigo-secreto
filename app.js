// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Aquí guardo los nombres de los amigos que voy agregando
let amigos = [];

// Esta función se ejecuta cuando quiero agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtengo el campo donde el usuario escribe el nombre
    let nombre = input.value.trim(); // Guardo el nombre y elimino espacios extra al inicio y al final

    // Si el usuario no escribió nada, le aviso y no hago nada más
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el nombre es válido, lo agrego al array "amigos"
    amigos.push(nombre);

    // Borro el texto del campo para que quede vacío después de agregar el amigo
    input.value = "";

    // Llamo a la función que actualiza la lista en la pantalla
    actualizarLista();
}

// Esta función se encarga de actualizar la lista de amigos en la pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtengo el elemento donde se mostrará la lista
    lista.innerHTML = ""; // Borro el contenido actual para evitar duplicados

    // Recorro el array de amigos y agrego cada uno como un elemento <li> a la lista
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Creo un nuevo elemento <li>
        li.textContent = amigo; // Le asigno el nombre del amigo como contenido
        lista.appendChild(li); // Agrego el <li> dentro de la lista en la pantalla
    });
}

// Esta función elige un amigo al azar, lo muestra y limpia la lista
function sortearAmigo() {
    // Si no hay amigos en la lista, aviso y no sigo con el sorteo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Genero un número aleatorio entre 0 y la cantidad de amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtengo el amigo que está en la posición aleatoria del array
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestro el nombre del amigo sorteado en la pantalla
    let resultadoLista = document.getElementById("resultado"); // Obtengo el elemento donde se mostrará el resultado
    resultadoLista.innerHTML = `<li><b>Amigo sorteado:</b> ${amigoSorteado}</li>`; // Inserto el nombre del ganador en la lista

    // Limpio completamente la lista de amigos porque ya se hizo el sorteo
    amigos = [];
    actualizarLista(); // Llamo a esta función para que se borre la lista de la pantalla también
}
