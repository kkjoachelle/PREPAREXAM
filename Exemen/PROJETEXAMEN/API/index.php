<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include_once"connection/ParaConnection.class.php";
include_once"connection/connection.class.php";
include_once"models/Etude.class.php";

    ParaConnection::setParametre();
    $dbConnection = connection::setConnection(ParaConnection::$info_Base_Donnees,ParaConnection::$utilisateur,ParaConnection::$mot_de_Passe);
    $dbName = ParaConnection::$dbName;
    
    $niveauEtude = new Etude($dbConnection);
    $tableEtudes = $niveauEtude->selectAll();
    echo json_encode($tableEtudes);

?>