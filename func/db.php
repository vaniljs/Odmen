<?php

require 'rb.php';

R::setup( 'mysql:host=localhost;dbname=dodom','dodom', 'c69iE9ukXj85nEpPOuUl' );

if ( !R::testconnection() ) {
		exit ('Нет соединения с базой данных');
}

session_start();