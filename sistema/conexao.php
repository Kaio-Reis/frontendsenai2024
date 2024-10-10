<?php
// dizer qual o host da minha conexão
$host = 'localhost';
//dizer qul o usuario que vai acessar o BD
$user = 'root';
//a senha deste banco de dados 
$senha = '';
// o nome do banco de dados 
$bd = 'sistema';

//criar conexão 
$conexao = new mysqli($host, $user, $senha, $bd);

if ($conexao -> connect_error){
    echo "deu ruim ";
} else {
    echo "deu bom ";
}
?>