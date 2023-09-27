function multiplos() {    
    var num1 = parseInt(window.prompt("dime un numero"));
    var num2 = parseInt(window.prompt("dime otro numero"));
    var minN = Math.min(num1,num2);
    var maxN = Math.max(num1,num2);
    for(var multiplos = ""; maxN >= minN; minN++){
        if (minN % 8 == 0){
            multiplos = multiplos + minN + ", ";
        }
        document.getElementById("1").innerHTML = "Los multiplos de 8 son "+ multiplos;
    }
}