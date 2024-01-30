let miFuncion = function() {
  console.log("Saludos desde mi funcion");
}

// let miFuncionFlecha = () => {
//     console.log("Saludos desde mi funcion flecha");

// }

// const miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");
// miFuncionFlecha();

// const saludar = () => {
//     return "Saludos desde funcion flecha";
// }

const saludar = () => "Saludos desde funcion flecha";
console.log(saludar());

const regresarObjeto = () => ({nombre:"Juan",apellido : "Lara"});
console.log(regresarObjeto());

const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Saludos con parametros");

const funcionConVariosParametros = (op1,op2) => op1 + op2;
console.log(funcionConVariosParametros(3,5));