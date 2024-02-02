function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }
  
  var votar = document.getElementById("votar");
  var radio = document.getElementsByName("cafe");
  
  if(document.cookie == ""){
    document.cookie = "solo=0";
    document.cookie = "leche=0";
    document.cookie = "descafeinado=0";
    document.cookie = "hielo=0";
  }else if(document.cookie != "solo=0; leche=0; descafeinado=0; hielo=0" ){
    recalcular()
  
  }
  function recalcular(){
    let solo     = parseInt(getCookie("solo"));
    let leche = parseInt(getCookie("leche"));
    let descafeinado = parseInt(getCookie("descafeinado"));
    let hielo    = parseInt(getCookie("hielo"));
    let total   = solo + leche + descafeinado + hielo;
    document.getElementById("solo").value = (solo / total * 100);
    document.getElementById("soloP").innerHTML = (solo / total * 100).toFixed(2) + "%"+ " VOTOS: " + solo;
  
    document.getElementById("leche").value = (leche / total * 100);
    document.getElementById("lecheP").innerHTML = (leche / total * 100).toFixed(2) + "%"  + " VOTOS: " + leche;
  
    document.getElementById("descafeinado").value = (descafeinado / total * 100);
    document.getElementById("descafeinadoP").innerHTML = (descafeinado / total * 100).toFixed(2) + "%" + " VOTOS: " + descafeinado;
  
    document.getElementById("hielo").value = (hielo / total * 100);
    document.getElementById("hieloP").innerHTML = (hielo / total * 100).toFixed(2) + "%" + " VOTOS: " + hielo;
  
  }
  votar.onclick = ()=>{
    radio.forEach((rad, i) => {
      if (radio[i].checked){
        document.cookie = `${radio[i].value}=${parseInt(getCookie(radio[i].value)) + 1}`
        recalcular()
      }
    })
  }
  