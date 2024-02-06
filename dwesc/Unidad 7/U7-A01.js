fetch('./U7-A01.json')
    .then((response) => response.json())
    .then((json) => json.departamento.trabajador.forEach(trabaj => {
        document.getElementById("lista").innerHTML +=     
        `
            Nombre: ${trabaj.nombre}<br>
            Apellidos: ${trabaj.apellidos}<br><br>
        `
        })
    )