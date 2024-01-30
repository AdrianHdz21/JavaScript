let miNumero = "18";
//console.log(typeof miNumero);

let edad = Number(miNumero); //Conversion a numero
console.log(edad); //Not a number = NaN

if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("Muy joven para votar");
  }
}

if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  let resultado = edad >= 18 ? "Puede votar" : "Muy joven para votar";
  console.log(resultado);
}
