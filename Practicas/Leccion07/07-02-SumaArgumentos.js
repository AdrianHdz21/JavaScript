let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log(resultado);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }
  return suma;
}
