function edad_actual(){
    var actual = new Date();
    var fnacstr = prompt("Introduce tu fecha de nacimiento con el sigiente formato dd/mm/aaaa");
    var fnac = fnacstr.split("/");
    var fnacObj = new Date(`${fnac[2]}-${fnac[1]}-${fnac[0]}`);
    const diferencia = Math.abs(actual - fnacObj);
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
    const años = Math.floor(dias / 365.25);
    const meses = Math.floor((dias % 365.25) / 30);
    const diasRes = dias - (años * 365.25) - (meses * 30);
    document.write(`Tienes ${diasRes} dias, ${meses} meses y ${años} años. `)
    };

