function fibonacci(){
	var i = prompt("Escriba un número");
	for(var lista = [1,1]; lista.length <= i;){
		lista.push(lista[lista.length-1]+lista[lista.length-2])
	}
	for(var x of lista){
		document.write(x  +", ")
	}
}