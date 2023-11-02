function texto(){
    var patt = new RegExp(/^\s?[A-Z]\w*/);
    var lineas = document.getElementById("texto").value.replace(/(\r\n\t|\n|\r|\t)/gm, "").split(".");
    var palabras = "";
    for(var frase of lineas){
        if (frase != ""){
            var palabras = palabras + frase.replace(/[^a-zA-Z ]/,"").match(patt)[0] + ", ";
        }
    }
    document.getElementById("resultado").innerHTML = palabras
}