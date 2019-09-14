const esMayorDeEdad = function(edad) {
  if ((edad) => 18) {
    console.log("ACCESO DENEGADO");
  }
};

// Esta es una forma corta de escribir una funcion
//Si la funcion resive solo un parametro los parectesis son opciones ejemple edad => {}
//Si la function retorna algo en un lina se puede omitir las llaver  edad => return algo
const esMayorDeEdadArrow = (edad) => {
  if ((edad) => 18) {
    console.log("ACCESO DENEGADO");
  }
};
