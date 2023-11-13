var lista = [];
for(let x = 0; x < 10; x++){
    lista[x] = Math.floor(Math.random() * 10);
}
var menorA8 = lista.filter((x) => (x < 8));

const noImpar = menorA8.map(numero => (numero % 2 !== 0) ? "impar" : numero);
document.write(
    `
    Crea un array de diez números aleatorios entre 0 y 10. ${lista} <br>
    Devuelve un array con los valores menores a 8. ${menorA8} <br>
    Intercambia los valores impares por la cadena “impar”.  ${noImpar}   <br>
    `
)