var valores = "";
var n1 = "";
var n2 = "";
var ope = "";
var solucion = "";
function constructor(){
    var boton = true;
    for (var x of valores){
        if (boton){
            if !isNaN(x){
                n1 = n1.concat(x)
            }else{
                ope = x;
                boton = false;
            }
        }else{
           n2 = n2.concat(x)
        }
    }
}
function calculadora(){
    constructor();
    if (n2 != "" ){
        switch (ope){
            case "+":
                solucion = parseInt(n1) + parseInt(n2)
                break
            case "-":
                solucion = parseInt(n1) - parseInt(n2);
                break
            case "*":
                solucion = parseInt(n1) * parseInt(n2);
                break
            case "/":
                solucion = parseInt(n1) / parseInt(n2);
                break;
        }
    }else{
        switch (ope){
            case "√":
                solucion = Math.sqrt(parseInt(n1));
                break
            case "l":
                solucion = Math.log(parseInt(n1));
                break
            case "π":
                solucion = Math.PI;
                break
            case "?":
                solucion = parseInt(n1) ** 3;
                break
            case "s":
                solucion = Math.sin(parseInt(n1));
                break
            case "c":
                solucion = Math.cos(parseInt(n1));
                break
            case "t":
                solucion = Math.tan(parseInt(n1));
                break
            case "¿":
                solucion = parseInt(n1) ** 2;
                break
        }
    }
}
function printres(){
    document.getElementById('operacion').innerHTML = valores;
    document.getElementById('solucion').innerHTML = solucion;


}