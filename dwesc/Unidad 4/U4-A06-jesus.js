var nota = [];
function notas(){
    for(let x = 0; x < 5; x++){
        nota[x] = [prompt("Escriba el nombre de un alumno:"),];
        nota[x][1] = prompt("Escriba Su nota en Desarollo Web en Entorno Cliente:");
        nota[x][2] = prompt("Escriba Su nota en Desarollo Web en Entorno Servidor: ");
        nota[x][3] = prompt("Escriba Su nota en Despliege de Aplicaciones Web:");
    }
    console.table(nota);
    for(var registro = 0; registro < 5; registro++){ 
        for(var dato = 0; dato < 4; dato++){
            document.getElementById(registro).innerHTML += `<td> ${nota[registro][dato]} </td>`
        }
    }
}