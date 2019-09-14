// un array es como un cuaderno que cada hoja contiene un valor
//Asi se define un array

const soyUnArray = [];

// Un array puede tener diferentes valores (objetos, strings, enteros, boleandos)

const soyArrayConDifentesyValores = [
  true,
  "soyUnString",
  5,
  {},
  { nombre: "soy un objeto con nombre" },
  function() {}
];

// De esta manera se filtra un array

// Pasando la funcion en el parametro
const soyUnArrayDeNumeros = [2, 3, 4, 5, 6, 79, 34, 4, 9, 0];

const numerospares = soyUnArrayDeNumeros.filter((numero) => {
  return numero % 2 == 0;
});

// con la fuction
const numerosparesFunction = (numero) => {
  return numero % 2 == 0;
};

numerospares2 = soyUnArrayDeNumeros.filter(numerosparesFunction);

numerospares2;

// Transformar los valores de un array con map

const soyUnArrayDeNumeros2 = [2, 3, 4, 5, 6, 79, 34, 4, 9, 19];

const elDobleDeSoyUnArrayDeNumeros = soyUnArrayDeNumeros.map((numero) => {
  return numero * 2;
});

elDobleDeSoyUnArrayDeNumeros;

// Reducir un array con reducer
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 10));
// expected output: 15
