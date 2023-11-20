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
function crearPJ(nombre, clase, arma, armadura, nivel){
    this.nivel = nivel;
    this.nombre = nombre;
    this.clase = clase;
    this.equipamiento = {"arma":arma, "armadura":armadura, "monedas":500, "pociones":0};
    this.estadisticas = {"fuerza":armas[arma] + (nivel * 5), "hp":50 + (nivel * 10), "experiencia":0 };
};

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

protagonista = new crearPJ( nombre, 
                            clase, 
                            "Bandido Debil", 
                            "Ropajes de aventurero", 
                            1
);

bandidoDebil = new crearPJ( "Bandido Debil", 
                            "guerrero", 
                            "Espada oxidada", 
                            "Ropajes de aventurero", 
                            1
);
bandidoMedio = new crearPJ( "Bandido Medio", 
                            "guerrero", 
                            "Espada oxidada", 
                            "Ropajes de aventurero", 
                            3
);
bandidoFuerte = new crearPJ("Bandido Fuerte", 
                            "guerrero", 
                            "Espada de soldado", 
                            "Ropajes reforzados", 
                            3
);
