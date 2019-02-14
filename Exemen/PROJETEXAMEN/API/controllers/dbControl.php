<?php

/**
 * dbController short summary.
 *
 * dbController description.
 *
 * @version 1.0
 * @author Alain N'GOUANDI
 */
 $out="";
    function selectAllFromTable($tableName, $con)
    {
        $sql = "Select *FROM $tableName";
        $prepareQuery = $con->prepare($sql);
        $prepareQuery->execute();
        $result = $prepareQuery->fetchAll();
       
        return $result;
    }
    

