var lugar = {
  1:"salón de baile",
  2:"la galeria",
  3:"la sala de billar",
  4:"el comedor"
};
var sospechosos = {
  1:"Sr parker",
  2:"Sr Van Cleve",
  3:"Sra Sparr ",
  4:"Sr Kalehoff"
};
var arma = {
  1: "veneno",
  2: "trofeo",
  3: "palo de billar",
  4: "cuchillo"
};
var relacion = {
  1:4,
  2:2,
  3:3,
  4:1
};
  
function asesino(){
  var local = window.prompt("Elija una localización");
  var ases = window.prompt("Elija un sospechoso");
  var veredicto = false;
  (relacion[ases] == local) ? veredicto = true : null;
  if (veredicto){
    document.write(`${sospechosos[ases]} lo mató en el ${lugar[local]} con el ${arma[local]}`)
  }else{
    document.write(`${sospechosos[ases]} es inocente`)
  }
}
        