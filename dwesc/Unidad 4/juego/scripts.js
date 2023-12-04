const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;
const opMenu = ["bosque", "posada", "tienda", "informacion"]
// Esta función oculta los elementos que no sen necesarios tomandolos de opMenu.
function limpiar(opt) {
    for (var x of opMenu) {
        if (x != opt) {
            document.getElementById(x).setAttribute('hidden', true)
        } else {
            document.getElementById(opt).removeAttribute('hidden')
        }
    }
}
// Objeto que almacena las armas disponibles eb el juego.
const armas = {
    "Espada oxidada": 10,
    "Espada de soldado": 30,
    "Hacha de veterano": 50,
    "Espada legendaria": 100
};
// Objeto que almacena las armaduras disponibles eb el juego.

const armaduras = {
    "Ropajes de aventurero": 10,
    "Ropajes reforzados": 30,
    "Armadura de placas": 50,
    "Armadura legendaria": 100

};
// Esta constante sirve para modificar los parámetros del juego:
// Daño de los enemigos y protagonista.
// Vida de los personajes.
// Costes de los objetos.
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
    // esta propiedad recoge el equipo del objeto. Esto sirve para calcular las stats.
    this.equip = {
        "arma": arma,
        "armadura": armadura,
        "monedas": 100,
        "pociones": 0
    };
    // Esta propiedad recoge las stats del objeto.
    this.stat = {
        "fuerza": armas[this.equip["arma"]] + (nivel * 5),
        "hp": [100 + (nivel * 10) + (armaduras[this.equip["armadura"]] * 2), 100 + (nivel * 10) + (armaduras[this.equip["armadura"]] * 2)],
        "experiencia": 0,
        "magia":[100,100]
    };
    // Este método regenera la stat HP al objeto.
    this.curar = function () {
        this.stat["hp"][0] = this.stat["hp"][1];
    }
    // Este método calcula los combates. los argumentos que acepta son otros objetos personaje. OBSOLETO.

    this.combateAntiguo = function (enemy) {
        enemy.curar();
        document.getElementById("combates").innerHTML =
            `
        Te encuentras frente a ${enemy.nombre}. ¿Que deseas hacer?<br><br>
        
        `
        while (true) {
            let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
            let dañoPers = this.stat["fuerza"] + (eval(conf["daño"]));

            enemy.stat["hp"] -= dañoPers;

            document.getElementById("combates").innerHTML +=
                `
                ${this.nombre} ataca e inflinge 
                ${dañoPers} puntos de daño a 
                ${enemy.nombre}
                [HP:${enemy.stat["hp"]}].<br><br>
                `
            if (enemy.stat["hp"] <= 0) {
                var img = document.createElement("img");
                img.src = "img/victoria.png";

                var src = document.getElementById("combates");
                src.appendChild(img);
                document.getElementById("combates").innerHTML +=
                    `
                <br><strong>${this.nombre} ha ganado el combate</strong><br><br>
                `
                this.stat["experiencia"] += (eval(conf["exp"]))
                this.equip["monedas"] += (eval(conf["monedas"]))
                document.getElementById("combates").innerHTML +=
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
    
                    var src = document.getElementById("combates");
                    src.appendChild(img);
                    document.getElementById("combates").innerHTML +=
                        `
                        <br>${this.nombre} ha subido a nivel ${this.nivel}<br><br>
                        `
                }
                if (enemy.nombre == "Jefe bandido"){
                    document.write("<h1>Felicidades, has derrotado al infame bandido que asolaba estas tierras y serás recordado como un heroe</h1>")
                }
                break
            }
            this.stat["hp"][0] -= dañoEne;

            document.getElementById("combates").innerHTML +=
                `
                ${enemy.nombre} ataca e inflinge 
                ${dañoEne} puntos de daño a 
                ${this.nombre}
                [HP:${this.stat["hp"]}]<br><br>
                `
            if (this.stat["hp"] <= 0) {
                document.getElementById("combates").innerHTML += `<strong>${enemy.nombre} ha ganado el combate</strong> <br><br>`
                break
            }
        }
    }
    this.pintarinfo = function(enemy){

        document.getElementById("infoPr").removeAttribute('hidden');
        document.getElementById("log").removeAttribute('hidden');
        document.getElementById("infoEn").removeAttribute('hidden');
        document.getElementById("infoPr").innerHTML = 
        `
        <h1>Protagonista</h1>
        <strong>Nombre: ${this.nombre}</strong><br>
        Vida: ${this.stat["hp"][0]} / ${this.stat["hp"][1]}<br>
        Nivel: ${this.nivel}
        Magia: ${this.stat["magia"][0]}/${this.stat["magia"][1]}
        `;
        document.getElementById("infoEn").innerHTML = 
        `
        <h1>Enemigo</h1>
        <strong>Nombre: ${enemy.nombre}</strong> <br>
        Vida: ${enemy.stat["hp"][0]} / ${enemy.stat["hp"][1]}<br>
        Nivel: ${enemy.nivel}
        `;
    }
    // Este método calcula los combates. los argumentos que acepta son otros objetos personaje. NUEVO MÉTODO.
    this.combate = function() {
        let enemy = eval(document.querySelector('select[name="enemigo"]').value)
        let atk = document.querySelector('select[name="ataqueTipo"]').value

        if (atk == "atkF"){
        let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
        let dañoPers = this.stat["fuerza"] + (eval(conf["daño"]));
        enemy.stat["hp"][0] -= dañoPers;
        document.getElementById("log").innerHTML =
            `
            ${this.nombre} ataca e inflinge 
            ${dañoPers} puntos de daño a 
            ${enemy.nombre}
            [HP:${enemy.stat["hp"][0]}].<br><br>
            `
        this.stat["hp"][0] -= dañoEne;
        document.getElementById("log").innerHTML +=
            `
            ${enemy.nombre} ataca e inflinge 
            ${dañoEne} puntos de daño a 
            ${this.nombre}
            [HP:${this.stat["hp"][0]}]<br><br>
            `
        }else{
            let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
            let dañoPers = (this.stat["fuerza"] * 3) + (eval(conf["daño"]));
            enemy.stat["hp"][0] -= dañoPers;
            document.getElementById("log").innerHTML =
                `
                ${this.nombre} ataca con su magia e inflinge 
                ${dañoPers} puntos de daño a 
                ${enemy.nombre}
                [HP:${enemy.stat["hp"][0]}].<br><br>
                `
            this.stat["hp"][0] -= dañoEne;
            document.getElementById("log").innerHTML +=
                `
                ${enemy.nombre} ataca e inflinge 
                ${dañoEne} puntos de daño a 
                ${this.nombre}
                [HP:${this.stat["hp"][0]}]<br><br>
                `
        }
        this.pintarinfo(enemy)
    }
    // Con este método los objetos presonaje pueden comprar armas.
    this.compraArma = function (obj) {
        if (eval(conf["cArma"]) <= this.equip["monedas"]) {
            this.equip["arma"] = obj
            this.equip["monedas"] -= eval(conf["cArma"])
            document.getElementById("resultado").innerHTML = `<br>Has comprado ${obj}`

        } else if  (eval(conf["cArma"]) > this.equip["monedas"]){
            document.getElementById("resultado").innerHTML = `<br>No tienes suficiente dinero`

        }
    }
    //  Con este método los objetos presonaje pueden comprar armaduras.
    this.compraArmadura = function (obj) {
        if (eval(conf["cArmadura"]) <= this.equip["monedas"]) {
            this.equip["armadura"] = obj
            this.equip["monedas"] -= eval(conf["cArmadura"])
            document.getElementById("resultado").innerHTML = `<br>Has comprado ${obj}`
        } else if  (eval(conf["cArmadura"]) > this.equip["monedas"]){
            document.getElementById("resultado").innerHTML = `<br>No tienes suficiente dinero`
        }
    }
}
// Esta función oculta el main inicio, muestra el main principal 
// y crea el objeto que usaremos como personaje principal.
function comenzar(){
    protagonista = new personaje(
        nombre,
        clase,
        "Espada oxidada",
        "Ropajes de aventurero",
        1
    );    
    document.getElementById('inicio').setAttribute('hidden', true);
    document.getElementById('principal').removeAttribute('hidden');
}

// A continuación, definimos los diferentes enemigos del juego. Son tipo personaje.

enemigoDebil = new personaje(
    "Lobo",
    "guerrero",
    "Espada oxidada",
    "Ropajes de aventurero",
    1
);
enemigoMedio = new personaje(
    "Bandido",
    "guerrero",
    "Espada de soldado",
    "Ropajes reforzados",
    5
);
enemigoFuerte = new personaje(
    "Jefe bandido",
    "guerrero",
    "Espada legendaria",
    "Armadura legendaria",
    10
);

// Esta función maneja las diferentes opciones del menú.

function menu(opt) {
    if (opt == "bosque") {
        document.getElementById("infoPr").innerHTML =""
        document.getElementById("infoEn").innerHTML =""
        document.getElementById("log").innerHTML =""
        limpiar(opt)
    }
    else if (opt == "posada") {
        limpiar(opt)
        protagonista.curar();
        protagonista.equip["monedas"] -= conf["posada"];
        document.getElementById("posada").innerHTML = `Pagas ${conf["posada"]} monedas y recuperas fuerzas`
    }
    else if (opt == "tienda") {
        document.getElementById("resultado").innerHTML = "";
        limpiar(opt)
        document.getElementById("monedas").innerHTML = `<strong>Tienes ${protagonista.equip["monedas"]} monedas.</strong><br>`
        var armasL  = "";
          for(var obj in armas){
            armasL += 
            `
            ${obj}. Precio:  ${eval(conf["cArma"])} monedas. 
            <button onclick="protagonista.compraArma('${obj}')">Comprar</button><br>
            `
        }
        document.getElementById("armasP").innerHTML  = armasL
        var armadurasL  = "";
          for(var obj in armaduras){
            armadurasL += 
            `
            ${obj}. Precio:  ${eval(conf["cArmadura"])} monedas. 
            <button onclick="protagonista.compraArmadura('${obj}')">Comprar</button><br>
            `
        }
        document.getElementById("armadurasP").innerHTML  = armadurasL
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
