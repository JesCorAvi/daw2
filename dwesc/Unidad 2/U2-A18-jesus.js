function calcular(){
    var valores = [true, 5, false, "hola", "adios", 2];
    if (valores[3] > valores[4]){
        document.write( `El texto mas largo es ${valores[3]}<br>`)
    }else{
        document.write(`El texto mas largo es ${valores[4]}<br>`)
    }
    document.write(
    `
    ${valores[0]} && ${valores[2]} = ${valores[0] && valores[2]}<br>
    ${valores[0]} || ${valores[2]} = ${valores[0] || valores[2]}<br>
    ${valores[1]} - ${valores[5]} = ${valores[1] - valores[5]}<br>
    ${valores[1]} * ${valores[5]} = ${valores[1] * valores[5]}<br>
    `
    )

}