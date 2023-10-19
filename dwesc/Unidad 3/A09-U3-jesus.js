function frase(){
    var frase = prompt("Escriba una frase").trim().split(" ");
    var palabras = frase.length;
    var primera = frase[0]
    var ultima = frase[palabras - 1]
    document.write(`
        La primera palabra de la frase es <b>${primera}</b>.
        La última palabra de la frase es <b>${ultima}</b>.
        El número de palabras de la frase es <b>${palabras}</b>.
    `)}