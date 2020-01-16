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
            <tr class="accounts-header">
                <td class="number">№</td>
                <td class="order">Order</td>
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
            <tr>
                <form class="add-account">
                    <input type="hidden" name="addacc" value="addacc">
                    <td> </td>
                    <td class="selorder"><input type="text" name="selorder" value="free"></td>
                    <td class="seller"><input type="text" name="seller" placeholder="http://test.ru"></td>
                    <td class="login"><input type="text" name="dodologin" placeholder="support@mail.ru"></td>
                    <td class="password"><input type="text" name="dodopassword" placeholder="test"></td>
                    <td class="priceold"><input type="text" name="priceold"  placeholder="111"></td>
                    <td class="pricenew"><input type="text" name="pricenew" placeholder="222"></td>
                    <td class="profit profit-add"></td>
                    <td class="buyer"><input type="text" name="buyer" placeholder="mail"></td>
                    <td class="save"><img src="img/tick.svg" alt=""></td>
                    <td class="clear"><img src="img/close.svg" alt=""></td>
                </form>
            </tr>

            </tbody>
        </table>
    </div>
</div>

<div class="noti"></div>
<script src="script.js"></script>
</body>
</html>

