//Declaracion de la funcion
/*
function miFuncion(a, b) {
    console.log(arguments.length);
  return a + b;
}
*/

//Llamando a la funcion
/*
let resultado = miFuncion(2, 3);
console.log(resultado);
*/

//Funcion tipo expresion
/*
let sumar = function (a, b) {
  return a + b;
};
resultado = sumar(1, 2);
console.log(resultado);
*/

//Funcion Self Invoking,se llama a si misma pero no es reutilizable
/*
(function (a,b){
    console.log("Ejecutando la funcion: " + (a + b));
})(3,4); 
*/

//Funcion toString
/*
console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
*/

//Funciones Tipo Flecha
/*
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);
*/
//Parametros y argumentos
let sumar = function (a = 4,b = 5) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
  };
  resultado = sumar(3,6,7);
  console.log(resultado);