var valores = "";
var repres = "";
var solucion = "";
function calculadora(){
    solucion = eval(valores);
    if (solucion == Infinity || isNaN(solucion) || solucion == -Infinity){
        solucion = "MathError";
    }
}
function printres(){
    document.getElementById('operacion').innerHTML = repres;
    document.getElementById('solucion').innerHTML = solucion;
}