<?php
header('Access-Control-Allow-Origin: *');

require 'db.php';

$param = json_decode($_REQUEST["param"]);

//echo $param;
echo json_encode(R::getAll("SELECT * FROM `items`"));

if ( $_REQUEST["param"] == 'getaccounts' ) {
  echo json_encode(R::getAll("SELECT * FROM `accounts`"));
}

if ( $param->passenter ) {
if ( $user ) {
if ( $param->passenter == $user->password ) {
$_SESSION['logged_user'] = $user;
echo 'authorized';
}
} else {
echo 'error';
}
}

if ( $param->passreg && $_SERVER['SERVER_ADDR'] == '127.0.0.1' ) {
if ( R::count('users', "password = ?", [$param->passreg]) > 0) {
echo 'have';
} else {
$user = R::dispense('users');
$user->password = $param->passreg;
R::store($user);
echo 'registered';
}
}

if ( $param->addacc ) {
$acc = R::dispense('accounts');
$acc->seldate = date("d/m/Y");
$acc->seller = $param->seller;
$acc->selorder = $param->selorder;
$acc->edulogin = $param->edulogin;
$acc->edupassword = $param->edupassword;
$acc->priceold = $param->priceold;
$acc->pricenew = $param->pricenew;
$acc->buyer = $param->buyer;
$acc->buyerip = $_SERVER['SERVER_ADDR'];
R::store($acc);
echo ' added';
}

if ($param->exit) {
unset($_SESSION['logged_user']);
echo 'exit';
}

if ($param->delId) {
$delRow = R::load('accounts', $param->delId);
R::trash($delRow);
echo ' del';
}

?>

