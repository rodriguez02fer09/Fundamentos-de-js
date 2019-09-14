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
    color: "verder",
    mirar() {
      console.log("estoy mirando");
    }
  }
};

animal.saludar();
animal.ojos.mirar();

name = "ricardo";

function saludar() {
  console.log("hola soy " + animal.nombre);
}

saludar();

function saludar2(name) {
  name = name;
  console.log("hola soy " + name);
}

saludar2("fernanda");
