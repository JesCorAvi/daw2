const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;

const armas = {
    "Espada oxidada": 10,
    "Bastón de iniciado": 10,
    "Espada de soldado": 30,
    "Libro de hechizos": 30
};
const armaduras = {
    "Ropajes de aventurero": 10,
    "Ropajes reforzados": 30
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function personaje(nombre, clase, arma, armadura, nivel) {
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    this.equip = { "arma": arma, "armadura": armadura, "monedas": 500, "pociones": 0 };
    this.stat = { "fuerza": armas[arma] + (nivel * 5), "hp": 100 + (nivel * 10), "experiencia": 0 };
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
            let dañoEne = (enemy.stat["fuerza"] + getRandomInt(enemy.stat["fuerza"] / 3));
            let dañoPers = (this.stat["fuerza"] + getRandomInt(this.stat["fuerza"] / 3));

            enemy.stat["hp"] -= dañoPers;

            document.getElementById("opt").innerHTML +=
                `
                ${this.nombre} ataca e inflinge ${dañoPers} puntos de daño a ${enemy.nombre}[HP:${enemy.stat["hp"]}].<br><br>
                `
            if (enemy.stat["hp"] <= 0) {
                document.getElementById("opt").innerHTML += `${this.nombre} ha ganado el combate<br><br>`
                this.stat.experiencia += (50 + enemy.stat["fuerza"])
                this.equip["monedas"] += (enemy.stat["fuerza"] / 5)
                document.getElementById("opt").innerHTML +=
                    `
                    ${this.nombre} ha ganado ${(50 + enemy.stat["fuerza"])} puntos de experiencia<br><br>
                    ${this.nombre} ha ganado ${(enemy.stat["fuerza"] / 2)} monedas<br><br>

                    `
                if (this.stat.experiencia >= 200) {
                    this.nivel += 1
                    this.stat.experiencia = 0;
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
                ${enemy.nombre} ataca e inflinge ${dañoEne} puntos de daño a ${this.nombre}[HP:${this.stat["hp"]}]<br><br>
                `
            if (this.stat["hp"] <= 0){
                document.getElementById("opt").innerHTML += `${enemy.nombre} ha ganado el combate <br><br>`
                break
            }
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
        protagonista.equip["monedas"] -= 5;
        document.getElementById("opt").innerHTML = "Pagas 20 monedas y recuperas fuerzas"
    }
    else if (opt == "tienda") {
        document.getElementById("opt").innerHTML = `Tienes ${protagonista.equip["monedas"]} monedas.<br>` 

    }
    

}