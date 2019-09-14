// Cuando se cuantos cilclos hay for

const array = [1, 2, 3, 4, 3];
t = typeof array;
for (let index = 1; index < array.length; index++) {
  const element = array[index];
  console.log(index);
  console.log(element);
}

// cunado finaliza el ciclo bajo una condición ejemplo tomo cerza hasta que me emborracho
n = 0;
while (n < 5) {
  console.log("hola");
  n++;
}

//Do while se ejecuta una vez antes de que se evalúe la expresión condicional.
var cont = 0;

const llueve = () => Math.random() < 0.25;

do {
  cont++;
} while (!llueve());

if (cont == 1) {
  console.log(`fui a ver si llovía ${cont} vez`);
} else {
  console.log(`fui a ver si llovía ${cont} veces`);
}
