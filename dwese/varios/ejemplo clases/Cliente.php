<?php

namespace Empresa;

use Sistema\Usuario;

class Cliente extends Usuario
{
    private string $dni;
    private string $nombre;
    protected string $nombreClase = 'Cliente';
    public static string $cadena = 'Usuario';

    public function __construct
    (
        $login,
        $password,
        $dni, 
        $nombre,
    )
    {
        parent::__construct($login, $password);
        $this->dni = $dni;
        $this->nombre = $nombre;
    }

    public function getDni(): string
    {
        return $this->dni;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre($nombre): Cliente
    {
        $this->nombre = $nombre;
        return $this;
    }
}   

