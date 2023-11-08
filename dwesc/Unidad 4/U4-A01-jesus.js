var objeto = {"c":1, "b":2, "a":3}
function ordenarPorIndice(tabla) {
    keys = Object.keys(tabla).sort()
    var listaOr = {}
    for(var x of keys){
        listaOr[x] = tabla[x];
    }
    return listaOr
}
ordenarPorIndice(objeto)