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

if (document.cookie == ""){
    document.cookie = "contador=0";
    document.getElementById("contador").innerHTML = "0"
    }else{
        document.cookie = `contador=${parseInt(getCookie("contador")) + 1}`;
        document.getElementById("contador").innerHTML = getCookie("contador")

    }


