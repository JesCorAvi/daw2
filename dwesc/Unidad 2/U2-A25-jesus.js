function geometrica(){
	var i = prompt("Escriba un número");
	for(var lista = [5]; lista.length <= i;){
		lista.push(lista[lista.length-1] * 3)
	}
	for(var x of lista){
		document.write(x  +", ")
	}
}