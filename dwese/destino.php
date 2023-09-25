<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>respuesta</title>
</head>
<body>
    <?php
    echo $_GET['dni'];
    echo $_GET['nombre'];
    echo $_GET['apellidos'];
    echo $_GET['telefono']
    ?>
</body>
</html>

/*php -S 0.0.0.0:8000 -t .*/