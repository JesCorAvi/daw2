//no funciona

const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;

const opMenu = ["bosque", "posada", "tienda", "informacion"]

function limpiar(opt) {
    for (var x of opMenu) {
        if (x != opt) {
            document.getElementById(x).setAttribute('hidden', true)
        } else {
            document.getElementById(opt).removeAttribute('hidden')
        }
    }
}

const armas = {
    "Espada oxidada": 10,
    "Espada de soldado": 30,
};
const armaduras = {
    "Ropajes de aventurero": 10,
    "Ropajes reforzados": 30
};
//Esta constante sirve para modificar los parámetros del juego:
//Daño de los enemigos y protagonista
//Vida de los personajes
//Costes de los objetos
const conf = {
    "posada": 5,
    "monedas": "enemy.stat['fuerza'] / 2",
    "exp": "50 + enemy.stat['fuerza']",
    "daño": "getRandomInt(enemy.stat['fuerza'] / 3)",
    "cArma": " armas[obj] * 10",
    "cArmadura": "armaduras[obj] * 10"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function personaje(nombre, clase, arma, armadura, nivel) {
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    //esta propiedad recoge el equipo del objeto. Esto sirve para calcular las stats

    this.equip = {
        "arma": arma,
        "armadura": armadura,
        "monedas": 500,
        "pociones": 0
    };
    //esta propiedad recoge las stats del objeto
    this.stat = {
        "fuerza": armas[this.equip["arma"]] + (nivel * 5),
        "hp": 100 + (nivel * 10) + (armaduras[this.equip["armadura"]] * 2),
        "experiencia": 0
    };
    //este método regenera la stat HP al objeto
    this.curar = function () {
        this.stat["hp"] = 100 + (this.nivel * 10);
    }

    this.combate = function (enemy) {
        enemy.curar();
        document.getElementById("bosque").innerHTML =
            `
        Te encuentras frente a ${enemy.nombre}. ¿Que deseas hacer?<br><br>
        
        `
        while (true) {
            let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
            let dañoPers = this.stat["fuerza"] + (eval(conf["daño"]));

            enemy.stat["hp"] -= dañoPers;

            document.getElementById("bosque").innerHTML +=
                `
                ${this.nombre} ataca e inflinge 
                ${dañoPers} puntos de daño a 
                ${enemy.nombre}
                [HP:${enemy.stat["hp"]}].<br><br>
                `
            if (enemy.stat["hp"] <= 0) {
                var img = document.createElement("img");
                img.src = "img/victoria.png";

                var src = document.getElementById("bosque");
                src.appendChild(img);
                document.getElementById("bosque").innerHTML +=
                    `
                <br><strong>${this.nombre} ha ganado el combate</strong><br><br>
                `
                this.stat["experiencia"] += (eval(conf["exp"]))
                this.equip["monedas"] += (eval(conf["monedas"]))
                document.getElementById("bosque").innerHTML +=
                    `
                    <strong>${this.nombre} ha ganado 
                    ${(eval(conf["exp"]))} puntos de experiencia<br><br>
                    ${this.nombre} ha ganado 
                    ${(eval(conf["monedas"]))} monedas<br><br></strong>

                    `
                if (this.stat["experiencia"] >= 200) {
                    this.nivel += 1
                    this.stat["experiencia"] = 0;
                    var img = document.createElement("img");
                    img.src = "img/lvl.png";
    
                    var src = document.getElementById("bosque");
                    src.appendChild(img);
                    document.getElementById("bosque").innerHTML +=
                        `
                        <br>${this.nombre} ha subido a nivel ${this.nivel}<br><br>
                        `
                }
                break
            }
            this.stat["hp"] -= dañoEne;

            document.getElementById("bosque").innerHTML +=
                `
                ${enemy.nombre} ataca e inflinge 
                ${dañoEne} puntos de daño a 
                ${this.nombre}
                [HP:${this.stat["hp"]}]<br><br>
                `
            if (this.stat["hp"] <= 0) {
                document.getElementById("bosque").innerHTML += `<strong>${enemy.nombre} ha ganado el combate</strong> <br><br>`
                break
            }
        }
    }
    this.compraArma = function (obj) {
        if (eval(conf["cArma"]) <= this.equip["monedas"]) {
            this.equip["arma"] = obj
            this.equip["monedas"] -= eval(conf["cArma"])
            document.getElementById("tienda").innerHTML += `<br>Has comprado ${obj}`

        } else {
            document.getElementById("tienda").innerHTML += `<br>No tienes suficiente dinero`

        }
    }
    this.compraArmadura = function (obj) {
        if (eval(conf["cArmadura"]) <= this.equip["monedas"]) {
            this.equip["armadura"] = obj
            this.equip["monedas"] -= eval(conf["cArmadura"])
            document.getElementById("tienda").innerHTML += `<br>Has comprado ${obj}`
        } else {
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
        limpiar(opt)
        protagonista.combate(enemigoDebil)
    }
    else if (opt == "posada") {
        limpiar(opt)
        protagonista.curar();
        protagonista.equip["monedas"] -= conf["posada"];
        document.getElementById("posada").innerHTML = `Pagas ${conf["posada"]} monedas y recuperas fuerzas`
    }
    else if (opt == "tienda") {
        limpiar(opt)
        document.getElementById("monedas").innerHTML = `<strong>Tienes ${protagonista.equip["monedas"]} monedas.</strong><br>`
    }
    else if (opt == "informacion") {
        limpiar(opt)
        document.getElementById("nom").innerHTML = `Nombre: ${protagonista.nombre}`;
        document.getElementById("clase").innerHTML = `Clase: ${protagonista.clase}`
        document.getElementById("nivel").innerHTML = `Nivel: ${protagonista.nivel}`
        document.getElementById("arma").innerHTML = `Arma: ${protagonista.equip["arma"]}`
        document.getElementById("armadura").innerHTML = ` Armadura: ${protagonista.equip["armadura"]}`
        document.getElementById("moneda").innerHTML = `Monedas: ${protagonista.equip["monedas"]}`
        document.getElementById("pociones").innerHTML = `Pociones: ${protagonista.equip["pociones"]}`
    }


}