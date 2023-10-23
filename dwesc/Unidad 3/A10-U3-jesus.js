function frase(){
    var frase = prompt("Escriba una frase");
    var div = prompt("Escriba el parametro de inicio y fin separados por '/'").split("/");
    var frag = frase.slice(frase.indexOf(div[0]), frase.indexOf(div[1])) + div[1];
    document.write(`La frase completa es: ${frase}'<br>'El fragmento seleccionado es: ${frag}`);
}