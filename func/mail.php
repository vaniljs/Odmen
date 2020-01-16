<?php
require 'db.php';
$param = json_decode($_REQUEST["param"]);
$all_account = R::getAll("SELECT * FROM `accounts`");

foreach($all_account as $values) {
    foreach($values as $val) {
        if ($val === '0') {
            $needArray = $values;

            break;
        }
    }
}

$dodoLogin = explode('@', $needArray[dodologin]);
$editAccount= R::load('accounts', $needArray[id]);
$editAccount->selorder = time();
R::store($editAccount);

$to= "a.sorokin59@yandex.ru";
$to2= "a.sorokin59@yandex.ru";

$subject = " #".$editAccount->selorder;
$subject2 = "Новый заказ!";

$message = '
<html>
<head>
    <title></title>
</head>
<style>
    * {
        font-family: \'Roboto Condensed\', sans-serif
    }

    p {
        margin: 0;
        padding: 0;
    }

    h3 {
        margin: 0;
    }
</style>
<body>
<h3>Доброго времени суток.</h3>
<h3>Спасибо за покупку!</h3>
<br>
<p>Логин <b>' . $needArray[dodologin] . '</b></p>
<p>Пароль <b>' . $needArray[dodopassword] . '</b></p>
<br>
<a href="https://mail.google.com">Вход через gmail.com</a>
<br>
<br>
<p>Получилось войти в аккаунт?</p>
<br>
<p>Если будут вопросы, задавайте.</p>
<p>Будем рады ответить.</p>
<p>Хорошего дня!</p>

<div style="color: gray; margin-top: 50px;">
    <p>==================</p>
    <p>Поддержка</p>
    <p>==================</p>
</div>
</body>
</html>
';

$message2 = '
Купили заказ №1234567678
';

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

if ($needArray[dodologin] && $needArray[dodopassword]) {
 mail($to, $subject, $message, $headers);
//mail($to2, $subject2, $message2, $headers);
}


