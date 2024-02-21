<?php
header("Access-Control-Allow-Origin: *");
$input = $_GET['id_producto'];
$tiendaJson = file_get_contents('tiendaLista.json');
$tiendaLista = json_decode($tiendaJson, true);
$carritoJson = file_get_contents('carrito.json');
$carrito = json_decode($carritoJson, true);

$nuevo = $tiendaLista['tienda'][$input];

$existe = false;
foreach ($carrito['carrito'] as &$producto) {
    if ($producto['nombre'] == $nuevo['nombre']) {
        $producto['cantidad'] += 1;
        $existe = true;
        break;
    }
}

if (!$existe) {
    $carrito['carrito'][] = $nuevo;
}

file_put_contents('carrito.json', json_encode($carrito));

echo json_encode(['message' => 'Objeto añadido al carrito']);
?>
