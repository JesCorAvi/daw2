function edad_actual(){
    var actual = new Date();
    var fnacstr = prompt("Introduce ru fecha de nacimiento con el sigiente formato dd/mm/aaaa");
    var fnac = fnacstr.split("/");
    var fnacObj = new Date(fnac[2],fnac[1],fnac[0]);
    var años = actual.getFullYear() - fnacObj.getFullYear();;
    var meses = actual.getMonth() - fnacObj.getMonth();
    var dias = actual.getDate() - fnacObj.getDate();
    while (dias < 0 ){
        
    }
    if (meses < 0 ){

    }
    document.write(`quedan ${dias} dias, ${meses} meses y ${años} años. `)
    };

