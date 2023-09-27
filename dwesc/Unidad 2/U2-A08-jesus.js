function factorial() {    
    var n = parseInt(window.prompt("dime un numero"));
    for(var n2 = n - 1; n2 > 0;  n2--){
        n = n * n2;
    }
    document.getElementById("1").innerHTML = "El factorial es " + n;
}
