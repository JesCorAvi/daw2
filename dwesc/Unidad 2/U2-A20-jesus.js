function palindromo(){
    var frase = (prompt("Escriba una frase").toLowerCase().split(' ').join(''));
    var fraseV = "";
    for(var n of frase){
        if (n != "," && n != "."){
            fraseV += n;  
        }
    }
    for (var x = fraseV.length, rotada =""; x >= 0; x--){
        rotada += fraseV.substring(x-1,x);
    }
    (rotada == fraseV) ?document.write("es palíndromo") : document.write("no es palíndromo");
}