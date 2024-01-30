let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo,tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};
let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};


//Uso de metodo call para
//metodo persona1.nombreCompleto con datos de persona2
console.log(persona1.nombreCompleto("Lic", "7766551217"));
console.log(persona1.nombreCompleto.call(persona2, "Ing", "5544116621"));