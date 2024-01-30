//---------------------
//Sintaxis de promesas
let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Resolvio Correcto");
  else rechazar("Se produjo un error");
});
//---------------------

//---------------------
//Formas de llamar a la promesa
// miPromesa.then(
//   (valor) => console.log(valor),
//   (error) => console.log(error)
// );

// miPromesa
//   .then((valor) => console.log(valor))
//   .catch((error) => console.log(error)
//   );
//---------------------

//---------------------
//Promesa con setTimeout
let promesa = new Promise((resolver) => {
  // console.log("inicio promesa");
  setTimeout(() => resolver("Saludos con promesa y timeout"), 3000);
  // console.log("fin promesa");
});
// promesa.then((valor) => console.log(valor));
//-------------------

//---------------------
//Promesas con async
//Async- Indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
  return "Saludos con promesa y asinc";
}
//miFuncionConPromesa().then(valor => console.log(valor));
//-------------------

//---------------------
//Await y async con promesas
//Await-Espera una promesa
async function funcionConPromesaYAwait(){
  let miPromesa = new Promise(resolver => {
    resolver("Promesa con await");
  });
  console.log(await miPromesa);
}
//funcionConPromesaYAwait();
//------------------

//---------------------
// Promesas con await,async y setTimeout
async function funcionConPromesaAwaitYTimeout(){
  console.log("Inicio funcion");
  let miPromesa = new Promise(resolver => {
   setTimeout(() => resolver("Promesa con await y timeout"),3000);
  });
  console.log(await miPromesa);
  console.log("fin funcion");
  }
  funcionConPromesaAwaitYTimeout();

//---------------------
