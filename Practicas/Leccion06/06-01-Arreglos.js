//Sintaxis antigua
//let autos = new Array('BMW','MercedeS Benz','Volvo');
//Sintaxis adecuada
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}

//Modificar un valor
autos[1] = 'MercedesBenz';
console.log(autos[1]);
//Agregar un nuevo valor-Metodo Push
autos.push('Audi');
console.log(autos);
//Agregar un nuevo valor con length
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);
//Agregar de acuerdo al indice
autos[5] = 'Porshe';
console.log(autos);

//Preguntando si es un arrreglo
console.log(typeof autos); //No funciona
console.log(Array.isArray(autos)); //Solucion
console.log(autos instanceof Array); //Solucion