function texto(){
    var patt = new RegExp(/^\s?[A-Z]\w*/);
    var lineas = document.getElementById("texto").value.split(".");
    console.log(lineas);
    var cadena = "";
    for(var x of lineas){
        if (x != ""){
            var cadena = cadena + x.replace(/[^a-zA-Z ]/,"").match(patt)[0] + " ";
        }
    }
    document.getElementById("resultado").innerHTML = cadena
}