var votar = document.getElementById("votar");
var radio = document.getElementsByName("equipo");
votar.onclick = ()=>{
    radio.forEach((rad, i) => {
      if (radio[i].checked){
        fetch('guardarvotos.php?input=' + radio[i].value)
                .then(function(response) {
                    return response.text();
                })
                .then(function(data) {
                    mostrarvotos(data);
                })
        }
    })
}
    
 
function mostrarvotos(votos){
    var array = votos.split("||");
    let total   = parseInt(array[0]) + parseInt(array[1]) + parseInt(array[2]) + parseInt(array[3]);
    document.getElementById("1").value = (parseInt(array[0]) / total * 100);
    document.getElementById("2").value = (parseInt(array[1]) / total * 100);
    document.getElementById("3").value = (parseInt(array[2]) / total * 100);
    document.getElementById("4").value = (parseInt(array[3]) / total * 100);
}

  

