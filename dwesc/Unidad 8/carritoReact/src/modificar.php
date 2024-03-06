<?php
header("Access-Control-Allow-Origin: *");
$input = $_POST['id_producto'];
$tipo = $_POST['tipo'];

$carritoJson = file_get_contents('carrito.json');
$carrito = json_decode($carritoJson, true);
if($tipo == '+'){
    foreach ($carrito['carrito'] as &$producto) {
        if ($producto['nombre'] == $input) {
            $producto['cantidad'] += 1;
        }
}
}elseif($tipo == '-'){
    foreach ($carrito['carrito'] as &$producto) {
        if ($producto['nombre'] == $input) {
            $producto['cantidad'] -= 1;
            if ($producto['cantidad'] == 0){
                $clave = array_search($producto, $carrito['carrito']);
                unset($carrito['carrito'][$clave]);
                $carrito['carrito'] = array_values($carrito['carrito']);
            }
        }
}
    
}elseif($tipo == 'todos'){
        $carrito['carrito'] = array();
}


file_put_contents('carrito.json', json_encode($carrito));

echo json_encode(['message' => 'Objeto añadido al carrito']);
?>
