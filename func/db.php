<?php

require 'rb.php';

R::setup( 'mysql:host=localhost;dbname=dodom','root', '' );

if ( !R::testconnection() )
{
		exit ('Нет соединения с базой данных');
}

session_start();