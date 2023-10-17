var valores = "";
var solucion = "";
valoresA = valores.split
function calculadora(n1, ope, n2 = null){
    if (n2 != null){
        switch (ope){
            case "+":
                solucion = n1 + n2;
                break
            case "-":
                solucion = n1 - n2;
                break
            case "*":
                dsolucion = n1 * n2;
                break
            case "/":
                solucion = n1 / n2;
                break;
        }
    }else{
        switch (ope){
            case "√":
                solucion = Math.sqrt(n1);
                break
            case "log":
                solucion = Math.log(n1);
                break
            case "π":
                solucion = n1 * Math.PI;
                break
            case "x³":
                solucion = n1 ** 3;
                break
            case "sin":
                solucion = Math.sin(n1);
                break
            case "cos":
                solucion = Math.cos(n1);
                break
            case "tan":
                solucion = Math.tan(n1);
                break
            case "x²":
                solucion = n1 ** 2;
                break
        }
    }
}
function printres(){
    document.getElementById('operacion').innerHTML = valores;
    document.getElementById('solucion').innerHTML = solucion;

}