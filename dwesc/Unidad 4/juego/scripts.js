const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;

const armas = {
    "Espada oxidada": 10,
    "Espada de soldado": 30,
};
const armaduras = {
    "Ropajes de aventurero": 10,
    "Ropajes reforzados": 30
};
const conf = {
    "posada":5,
    "monedas":"enemy.stat['fuerza'] / 2",
    "exp":"50 + enemy.stat['fuerza']",
    "daño":"getRandomInt(enemy.stat['fuerza'] / 3)"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function personaje(nombre, clase, arma, armadura, nivel) {
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    this.equip = { 
        "arma": arma, 
        "armadura": armadura, 
        "monedas": 500, 
        "pociones": 0 
    };
    this.stat = { 
        "fuerza": armas[this.equip["arma"]] + (nivel * 5), 
        "hp": 100 + (nivel * 10) + (armaduras[this.equip["armadura"]] * 2), 
        "experiencia": 0 
    };
    this.curar = function () {
        this.stat["hp"] = 100 + (this.nivel * 10);
    }
    this.combate = function (enemy) {
        enemy.curar();
        document.getElementById("opt").innerHTML =
        `
        Te encuentras frente a ${enemy.nombre}. ¿Que deseas hacer?<br><br>
        
        `
        while (true) {
            let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
            let dañoPers = this.stat["fuerza"] + (eval(conf["daño"]));

            enemy.stat["hp"] -= dañoPers;

            document.getElementById("opt").innerHTML +=
                `
                ${this.nombre} ataca e inflinge 
                ${dañoPers} puntos de daño a 
                ${enemy.nombre}
                [HP:${enemy.stat["hp"]}].<br><br>
                `
            if (enemy.stat["hp"] <= 0) {
                document.getElementById("opt").innerHTML += `${this.nombre} ha ganado el combate<br><br>`
                this.stat["experiencia"] += (eval(conf["exp"]))
                this.equip["monedas"] += (eval(conf["monedas"]))
                document.getElementById("opt").innerHTML +=
                    `
                    ${this.nombre} ha ganado 
                    ${(eval(conf["exp"]))} puntos de experiencia<br><br>
                    ${this.nombre} ha ganado 
                    ${(eval(conf["monedas"]))} monedas<br><br>

                    `
                if (this.stat["experiencia"] >= 200) {
                    this.nivel += 1
                    this.stat["experiencia"] = 0;
                    document.getElementById("opt").innerHTML +=
                        `
                        ${this.nombre} ha subido a nivel ${this.nivel}<br><br>
                        `
                }
                break
            }
            this.stat["hp"] -= dañoEne;
            
            document.getElementById("opt").innerHTML +=
                `
                ${enemy.nombre} ataca e inflinge 
                ${dañoEne} puntos de daño a 
                ${this.nombre}
                [HP:${this.stat["hp"]}]<br><br>
                `
            if (this.stat["hp"] <= 0){
                document.getElementById("opt").innerHTML += `${enemy.nombre} ha ganado el combate <br><br>`
                break
            }
        }
    }
    this.compraArma = function(obj){
        if (armas[obj] * 10 <= this.equip["monedas"]){
            this.equip["arma"] = obj
            this.equip["monedas"] -= armas[obj] * 10
            document.getElementById("tienda").innerHTML += `<br>Has comprado ${obj}`

        }else{
            document.getElementById("tienda").innerHTML += `<br>No tienes suficiente dinero`

        }
    }
    this.compraArmadura = function(obj){
        if (armaduras[obj] * 10 <= this.equip["monedas"]){
            this.equip["armadura"] = obj
            this.equip["monedas"] -= armaduras[obj] * 10
            document.getElementById("tienda").innerHTML += `<br>Has comprado ${obj}`
        }else{
            document.getElementById("tienda").innerHTML += `<br>No tienes suficiente dinero`
        }
    }
}
function mostrarMain(mainId) {
    var inicio = document.getElementById('inicio');
    var principal = document.getElementById('principal');

    if (mainId === 'inicio') {
        principal.setAttribute('hidden', true);
        inicio.removeAttribute('hidden');
    } else {
        principal.removeAttribute('hidden');
        inicio.setAttribute('hidden', true);
    }
};


protagonista = new personaje(
    nombre,
    clase,
    "Espada oxidada",
    "Ropajes de aventurero",
    1
);

enemigoDebil = new personaje(
    "Bandido Debil",
    "guerrero",
    "Espada oxidada",
    "Ropajes de aventurero",
    1
);
enemigoMedio = new personaje(
    "Bandido Medio",
    "guerrero",
    "Espada oxidada",
    "Ropajes de aventurero",
    3
);
enemigoFuerte = new personaje(
    "Bandido Fuerte",
    "guerrero",
    "Espada de soldado",
    "Ropajes reforzados",
    3
);

function menu(opt) {
    if (opt == "bosque") {
        protagonista.combate(enemigoDebil)
    }
    else if (opt == "posada") {
        protagonista.curar();
        protagonista.equip["monedas"] -= conf["posada"];
        document.getElementById("opt").innerHTML = `Pagas ${conf["posada"]} monedas y recuperas fuerzas`
    }
    else if (opt == "tienda") {
            document.getElementById("opt").innerHTML = 
            `
            Tienes ${protagonista.equip["monedas"]} monedas.<br>
            `
            document.getElementById('tienda').removeAttribute('hidden');
    }
    else if (opt == "informacion") {    
        document.getElementById('informacion').removeAttribute('hidden');
        document.getElementById("nom").innerHTML = `Nombre: ${protagonista.nombre}`;
        document.getElementById("clase").innerHTML = `Clase: ${protagonista.clase}`
        document.getElementById("nivel").innerHTML = `Nivel: ${protagonista.nivel}`
        document.getElementById("arma").innerHTML = `Arma: ${protagonista.equip["arma"]}`
        document.getElementById("armadura").innerHTML = ` Armadura: ${protagonista.equip["armadura"]}`
        document.getElementById("monedas").innerHTML = `Monedas: ${protagonista.equip["monedas"]}`
        document.getElementById("pociones").innerHTML = `Pociones: ${protagonista.equip["pociones"]}`


}
    

}