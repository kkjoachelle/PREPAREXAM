<?php

/**
 * connection short summary.
 *
 * connection description.
 *
 * @version 1.0
 * @author Alain N'GOUANDI
 */
class connection
{
 
    private static $connect;
    
    private function __construct()
    {
        
    }
    
    public static function setConnection($info_Base_Donnees,$utilisateur, $mot_de_Passe)
    {
        if(connection::$connect == null){
            try
            {
                connection::$connect = new PDO($info_Base_Donnees,$utilisateur, $mot_de_Passe);
                connection::$connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOException $exception)
            {
                echo "<script>alert('connection failed')</script>";
            }
            
        }
        return connection::$connect;
      	
    }
      
    
    
    
}
