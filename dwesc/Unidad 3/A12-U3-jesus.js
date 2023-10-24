function frase_dwecl(){
    var frase = prompt("Escriba una frase:");
    var frag = prompt("Escriba un fragmento a buscar:");
    if (frase.indexOf(frag) == -1){
        document.write("No hay coincidencias");
    }else{
        var fraseT =  frase.replace(frag, "dwecl")
        document.write(
        `
        El fragmento ${frag} aparece por primera vez en la posición: ${frase.indexOf(frag)}.<br>
        El fragmento tiene ${frag.length} carácteres.<br>
        La frase ahora seria: ${fraseT}.
        `
        );
        
    }
}
