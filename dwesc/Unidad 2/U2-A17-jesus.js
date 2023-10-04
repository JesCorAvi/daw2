function calc(){
    while (true){
        var opt = prompt(
            `Elija una opción:
            Pulse 1 para sumar

            Pulse 2 para restar

            Pulse 3 para multiplicar

            Pulse 4 para dividir

            Pulse 5 para obtener el módulo

            Pulse 6 para salir
            `);
            if (opt == 6){
                if(confirm("¿seguro que desea salir?")){
                    document.write("Saliste del programa");
                    break;
                }
                else{
                    continue;
                }
            }
            var n1 = prompt("Escriba el primer valor")
            var n2 = prompt("Escriba el segundo valor")

        switch (opt){
            case "1":
                alert(`${n1} + ${n2} = ${parseInt(n1) + parseInt(n2)}`);
                break;
            case "2":
                alert(`${n1} - ${n2} = ${n1 - n2}`);;
                break;
            case "3":
                alert(`${n1} * ${n2} = ${n1 * n2}`);;
                break;
            case "4":
                alert(`${n1} / ${n2} = ${n1 / n2}`);;
                break;
            case "5":
                alert(`${n1} % ${n2} = ${n1 % n2}`);;
                break;
            default: 
            alert("Error, pruebe otra vez");
            break
        }
    }
}
