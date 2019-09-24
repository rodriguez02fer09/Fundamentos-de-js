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
    tamaño: {
      asd : {

      }
    },
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

// functiones que retornan algo 

function saludar3(saludo) {
  return saludo
}

var b = saludar3(true) 
b


// ejemplo de tipado en typescript
// function saludar(saludo: string): string {
//   return saludo;
// }

// var a = saludar("hello");
// a;


// Los objetos si  mantiene su refencia

var persona = {
  name : 'ricardo'
}

var persona2 = persona

persona2.name = "fernanda"

persona


// asi se pierde la referencia del primer nivel (casillero)

var vehiculo = {
  placas: 'bzt662',
  color: 'azul'
}

var vehiculo2 = JSON.parse(JSON.stringify(vehiculo));
vehiculo2.placas = 'xxx666'

vehiculo;

// con los otros tipo de variable se crea ua nueva referencia

var nombre = 'rodriguez'

var nombre2 = nombre

nombre2 = 'ariza'

nombre



option = {
  nombre: 'blog',
  activo: false
}

menu = {
  options: [option, option, option ,option]
}

a = menu.options[0]
a