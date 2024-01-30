let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo,tel){
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};
let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};


//Uso de metodo apply para
//metodo persona1.nombreCompleto con datos de persona2
console.log(persona1.nombreCompleto("Lic", "5577123134"));
let arreglo = ["Ing","5544112371"];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));