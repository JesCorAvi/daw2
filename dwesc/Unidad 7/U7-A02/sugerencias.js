$(document).ready(function() {
    $('#ciudadInput').on('input', function() {
        var inputText = $(this).val();
        if (inputText.length > 0) {
            $.ajax({
                url: 'ciudadessugerencias.php',
                method: 'GET',
                data: { input: inputText },
                dataType: 'json',
                success: function(response) {
                    mostrarSugerencias(response);
                },
                error: function(xhr, status, error) {
                    console.error('Error al obtener sugerencias:', status, error);
                }
            });
        } else {
            $('#sugerencias').empty();
        }
    });

    function mostrarSugerencias(sugerencias) {
        $('#sugerencias').empty();
        sugerencias.forEach(function(ciudad) {
            $('#sugerencias').append('<li>' + ciudad + '</li>');
        });
    }
});