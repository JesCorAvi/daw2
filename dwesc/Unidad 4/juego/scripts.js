const opMenu = ["bosque", "posada", "tienda", "informacion", "tablon"]

// Esta función oculta los elementos que no sean necesarios tomandolos de opMenu.
function limpiar(opt) {
    for (var x of opMenu) {
        if (x != opt) {
            document.getElementById(x).setAttribute('hidden', true);
        } else {
            document.getElementById(opt).removeAttribute('hidden');
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
    //Calculo de fuerza
    "fuerza": "armas[this.equip['arma']] + (this.nivel * 5)",
    //Calculo de vida
    "hp": "100 + (this.nivel * 8) + (armaduras[this.equip['armadura']] * 10)",
    //Coste posada
    "posada": 5,
    //monedas recibida
    "monedas": "Math.trunc(enemy.stat['fuerza'] / 2)",
    //Experiencia recibida
    "exp": "Math.trunc(50 + enemy.stat['fuerza'])",
    //Aleatoreidad de los daños
    "daño": "Math.trunc(getRandomInt(enemy.stat['fuerza'] / 3))",
    //coste de las armas
    "cArma": "armas[obj] * 10",
    //coste de las armaduras
    "cArmadura": "armaduras[obj] * 10"
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function personaje(nombre, clase, arma, armadura, nivel) {
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    // esta propiedad recoge el equipo del objeto. Esto sirve para calcular las stats.
    this.equip = {
        "arma": arma,
        "armadura": armadura,
        "monedas": 100,
        "pociones": 5
    };
    // Esta propiedad recoge las stats del objeto.
    this.stat = {
        "fuerza": eval(conf["fuerza"]),
        "hp": [eval(conf["hp"]), eval(conf["hp"])],
        "experiencia": 0,
        "magia": [100, 100]
    };
    //Esta propiedad lleva la cuenta de los enemigos derrotados
    this.bajas = { "Lobo": 0, "Bandido": 0 };
    // Este método regenera la stat HP al objeto.
    this.curar = function () {
        this.stat["hp"][0] = this.stat["hp"][1];
    };
    //Este método maneja que hacer si se pierde un combate.
    this.combateDerrota = function () {
        document.write("<style>body{\
                            color: white; \
                            background-image: url('img/gameOver.jpg'); \
                            background-size: cover; \
                            background-repeat: no-repeat; \
                            background-position: center; \
                            text-align:center;}</style>");
        document.write("<h1>Te han derrotado</h1>");
        document.write("<h1>FIN DEL JUEGO</h1>");
    };
     //Este método maneja que hacer si se gana un combate. Gestiona la experiencia, las recompensas y la subida de nivel.
    this.combateVictoria = function (enemy) {
        this.bajas[enemy["nombre"]] += 1
        var img = document.createElement("img");
        img.src = "img/victoria.png";
        var src = document.getElementById("log");
        src.appendChild(img);
        document.getElementById("log").innerHTML +=
            `
        <br><strong>${this.nombre} ha ganado el combate</strong><br><br>
        `;
        //Esta parte gestiona la recompensa de experiecia y monedas
        this.stat["experiencia"] += (eval(conf["exp"]));
        this.equip["monedas"] += (eval(conf["monedas"]));
        document.getElementById("log").innerHTML +=
            `
            <strong>${this.nombre} ha ganado 
            ${(eval(conf["exp"]))} puntos de experiencia<br><br>
            ${this.nombre} ha ganado 
            ${(eval(conf["monedas"]))} monedas<br><br></strong>

            `;
        //Esta parte gestiona la subida de nivel
        if (this.stat["experiencia"] >= 200) {
            this.nivel += 1;
            this.stat["experiencia"] = 0;
            var img = document.createElement("img");
            img.src = "img/lvl.png";

            var src = document.getElementById("log");
            src.appendChild(img);
            document.getElementById("log").innerHTML +=
                `
                <br>${this.nombre} ha subido a nivel ${this.nivel}<br><br>
                `;
            this.stat["fuerza"] = eval(conf["fuerza"]);
            this.stat["hp"][1] = eval(conf["hp"]);
        };
        //Si esto es true se gana la partida y acaba el juego
        if (enemy.nombre == "Jefe bandido") { 
            document.write("<style>body{\
                                color: white; \
                                background-image: url('img/fin.jpg');\
                                background-size: cover; \
                                background-repeat: no-repeat;\
                                background-position: center; \
                                text-align:center;}</style>");
            document.write("<h1>Felicidades, has derrotado al infame bandido que \
                            asolaba estas tierras y serás recordado como un heroe</h1>");
        };
    };
    //este método dibuja el html del combate.
    this.pintarinfo = function (enemy) {
        document.getElementById("infoPr").removeAttribute('hidden');
        document.getElementById("log").removeAttribute('hidden');
        document.getElementById("infoEn").removeAttribute('hidden');
        document.getElementById("infoPr").innerHTML =
            `
        <h1>Protagonista</h1>
        <strong>Nombre: ${this.nombre}</strong><br>
        Vida: ${this.stat["hp"][0]} / ${this.stat["hp"][1]}<br>
        Nivel: ${this.nivel}<br>
        Magia: ${this.stat["magia"][0]}/${this.stat["magia"][1]}<br>
        `;
        //esto inserta la imagen del protagonista
        var img = document.createElement("img");
        img.src = "img/heroe.png";

        var src = document.getElementById("infoPr");
        src.appendChild(img);
        document.getElementById("infoEn").innerHTML =
            `
        <h1>Enemigo</h1>
        <strong>Nombre: ${enemy.nombre}</strong> <br>
        Vida: ${enemy.stat["hp"][0]} / ${enemy.stat["hp"][1]}<br>
        Nivel: ${enemy.nivel}<br>
        `;

        //esto inserta la imagen del enemigo. Cambia dependiendo del enemigo
        var img = document.createElement("img");
        if (enemy.nombre == "Lobo") {
            img.src = "img/lobo.png";
        } else if (enemy.nombre == "Bandido") {
            img.src = "img/enemigo.png";
        } else {
            img.src = "img/boss1.png";
        };
        var src = document.getElementById("infoEn");
        src.appendChild(img);
    }
    
    // Este método calcula los combates. Los argumentos que acepta son otros objetos personaje.
    this.combate = function () {
        var boton = true;
        document.getElementById("log").innerHTML = "";
        //Aqui se toma el nombre del enemigo elegido en el select del html y el tipo de ataque
        let enemy = eval(document.querySelector('select[name="enemigo"]').value);
        let atk = document.querySelector('select[name="ataqueTipo"]').value;
        let dañoEne = enemy.stat["fuerza"] + (eval(conf["daño"]));
        if (atk == "atkF") {
            if (this.clase == "Guerrero"){
                var dañoPers = this.stat["fuerza"] + (eval(conf["daño"]));
            }else if (this.clase == "Mago"){
                var dañoPers =  Math.trunc((this.stat["fuerza"] + (eval(conf["daño"]))) / 6);
            };
            var armaUsada = this.equip["arma"];
        } else if (atk == "atkM") {
            if (this.stat["magia"][0] > 0) {
                if (this.clase == "Guerrero"){
                    var dañoPers = (this.stat["fuerza"] * 2) + (eval(conf["daño"]));
                    var armaUsada = "Magia";
                    this.stat["magia"][0] -= 25;
                }else if (this.clase == "Mago"){
                    var dañoPers = Math.trunc((this.stat["fuerza"] * 2 + (eval(conf["daño"]))) * 3);
                    var armaUsada = "Magia";
                    this.stat["magia"][0] -= 20;
                }

            } else {
                var dañoPers = 0;
                var armaUsada = "Magia";
            }
        }
        enemy.stat["hp"][0] -= dañoPers;
        document.getElementById("log").innerHTML =
            `
            ${this.nombre} ataca e inflinge 
            ${dañoPers} puntos de daño a 
            ${enemy.nombre} con su ${armaUsada}<br>
            `;

        //Si el enemigo es derrotado, se apaga el botón y el enemigo deja de atacar.
        if (enemy.stat["hp"][0] <= 0) {
            this.combateVictoria(enemy);
            enemy.curar();
            boton = false;
        }
        if (boton) {
            this.stat["hp"][0] -= dañoEne;
            document.getElementById("log").innerHTML +=
                `
                ${enemy.nombre} ataca e inflinge 
                ${dañoEne} puntos de daño a 
                ${this.nombre}
                `;
            if (this.stat["hp"][0] <= 0) {
                this.combateDerrota(enemy)
            };
        }
        this.pintarinfo(enemy);
    }
    // Con este método los objetos presonaje pueden comprar armas.
    this.compraArma = function (obj) {
        if (eval(conf["cArma"]) <= this.equip["monedas"]) {
            this.equip["arma"] = obj;
            this.equip["monedas"] -= eval(conf["cArma"]);
            document.getElementById("resultado").innerHTML = `<br>Has comprado ${obj}`;
            this.stat["fuerza"] = eval(conf["fuerza"]);


        } else if (eval(conf["cArma"]) > this.equip["monedas"]) {
            document.getElementById("resultado").innerHTML = `<br>No tienes suficiente dinero`;

        };
    };
    //  Con este método los objetos presonaje pueden comprar armaduras.
    this.compraArmadura = function (obj) {
        if (eval(conf["cArmadura"]) <= this.equip["monedas"]) {
            this.equip["armadura"] = obj;
            this.equip["monedas"] -= eval(conf["cArmadura"]);
            document.getElementById("resultado").innerHTML = `<br>Has comprado ${obj}`;
            this.stat["hp"][1] = eval(conf["hp"]);
        } else if (eval(conf["cArmadura"]) > this.equip["monedas"]) {
            document.getElementById("resultado").innerHTML = `<br>No tienes suficiente dinero`;
        };
    }

    //  Con este método los objetos presonaje pueden comprar pociones.
    this.compraPocion = function () {
        if (15 <= this.equip["monedas"]) {
            this.equip["pociones"] += 1;
            this.equip["monedas"] -= 15;
            document.getElementById("resultado").innerHTML = `<br>Has comprado una poción`;
        } else {
            document.getElementById("resultado").innerHTML = `<br>No tienes suficiente dinero`;
        };
    };
    //  Con este método los objetos presonaje pueden tomar las pociones en combate. También dibuja en el html las pociones que le quedan. 
    this.tomarPocion = function () {
        if (this.equip["pociones"] > 0) {
            this.equip["pociones"] -= 1;
            this.stat["magia"][0] = this.stat["magia"][1];
            document.getElementById("nPociones").innerHTML = `Tienes ${protagonista.equip["pociones"]} pociones`;
            this.pintarinfo();
        }
    }

    //  Con este método se manejan las misiones. Los enemigos que han sido ya derrotados y si ya estan competas o no.. 
    this.mision = function (opt) {
        //Mision 1.
        if (opt == "1") {
            if (this.bajas["Lobo"] < 7) {
                document.getElementById("mision1").innerHTML =
                    `Aun tienes que acabar con ${7 - this.bajas["Lobo"]} lobos mas`;
            } else {
                protagonista.equip["monedas"] += 100;
                document.getElementById("mision1").innerHTML =
                    "MISIÓN COMPLETADA: Has recibido 100 monedas";
                var misiones = document.querySelectorAll('.m1');
                misiones.forEach(x => { x.remove(); });
            }

        //Mision 2.
        }else if (opt == "2") {
            if (this.bajas["Lobo"] < 20) {
                document.getElementById("mision2").innerHTML =
                    `Aun tienes que acabar con ${20 - this.bajas["Lobo"]} lobos mas`;
            } else {
                protagonista.equip["monedas"] += 300;
                document.getElementById("mision2").innerHTML =
                    "MISIÓN COMPLETADA: Has recibido 300 monedas";
                var misiones = document.querySelectorAll('.m2');
                misiones.forEach(x => { x.remove(); })
            };

        //Mision 3.
        }else if (opt == "3") {
            if (this.bajas["Bandido"] < 10) {
                document.getElementById("mision3").innerHTML =
                    `Aun tienes que acabar con ${10 - this.bajas["Bandido"]} bandidos mas`;
            } else {
                protagonista.equip["monedas"] += 500;
                document.getElementById("mision3").innerHTML =
                    "MISIÓN COMPLETADA: Has recibido 500 monedas";
                var misiones = document.querySelectorAll('.m3');
                misiones.forEach(x => { x.remove();});
            };
        };
    };
}
// Esta función oculta el main inicio, muestra el main principal 
// y crea el objeto que usaremos como personaje principal.
function comenzar() {
    let nombre = document.getElementById('nombre').value;
    let clase = document.querySelector('select[name="clase"]').value;
    protagonista = new personaje(
        nombre,
        clase,
        "Espada oxidada",
        "Ropajes de aventurero",
        1
    );
    document.getElementById('inicio').setAttribute('hidden', true);
    document.getElementById('principal').removeAttribute('hidden');
};

// A continuación, definimos los diferentes enemigos del juego. Son tipo personaje.

enemigoDebil = new personaje(
    "Lobo",
    "guerrero",
    "Espada oxidada",
    "Ropajes de aventurero",
    2
);
enemigoMedio = new personaje(
    "Bandido",
    "guerrero",
    "Espada de soldado",
    "Ropajes reforzados",
    10
);
enemigoFuerte = new personaje(
    "Jefe bandido",
    "guerrero",
    "Espada legendaria",
    "Armadura legendaria",
    30
);

// Esta función maneja las diferentes opciones del menú.

function menu(opt) {
    //Seccion Bosque
    if (opt == "bosque") {
        enemigoDebil.curar();
        enemigoMedio.curar();
        enemigoFuerte.curar();
        document.getElementById("nPociones").innerHTML = `Tienes ${protagonista.equip["pociones"]} pociones`;
        document.getElementById("infoPr").innerHTML = ""
        document.getElementById("infoEn").innerHTML = ""
        document.getElementById("log").innerHTML = ""
        limpiar(opt);
    }

    //Seccion Posada
    else if (opt == "posada") {
        limpiar(opt);
        protagonista.curar();
        protagonista.equip["monedas"] -= conf["posada"];
        document.getElementById("posada").innerHTML = `Pagas ${conf["posada"]} monedas y recuperas fuerzas`;
    }

    //Seccion Tablón de anuncips
    else if (opt == "tablon") {
        limpiar(opt);
        document.getElementById("mision1").innerHTML = "";
        document.getElementById("mision2").innerHTML = "";
        document.getElementById("mision3").innerHTML = "";

    }

    //Seccion Tienda
    else if (opt == "tienda") {
        document.getElementById("resultado").innerHTML = "";
        limpiar(opt);
        document.getElementById("monedas").innerHTML = `<strong>Tienes ${protagonista.equip["monedas"]} monedas.</strong><br>`;
        var armasL = "";
        for (var obj in armas) {
            armasL +=
                `
            ${obj}. Precio:  ${eval(conf["cArma"])} monedas. 
            <button onclick="protagonista.compraArma('${obj}')">Comprar</button><br>
            `;
        }
        document.getElementById("armasP").innerHTML = armasL;
        var armadurasL = "";
        for (var obj in armaduras) {
            armadurasL +=
                `
            ${obj}. Precio:  ${eval(conf["cArmadura"])} monedas. 
            <button onclick="protagonista.compraArmadura('${obj}')">Comprar</button><br>
            `;
        }
        document.getElementById("armadurasP").innerHTML = armadurasL;
        document.getElementById("pocionesP").innerHTML =
            `Comprar poción: Precio 15 monedas
        <button onclick="protagonista.compraPocion()">Comprar</button><br>
        `;

    }

    //Seccion Información
    else if (opt == "informacion") {
        limpiar(opt);
        document.getElementById("nom").innerHTML = `<strong>Nombre:</strong> ${protagonista.nombre}`;
        document.getElementById("clase").innerHTML = `<strong>Clase:</strong> ${protagonista.clase}`
        document.getElementById("nivel").innerHTML = `<strong>Nivel:</strong> ${protagonista.nivel}`
        document.getElementById("arma").innerHTML = `<strong>Arma:</strong> ${protagonista.equip["arma"]}`
        document.getElementById("armadura").innerHTML = `<strong>Armadura:</strong> ${protagonista.equip["armadura"]}`
        document.getElementById("moneda").innerHTML = `<strong>Monedas:</strong> ${protagonista.equip["monedas"]}`
        document.getElementById("pociones").innerHTML = `<strong>Pociones:</strong> ${protagonista.equip["pociones"]}`
    };
};