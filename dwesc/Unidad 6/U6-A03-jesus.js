function coche(marca, modelo, color, año_fabricacion){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año_fabricación = año_fabricacion;
}

coches = {
    "toyota" : new coche("Toyota", "Corolla", "Rojo", 2020),
    "honda" : new coche("Honda", "Civic", "Azul", 2021),
    "ford": new coche("Ford", "Focus", "Negro", 2019),
    "chevrolet" : new coche("Chevrolet", "Malibu", "Plata", 2022),
    "volkswagen": new coche("Volkswagen", "Golf", "Blanco", 2023),
}

var botones = document.querySelectorAll(".boton");
var mostrador = document.getElementById("mostrador")

botones.forEach((boton, i) => {
    botones[i].addEventListener("click", ()=>{
        while (mostrador.hasChildNodes()) {
            mostrador.removeChild(mostrador.lastChild);
        }
        var ejemplar = botones[i].id
        var linea1 = document.createElement("td")
        linea1.appendChild(document.createTextNode(coches[ejemplar].marca))
        var linea2 = document.createElement("td")
        linea2.appendChild(document.createTextNode(coches[ejemplar].modelo))
        var linea3 = document.createElement("td")
        linea3.appendChild(document.createTextNode(coches[ejemplar].color))
        var linea4 = document.createElement("td")
        linea4.appendChild(document.createTextNode(coches[ejemplar].año_fabricación))
        mostrador.append(linea1, linea2, linea3, linea4)
    })
});
