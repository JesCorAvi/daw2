<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="U7-A02.js"></script>
</head>
<body>
    <h2>Escribe el nombre de alguna ciudad a la que quieras ir</h2>
    <label for="ciudad">Ciudad: </label>
    <input type="text" name="ciudad" id="ciudad">
    <br><br>
    Sugerencias: <label for="" id="sugerencia"></label>
    <?php   
        $filename = 'U7-A02.json';
        $data = json_decode($filename) ; 
        echo($data)
    ?>  
</body>
</html>