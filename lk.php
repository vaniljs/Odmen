<?php require './func/db.php'; ?>
<?php if (isset($_SESSION['logged_user'])) : ?>
<?php else : ?>
<?php header('Location: ./index.php'); ?>
<?php endif;  ?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Odmen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <div class="menu">
        <h1>Odmen</h1>
        <button class="logout">Выйти</button>
    </div>
    <div class="content">
        <table class="accounts" cellspacing="0">
            <tbody>
            <tr>
                <td class="number">№</td>
                <td class="date">Order</td>
                <td class="seller">Seller</td>
                <td class="login">Login</td>
                <td class="password">Password</td>
                <td class="priceold">Price old</td>
                <td class="pricenew">Price New</td>
                <td class="profit">Profit</td>
                <td class="buyer">Buyer</td>
                <td class="info-icon">Info</td>
                <td class="del">Del</td>
            </tr>

            <?php
                echo getDataAcc();
                function getDataAcc(){
                    $acc = R::getAll("SELECT * FROM `accounts`");
                    $count_row = 1;
                    $count = count($acc);
                for($i = 0; $i < $count; $i++){

                $profit = $acc[$i]['pricenew'] - $acc[$i]['priceold'];

                    $content .='
                        <tr>
                            <td title="id: '. $acc[$i]['id'] .'">'.$count_row++.'</td>
                            <td>'. $acc[$i]['selorder'].'</td>
                            <td><a href="'.$acc[$i]['seller'].'" target="_blank">link</a></td>
                            <td>'.$acc[$i]['dodologin'].'</td>
                            <td>'.$acc[$i]['dodopassword'].'</td>
                            <td>'.$acc[$i]['priceold'].' руб</td>
                            <td>'.$acc[$i]['pricenew'].' руб</td>
                            <td>'. $profit .' руб</td>
                            <td>'.$acc[$i]['buyer'].'</td>
                            <td class="info-icon"><img src="img/question.svg" alt=""></td>
                            <td class="del"><img src="img/delete-button.svg" alt=""></td>
                        </tr>
                    ';
                }
                    return($content);
                }
                ?>

            <tr>
                <form class="add-account">
                    <td>1</td>
                    <td class="selorder"><input type="text" name="selorder" value=""></td>
                    <td class="seller"><input type="text" name="seller" value="http://test.ru"></td>
                    <td class="login"><input type="text" name="dodologin" value="a.sorokin59@yandex.ru"></td>
                    <td class="password"><input type="text" name="dodopassword" value="Password"></td>
                    <td class="priceold"><input type="text" name="priceold"  value="100"></td>
                    <td class="pricenew"><input type="text" name="pricenew" value="249"></td>
                    <td class="profit profit-add"></td>
                    <td class="buyer"><input type="text" name="buyer" value="a.sorokin59@yandex.ru"></td>
                    <td class="save"><img src="img/tick.svg" alt=""></td>
                    <td class="clear"><img src="img/close.svg" alt=""></td>
                </form>
            </tr>

            </tbody>
        </table>
    </div>
</div>

<!--<div class="info">

    <div class="header">
        <p class="title">Info</p>
    </div>

    <div class="order">
        <p>Order:</p>
        <p>5765786546</p>
    </div>

    <div class="date">
        <p>Date buy:</p>
        <p>12/01/2020</p>
    </div>

    <div class="buyer">
        <p>Buyer:</p>
        <p>a.sorokin59@yandex.ru</p>
    </div>

    <div class="ip">
        <p>IP:</p>
        <p>127.125.085.936</p>
    </div>
    
    <div class="option">
        <img src="img/mail.svg" alt="">
        <img src="img/delete-button.svg" alt="">
    </div>
</div>-->
<div class="noti"></div>
<script src="script.js"></script>
</body>
</html>

