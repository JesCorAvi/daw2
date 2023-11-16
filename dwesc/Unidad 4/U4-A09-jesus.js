
//Crear constructor.
//Crear propiedades: marca, modelo, color y año fabricación
function Vehiculo(marca, modelo, color, añoFabricación){

    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.añoFabricación = añoFabricación;
    //Crear el método mostrarDatos.
    this.mostrarDatos = function(){
        document.write(`
        Marca: ${this.marca}, <br>
        Modelo: ${this.modelo}, <br>
        Color: ${this.color}, <br>
        Año de fabricación: ${this.añoFabricación} <br>`)
    }
    //Crear un método que tenga argumentos acelerar(velocidad). 
    //Mostrará por pantalla 
    //que el coche ha acelerado a la velocidad pasada.
    this.acelerar = function(velocidad){
        document.write(`El coche ahora va a ${velocidad}km/h<br>`)
    //. Crear un método con función interna arrancar. Mostrará por pantalla 
    //que el coche de marca _, modelo_, de color_ ha arrancado.
    }
    this.arrancar = function(){
        document.write(`El coche de marca ${this.marca}, modelo ${this.modelo} y de color ${this.color} ha arrancado<br>`)
    }
    
}
//Instanciar dos objetos.
mercedes = new Vehiculo("Mercedes", "AMG", "Rojo", 1997);
bmw = new Vehiculo("BMW", "M5", "Azul", 2007)
document.write(
    `Por corchetes${mercedes['marca']}<br>
     Por puntos ${bmw.color}<br>
    `
)
//Crear el método mostrarDatos.
bmw.mostrarDatos();

//Crear un método que tenga argumentos acelerar(velocidad). Mostrará por 
//pantalla que el coche ha acelerado a la velocidad pasada.
mercedes.acelerar(170);
//. Crear un método con función interna arrancar. Mostrará por pantalla 
//que el coche de marca _, modelo_, de color_ ha arrancado.
bmw.arrancar();

Vehiculo.prototype.cilindrada = 2000;
//Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_,
// modelo_, color_ ha parado).
Vehiculo.prototype.frenar = function(){
    document.write(`El coche de marca ${this.marca}, modelo ${this.modelo} y de color ${this.color} ha parado<br>`)
}
document.write("<h2>Con for ... in<br></h2>");
for (let x in mercedes) {
  document.write(x + ':', mercedes[x],"<br>");
}
document.write("<h2>Con getOwnPropertyNames<br></h2>");

Object.getOwnPropertyNames(mercedes).forEach(x => {
    document.write(x + ':', mercedes[x],"<br>");
});
document.write("<h2>Con Object.keys<br></h2>");

Object.keys(mercedes).forEach(x => {
    document.write(x + ':', mercedes[x],"<br>");
});
