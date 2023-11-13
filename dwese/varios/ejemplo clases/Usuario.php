<?php

namespace Sistema;

class Usuario
{
    private string $login;
    private string $password;
    protected string $nombreClase = 'Usuario';
    public static string $cadena = 'Cliente';
    public const CONSTANTE = 'mi constante'; 

    public function __construct($login, $password)
    {
        $this->login = $login;
        $this->password = $password;
    }

    public function getLogin(): string
    {
        return $this->login;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword($password): Usuario
    {
        $this->password = $password;
        return $this;
    }

    public function getNombreClase()
    {
        return $this->nombreClase;
    }

    public static function getCadena(){
        return static::$cadena;
    }

    public static function getConstante()
    {
        return self::CONSTANTE;    
    }
    
    public function __toString()
    {
        return "hola";
    }
}   

