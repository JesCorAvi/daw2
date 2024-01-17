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
var radio = document.getElementsByName("sistema");

if(document.cookie == ""){
  document.cookie = "iOS=0";
  document.cookie = "Android=0";
  document.cookie = "Windows_Phone=0";
  document.cookie = "Otro=0";
}else if(document.cookie != "iOS=0; Android=0; Windows_Phone=0; Otro=0" ){
  recalcular()

}
function recalcular(){
  let ios     = parseInt(getCookie("iOS"));
  let android = parseInt(getCookie("Android"));
  let windows = parseInt(getCookie("Windows_Phone"));
  let otro    = parseInt(getCookie("Otro"));
  let total   = ios + android + windows + otro;
  document.getElementById("iOS").value = (ios / total * 100);
  document.getElementById("Android").value = (android / total * 100);
  document.getElementById("Windows_Phone").value = (windows / total * 100);
  document.getElementById("Otro").value = (otro / total * 100);
}
votar.onclick = ()=>{
  radio.forEach((rad, i) => {
    if (radio[i].checked){
      document.cookie = `${radio[i].value}=${parseInt(getCookie(radio[i].value)) + 1}`
      recalcular()
    }
  })
}
