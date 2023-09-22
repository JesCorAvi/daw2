<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>respuesta</title>
</head>
<body>
    <p>Dni: <?php echo $_GET['dni'];?></p>
    <p>Nombre: <?php echo $_GET['nombre'];?></p>
    <p>Apellidos: <?php echo $_GET['apellidos'];?></p>
    <p>Dirección: <?php echo $_GET['direccion'];?></p>
    <p>Teléfono: <?php echo $_GET['telefono'];?></p>

</body>
</html>

/*php -S 0.0.0.0:8000 -t .*/