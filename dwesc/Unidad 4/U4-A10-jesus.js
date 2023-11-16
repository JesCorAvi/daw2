var lista = []
function Vehiculo(marca, modelo, color, añoFabricación, cilindrada){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.añoFabricación = añoFabricación;
    this.cilindrada = cilindrada
     /*
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
    Vehiculo.prototype.frenar = function(){
        document.write(`El coche de marca ${this.marca}, modelo ${this.modelo} y de color ${this.color} ha parado<br>`)
    }
    */
    
}
mercedes = new Vehiculo("Mercedes", "AMG", "Rojo", 1997, "2.02L");

bmw = new Vehiculo("BMW", "M5", "Azul", 2006, "1.82L");

function añadirLinea(objeto){
    var tabla = document.getElementById("insertado")    
    var fila = document.createElement("tr");
    for (let x in objeto) {
        let celda = document.createElement("td"); // Crear una celda
        celda.textContent += objeto[x];
        fila.appendChild(celda)
    }
    tabla.appendChild(fila)
}
