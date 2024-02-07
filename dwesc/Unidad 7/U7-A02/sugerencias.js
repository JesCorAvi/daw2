document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ciudadInput').addEventListener('input', function() {
        var inputText = this.value;
        if (inputText.length > 0) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'ciudadessugerencias.php?input=' + inputText, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    mostrarSugerencias(response);
                }
            };
            xhr.send();
        } else {
            document.getElementById('sugerencias').innerHTML = '';
        }
    });

    function mostrarSugerencias(sugerencias) {
        var sugerenciasL = document.getElementById('sugerencias');
        sugerenciasL.innerHTML = '';
        sugerencias.forEach(function(ciudad) {
            var li = document.createElement('li');
            li.textContent = ciudad;
            sugerenciasL.appendChild(li);
        });
    }
});