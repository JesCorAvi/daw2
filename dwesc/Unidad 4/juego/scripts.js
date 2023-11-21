const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;

const armas = {
        "Espada oxidada": 10, 
        "Bastón de iniciado":10,
        "Espada de soldado":30,
        "Libro de hechizos":30
};
const armaduras = {
        "Ropajes de aventurero": 10, 
        "Ropajes reforzados":30
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function personaje(nombre, clase, arma, armadura, nivel){
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    this.equip = {"arma":arma, "armadura":armadura, "monedas":500, "pociones":0};
    this.stat = {"fuerza":armas[arma] + (nivel * 5), "hp":100 + (nivel * 10), "experiencia":0 };
    this.curar = function(){
        this.stat["hp"] = 100 + (nivel * 10);
    }
    this.combate = function(enemy){
        while (this.stat["hp"] > 0|| enemy.stat["hp"] > 0){
            let dañoEne = (enemy.stat["fuerza"] + getRandomInt(enemy.stat["fuerza"] / 1));
            let dañoPers = (this.stat["fuerza"] + getRandomInt(this.stat["fuerza"] / 1));

            this.stat["hp"] -= dañoEne
            console.log(
                `
                ${this.nombre} 
                ataca e inflinge ${dañoEne} puntos de daño a 
                ${enemy.nombre}
                `
            )
            if (enemy.stat["hp"] <= 0){
                console.log(`${this.nombre} ha ganado el combate`)
                this.stat.experiencia += (50 + enemy.stat["fuerza"])
                console.log(
                    `
                    ${this.nombre} ha ganado ${(50 + enemy.stat["fuerza"])} puntos de experiencia
                    `
                )
                if (this.stat.experiencia >= 200){
                    this.nivel += 1
                    this.stat.experiencia = 0;
                    console.log(
                        `
                        ${this.nombre} ha subido a nivel ${this.nivel}
                        `
                    )
                }
                break
            }
            enemy.stat["hp"] -= dañoPers
                console.log(
                `
                ${enemy.nombre} 
                ataca e inflinge ${dañoPers} puntos de daño a 
                ${this.nombre}
                `)
            if (this.stat["hp"] <= 0){
                console.log(`${enemy.nombre} ha ganado el combate`)
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

protagonista = new personaje("Protagonista", 
                            "Guerrero", 
                            "Espada oxidada", 
                            "Ropajes de aventurero", 
                            3
);

enemigoDebil = new personaje("Bandido Debil", 
                            "guerrero", 
                            "Espada oxidada", 
                            "Ropajes de aventurero", 
                            1
);
enemigoMedio = new personaje("Bandido Medio", 
                            "guerrero", 
                            "Espada oxidada", 
                            "Ropajes de aventurero", 
                            3
);
enemigoFuerte = new personaje("Bandido Fuerte", 
                            "guerrero", 
                            "Espada de soldado", 
                            "Ropajes reforzados", 
                            3
);
protagonista.combate(enemigoDebil)