let numero = 2;
let numeroTexto = "Valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "Numero uno";
    break;
  case 2:
    numeroTexto = "Numero dos";
    break;
  case 3:
    numeroTexto = "Numero tres";
    break;
  case 4:
    numeroTexto = "Numero cuatro";
    break;
  default:
    numeroTexto = "Caso no encontrado";
}
console.log(numeroTexto);

let mes = 9;
let estacion = "Estacion desconocido";
switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Estacion no encontrada";
}
console.log(estacion);
