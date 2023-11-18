const nombre = document.getElementById('nombre').value;
const clase = document.querySelector('select[name="clase"]').value;
function crearPJ(nombre, clase){
    this.nivel = 1;
    this.nombre = nombre;
    this.clase = clase;
    this.equipamiento = {"proteccion":"Mediocre", "arma":"Mediocre","monedas":500, "pociones":0}
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
}

aventurero = new crearPJ(nombre, clase)

