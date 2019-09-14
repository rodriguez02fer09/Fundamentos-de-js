var x = 4,
  y = "4";

// npo le importa el tipo de dato (string o entero) solo comparo con el valor
a = x == y;
a;

// tiene en cuenta el tipo de dato, comparo con el valor y con el tipo
//este es mejor usarlo
a = x === y;
a;

var x = "4",
  y = "4";
a = x === y;

var obj = {
  nombre: "ricardo"
};
var obj2 = {
  nombre: "ricardo"
};

// Los objetos se comporan por ferencia (id en memoria)
a = obj == obj2;
a;

a = obj === obj2;
a;

var obj3 = obj2;

a = obj2 === obj3;
a;

obj2.nombre = "asdadasd";
obj3;
obj2;

juan = {
  edad: 16,
  ingeniero: false
};
function impriMirsiEsMayordeEdad(persona) {
  if (persona.edad >= 18) {
    console.log("MAYOR DE EDAD");
  } else {
    console.log("NO ES MAYOR DE EDAD");
  }
}

andres = {
  ingeniero: true,
  edad: 31
};
function imprimiresingeniero(persona) {
  if (persona.ingeniero) {
    console.log("Es Ingeniero");
  } else {
    console.log("No es ingeniero");
  }
}
//  function imprimirIngenieroYmayorDeEdad(edad,ingeniero){
//      if(ingeniero && edad>=18){
//          console.log("es mayor de edad y es ingeniero")
//      } else {
//          console.log("no es mayor de edad y no es ingeniero")
//      }
//  }

//  imprimirIngenieroYmayorDeEdad(andres.edad,andres.ingeniero)
// imprimirIngenieroYmayorDeEdad(juan.edad, juan.ingeniero)

function imprimirIngenieroYmayorDeEdad(persona) {
  impriMirsiEsMayordeEdad(persona);
  imprimiresingeniero(persona);
}
a = imprimirIngenieroYmayorDeEdad(andres);
a;

// las funciones retornar valores (obj, entero, function ...)
function esMayorA10(a, b) {
  if (a + b > 10) {
    return true;
  }
  return false;
}

a = esMayorA10(1, 20);
a;

//Ejemplo de uan funcion que retorna otra funcion
function construirSaluda(saludo) {
  return function() {
    return saludo + " como estas";
  };
}

var saludoHi = construirSaluda("hi");
a = saludoHi();
a;

var salidoHola = construirSaluda("hola");
a = salidoHola();
a;
