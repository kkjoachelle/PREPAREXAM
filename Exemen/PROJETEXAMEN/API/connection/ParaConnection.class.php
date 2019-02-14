<?php

/**
 * ParaConnection short summary.
 *
 * ParaConnection description.
 *
 * @version 1.0
 * @author Alain N'GOUANDI
 */
class ParaConnection
{
    public static $utilisateur;
    public static $mot_de_Passe;
    public static $dbName;
    public static $info_Base_Donnees;
    
    
    public static function setParametre( )
    {
        ParaConnection::$utilisateur = "kalain20";
        ParaConnection::$mot_de_Passe = "GKDNmCKDxn6PVbps";
        ParaConnection::$dbName = "db_preparexam";
        ParaConnection::$info_Base_Donnees = "mysql:host=localhost;dbname=".ParaConnection::$dbName;
        
    }
    
    
}
