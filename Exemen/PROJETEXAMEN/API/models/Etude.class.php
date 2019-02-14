<?php

/**
 * Etude short summary.
 *
 * Etude description.
 *
 * @version 1.0
 * @author Alain N'GOUANDI
 */
include_once"controllers/dbControl.php";
class Etude
{
   private $id_Etude;
   private $niveau;
   private $con;
   private $tableName = "Etudes";
    
    
   public function __construct($con)
   {
       $this->con = $con;
   }
   
   public function getIdEtudes( )
   {
       return $this->id_Etude;
   }
   
   public function setIdEtudes($Id_etudes)
   {
       if($Id_etudes !=null)
           $this->id_Etude = $Id_etudes;        
   }
   
   public function getNiveau( )
   {
       return $this->niveau;
   }
   
   
   public function setNiveau($niveau)
   {
       if($niveau != null)
           $this->niveau = $niveau;
   }
   
   public function selectAll()
   {
     return selectAllFromTable($this->tableName, $this->con);
   }
   

}
