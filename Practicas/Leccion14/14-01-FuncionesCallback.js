//Funcion tipo callback
// function imprimir(mensaje) {
//   console.log(mensaje);
// }

// function sumar(op1, op2, funcionCallback) {
//   let res = op1 + op2;
//   funcionCallback(`Resultado: ${res}`);
// }
// sumar(5,3,imprimir);

//Funcion setTimeout
// function miFuncionCallback(){
//     console.log("Saludo asincrono despues de tres segundos")
// }
// setTimeout(miFuncionCallback,3000);//Despues de tres segundos;
// setTimeout(function(){console.log("Saludo asincrono 2")},4000);
// setTimeout(() => console.log("saludo asincrono 3"),1000);

//Funcion setIntervetal
let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000);//1 seg