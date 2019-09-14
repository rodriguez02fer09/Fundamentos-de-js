// definir objeto de formar liteal
var obj = {};
//  definir un objeto apartir de su prototipo
var obj2 = new Object();
// typeof me indica de que tipo es una variable
// (string, number , funcion, objeto , array)
t = typeof obj;
t;

t = typeof obj2;
t;

//Ejemplo de objeto que representa un animal
var animal = {
  nombre: "tigre",
  edad: 3,
  genero: "F",
  saludar() {
    console.log("hola soy " + this.nombre);
  },
  ojos: {
    tamaño: "2cm",
    color: "verder"
  }
};

animal.saludar();

name = "ricardo";

a = {
  nombre: "sadsdsad"
};
// obetener stributos de un objeto en una funcion
function saludar(objeto) {
  // vat nonbre = objecto.nombre
  var { nombre } = objeto;
  console.log("hola soy " + nombre);
}

saludar(a);

function saludar2(name) {
  name = name;
  console.log("hola soy " + name);
}

saludar2("fernanda");
