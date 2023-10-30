var booleano1f = Boolean(false);
var booleano1t = Boolean(true);
var booleano2f = Boolean("");
var booleano2t = Boolean("hola");
var booleano3f = Boolean(0);
var booleano3t = Boolean(1);
var booleano4f = Boolean(NaN);
var booleano4t = Boolean(!NaN);
var booleano5f = Boolean(undefined);
var booleano5t = Boolean({"x":"y"});

document.write(
    `
    booleano1f es ${booleano1f}<br>
    booleano1t es ${booleano1t}<br>
    booleano2f es ${booleano2f}<br>
    booleano2t es ${booleano2t}<br>
    booleano3f es ${booleano3f}<br>
    booleano3t es ${booleano3t}<br>
    booleano4f es ${booleano4f}<br>
    booleano4t es ${booleano4t}<br>
    booleano5f es ${booleano5f}<br>
    booleano5t es ${booleano5t}<br>
    `
)
