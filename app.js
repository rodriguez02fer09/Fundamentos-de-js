const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const options = {
  crossDomain: true,
  dataType: "json"
};

var onResponse = function(data) {
  // Recibo la data y muestro en name del personaje
  console.log(`Hola, yo soy ${data.name}`);
};

var obtenerPersonaje = function(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  // Tras respnder el servidor con la respuesta, ejecuta nuestra función callback llamada onResponse
  $.get(URL, options, onResponse);
};

// Este es un simulador para ver que el orden de las peticiones no se responde como tal,
// depende del servidor, por tanto, algunas respuestas llegan antes que otras.
// El ASINCRONISMO no se da en orden, depende de la disponibilidad del servicio para responder tan pronto como le sea posible.
for (var i = 1; i < 16; i++) {
  obtenerPersonaje(i);
}
