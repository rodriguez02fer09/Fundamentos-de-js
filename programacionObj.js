// COMO CREAR CLASES APARTIR DE PROTOTIPOS
function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}
// A SI SE DEFINE LOS METODOS
// THIS HACE REFERENCIA A LOS ATRIBUTOS DE LA CLASE
// THIS = AL CONTEXTO
Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre}${this.apellido}`);
};

Persona.prototype.esAlta = function() {
  console.log(this.altura);
  if (this.altura >= 1.8) {
    returntrue;
  }
  return false;
};

// SE CREA UN NUEVO OBJETO APARTIR DE UNA CLASE
var antury = new Persona("Wilson", "Antury", 1.6);

antury.saludar();
if (antury.esAlta()) {
  console.log(`${antury.nombre} es alto`);
} else {
  console.log(`${antury.nombre} no es alto`);
}

// function Persona(nombre) {
//     this.nombre = nombre;
//
// }

// Persona.prototype.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre}${this.apellido}`);
// };

class Persona2 {
  constructor(name) {
    this.name = name;
  }

  saludar() {
    console.log("hola ..." + this.name);
  }
}

var richard = new Persona2("richard");
richard.saludar();

class Persona3 extends Persona2 {}

fernanda = new Persona3("fernanda");
fernanda.saludar();
