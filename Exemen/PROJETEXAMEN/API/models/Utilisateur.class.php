<?php

/**
 * Utilisateur short summary.
 *
 * Utilisateur description.
 *
 * @version 1.0
 * @author Alain N'GOUANDI
 */
class Utilisateur
{
    private $login;
    private $mot_De_Passe;
    private $estConnecte;
    private $etude;
    
    function __construct($etude)
    {
        $etude = new Etude();
    	$this->etude=$etude;
    }
    
    
}
