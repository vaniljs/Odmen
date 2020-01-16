<?php
require './func/db.php';
$param = json_decode($_REQUEST["param"]);
$all_account = R::getAll("SELECT * FROM `accounts`");
$account_client = $_POST[label];
$account_admin = "support@mail.ru";
$datetime = $_POST[datetime];
$operation_id = $_POST[operation_id];
$withdraw_amount = $_POST[withdraw_amount];
$amount = $_POST[amount];

// data = {"notification_type":"p2p-incoming","bill_id":"","amount":"1.99","codepro":"false","withdraw_amount":"2.00","unaccepted":"false","label":"a.fgcfmhfjm@yandex.ru","datetime":"2020-01-15T19:55:45Z","sender":"410011660401465","sha1_hash":"f6c46f4e95a0a91b7dc0aff4c30656c1cc77ac66","operation_label":"25b181fd-0011-5000-9000-117329d6e355","operation_id":"632433345703059008","currency":"643"}

foreach($all_account as $values) {
    foreach($values as $val) {
        if ($val === 'free') {
            $needArray = $values;
            break;
        }
    }
}

if ($account_client && $needArray[pricenew] == $withdraw_amount && $needArray[dodologin] && $needArray[dodopassword]) {

    $dodoLogin = explode('@', $needArray[dodologin]);
    $editAccount = R::load('accounts', $needArray[id]);
    $editAccount->selorder = $datetime;
    $editAccount->seldate = $datetime;
    $editAccount->buyer = $account_client;
    R::store($editAccount);
    $subject = "#".$editAccount->selorder;
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
    <h3>Покупатель: ' . $account_client . '</h3>
    <br>
    <p>Почта <b>' . $needArray[dodologin] . '</b></p>
    <p>Пароль <b>' . $needArray[dodopassword] . '</b></p>

    <p>Покупатель оплатил <b>' . $withdraw_amount . '</b></p>
    <p>С учетом комиссии <b>' . $amount . '</b></p>
    <br>
    <p>Хорошего дня!</p>

    <div style="color: gray; margin-top: 50px;">
        <p>==================</p>
        <p>Поддержка</p>
        <p>==================</p>
    </div>
    </body>
    </html>
    ';

    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= 'From: support@mail.ru' . PHP_EOL;

    mail($account_client, $subject, $message, $headers);
    mail($account_admin, $subject2, $message2, $headers);

}

$file = fopen("postlog.txt","at");    // открываем файл для записи
fwrite($file, json_encode($_POST) ."\n");  // записываем в файл
fclose($file); // закрываем файл