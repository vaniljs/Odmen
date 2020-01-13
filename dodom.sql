-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 13 2020 г., 14:20
-- Версия сервера: 5.6.38
-- Версия PHP: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `edum`
--

-- --------------------------------------------------------

--
-- Структура таблицы `accounts`
--

CREATE TABLE `accounts` (
  `id` int(6) NOT NULL,
  `seldate` varchar(200) CHARACTER SET utf8 NOT NULL,
  `seller` varchar(100) CHARACTER SET utf8 NOT NULL,
  `selorder` int(6) NOT NULL,
  `edulogin` varchar(100) CHARACTER SET utf8 NOT NULL,
  `edupassword` varchar(100) CHARACTER SET utf8 NOT NULL,
  `priceold` float NOT NULL,
  `pricenew` float NOT NULL,
  `buyer` varchar(100) CHARACTER SET utf8 NOT NULL,
  `buyerip` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `accounts`
--

INSERT INTO `accounts` (`id`, `seldate`, `seller`, `selorder`, `edulogin`, `edupassword`, `priceold`, `pricenew`, `buyer`, `buyerip`) VALUES
(118, 'Игрушка', '', 7565453, 'a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 10, 545, 'a2716199@yandex.ru', '0'),
(176, 'Цветок', '', 453457, 'a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 404, 0, 'a2716199@yandex.ru', '0'),
(193, 'Камаз', '', 777, 'a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 101, 456, 'a2716199@yandex.ru', '0'),
(195, 'Машинка', '', 7537539, 'a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 101, 0, 'a2716199@yandex.ru', '0'),
(196, 'Солдатик', '', 100, 'a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 989, 0, 'a2716199@yandex.ru', '0'),
(198, 'Фонарик', '', 100, '0a.sorokin59@yandex.ru', 'oveSwPnIfxoEpNxZVETA', 0, 0, 'a2716199@yandex.ru', '0'),
(199, '13/01/2020', 'http://test.ru', 0, 'a.sorokin59@yandex.ru', 'Password', 100, 249, 'a.sorokin59@yandex.ru', '127.0.0.1'),
(200, '13/01/2020', 'http://test.ru', 0, 'a.sorokin59@yandex.ru', 'Password', 100, 249, 'a.sorokin59@yandex.ru', '127.0.0.1');

-- --------------------------------------------------------

--
-- Структура таблицы `support`
--

CREATE TABLE `support` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_user` int(6) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `date` varchar(100) NOT NULL,
  `readed` varchar(10) NOT NULL,
  `hidden` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `support`
--

INSERT INTO `support` (`id`, `id_user`, `message`, `date`, `readed`, `hidden`) VALUES
(3, 104, 'pook', '01:01:23 09-11-2019', 'false', 'false'),
(2, 104, '432345', '00:51:45 09-11-2019', 'false', 'false'),
(4, 104, 'popp', '01:02:10 09-11-2019', 'false', 'false'),
(5, 104, '999', '01:02:16 09-11-2019', 'false', 'false'),
(6, 104, 'Привет ', '01:03:34 09-11-2019', 'false', 'false'),
(7, 104, '11111', '01:04:48 09-11-2019', 'false', 'false'),
(8, 104, 'Очередное сообщение\n', '01:22:24 09-11-2019', 'false', 'false'),
(9, 104, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorem hic, laboriosam laudantium omnis vitae? Cupiditate magni ratione tenetur vel? Aliquam architecto doloribus inventore minima porro quaerat repellat tempore vitae!', '01:26:16 09-11-2019', 'false', 'false'),
(10, 109, 'Что делать? ', '01:30:08 09-11-2019', 'false', 'false'),
(11, 104, 'Сподиполмпол', '04:04:58 22-11-2019', 'false', 'false'),
(12, 104, 'Ппош', '04:05:06 22-11-2019', 'false', 'false'),
(13, 104, 'qweqwe', '02:57:21 23-11-2019', 'false', 'false'),
(14, 104, '234234', '02:57:28 23-11-2019', 'false', 'false');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `password`) VALUES
(125, '777'),
(126, '888'),
(127, '999');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `support`
--
ALTER TABLE `support`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT для таблицы `support`
--
ALTER TABLE `support`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
