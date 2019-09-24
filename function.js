// variable globla
name = "ricardo";

function saludar() {
  console.log("hola soy " + name);
}

saludar();


//varible local
function saludar2(name) {
  name = name;
  console.log("hola soy " + name);
}

saludar2("fernanda");


