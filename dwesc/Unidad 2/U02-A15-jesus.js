function letras(){
    var frase = window.prompt("escribe una frase: ");
    for (var x of frase){
        if (isNaN(x)){
            document.write(x+"<br>");
        }
    }
}
