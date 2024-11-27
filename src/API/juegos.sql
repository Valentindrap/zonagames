-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2024 a las 17:39:43
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base_zonagames`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `calificacion` decimal(3,1) DEFAULT NULL,
  `desarrollador` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `portada` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `nombre`, `url`, `calificacion`, `desarrollador`, `descripcion`, `portada`) VALUES
(1, 'GTA 6', 'https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html', 4.5, 'Rockstar Games', 'El GTA 6 está aquí, papu.', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/03/gta-6-3282307.jpg?tf=3840x'),
(2, 'Get On Top', 'https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html', 4.0, 'MangoJam Studios', 'A ver quien es más locon.', 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/3078616e30ecc5f326bd8e6cad728a03.png'),
(3, 'Head Soccer 2022', 'https://www.onlinegames.io/games/2023/construct/280/head-soccer-2022/index.html', 5.0, 'D&D Dream Studios', 'El 1 con la WASD Y LA N Y M. El otro con la flechita y el 1 y 2. A jugar.', 'https://static.playhop.com/images/cc987_2977039_227e0/84f3ca624/2a00000180d6ac39_3fe781f/1329a0cbcf3a908ddae0_4d36e2/orig'),
(4, 'Draw Here', 'https://www.onlinegames.io/games/2021/unity2/draw-here/index.html', 5.0, 'Hyperbolic Studios', 'NOSE PERO TENES QUE DIBUJAR.', 'https://www.onlinegames.io/media/posts/567/responsive/Draw-Here-lg.jpg'),
(5, 'G-SWITCH 3', 'https://html5-games.io/game/g-switch-3/', 5.0, 'Serius Games', 'El puto GOTY.', 'https://play-lh.googleusercontent.com/ylSOEyk2tG390Pm4-IRUlMVtjNuYnxgX1aTm6ZxC_I6hCHjanvHFgZkCCw73sGE3lg'),
(6, 'Fuego y Agua', 'https://pavel-skala.github.io/Fireboy-and-Watergirl/', 5.0, 'Pavel Skala', 'Dos jóvenes papuchos en escape de la bestia.', 'https://play-lh.googleusercontent.com/6N_ON50BZiEAe-ll2lM92NrVrgp5I5Ha6VI0a4Usw7uPmgEjL6tgJR6jWYUkkYgx2LM'),
(7, 'Clicker Heroes', 'https://clickerheroes.com/', 4.7, 'RPG Studios', 'Haz clic para derrotar a monstruos y desbloquear héroes en tu camino hacia la victoria.', 'https://play-lh.googleusercontent.com/XqysWlDWj5nBr0zZMtB08Bt4pe3MsE8XXOAgqZYiD1s65phAUWUcLIBLxdiAkfjfIsM'),
(8, 'Mr. Mine', 'https://mrmine.com/game/', 4.5, 'MineQuest Studio', 'Excava y descubre tesoros ocultos mientras gestionas tus recursos en esta divertida aventura minera.', 'https://f4.bcbits.com/img/a0036462721_10.jpg'),
(9, 'Kong Poker Quest', 'https://playsaurus.com/kongPokerQuest63/', 4.6, 'Plausible Games', 'Pon a prueba tus habilidades de póker en este emocionante juego lleno de estrategia y acción.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUS2BfMAGf_2hMfD1hl4D4gZfVL8kNtfQ0Uw&s'),
(10, 'Grindcraft', 'https://grindcraft.com/game.php', 4.8, 'CraftWorks Studio', 'Recoge recursos, crea herramientas y construye estructuras en este adictivo juego de crafting.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGO_dQvYqOOnJ35mO4pXthfrOGgIo1ad-p0p7Zg-i_XhrsUmukI52LbOatTbrW4TP0kU&usqp=CAU'),
(11, 'Fray Fight', 'https://frayfight.com/game/', 4.4, 'Frenzy Fight Studios', 'Lucha con personajes únicos en este emocionante juego de peleas multijugador, donde solo los mejores sobrevivirán.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpLK1V9DYinRPqt4P36ZpfhUWsPlqIHiBHA&s'),
(12, 'Zuno', 'https://zv1y2i8p.play.gamezop.com/g/ByQxJnp7qRB', 4.3, 'Gamezop Studios', 'Adéntrate en un mundo lleno de desafíos y diversión en esta emocionante aventura.', 'https://static.gamezop.com/ByQxJnp7qRB/cover.jpg'),
(13, 'Merge Mania', 'https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY', 4.3, 'Fusion Labs', 'Combina elementos para avanzar en una serie de emocionantes retos y sorpresas.', 'https://static.gamezop.com/hfPOimYqY/cover.jpg'),
(14, 'Blazin Blades', 'https://zv1y2i8p.play.gamezop.com/g/UYiznUAya', 4.3, 'Epic Action Games', 'Embárcate en una aventura épica llena de acción y batallas emocionantes.', 'https://static.gamezop.com/UYiznUAya/cover.jpg'),
(15, 'Candy Fiesta', 'https://zv1y2i8p.play.gamezop.com/g/r1zG1h6m90H', 4.3, 'Sugar Rush Studios', 'Únete a una colorida fiesta de dulces llena de aventuras y desafíos.', 'https://static.gamezop.com/r1zG1h6m90H/cover.jpg'),
(16, 'Fruit Chop', 'https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r', 4.3, 'FruitSlice Inc.', 'Corta frutas en un juego de velocidad y precisión que pondrá a prueba tus reflejos.', 'https://static.gamezop.com/rkWfy2pXq0r/cover.jpg'),
(17, 'Zombies Can\'t Jump 2', 'https://zv1y2i8p.play.gamezop.com/g/rkxMV8TI6Wg', 4.3, 'Zombie Studios', 'Supera obstáculos y resuelve acertijos en un mundo donde los zombis no pueden saltar.', 'https://static.gamezop.com/rkxMV8TI6Wg/cover.jpg'),
(18, 'Bouncy', 'https://zv1y2i8p.play.gamezop.com/g/H1Tz6z1Dqym', 4.3, 'Bouncy Games', 'Salta y rebota en un divertido juego lleno de desafíos dinámicos.', 'https://static.gamezop.com/rkxMV8TI6Wg/cover.jpg'),
(19, 'Solitaire Gold', 'https://zv1y2i8p.play.gamezop.com/g/rkPlk2T7qAr', 4.3, 'Solitaire Studios', 'Disfruta de una experiencia clásica de solitario con un toque de oro y recompensas.', 'https://static.gamezop.com/rkPlk2T7qAr/cover.jpg'),
(20, 'Dunk Draw', 'https://zv1y2i8p.play.gamezop.com/g/r1xZyhTQ50r', 4.3, 'Basket Studios', 'Combina habilidades de dibujo y baloncesto en este divertido desafío.', 'https://static.gamezop.com/r1xZyhTQ50r/cover.jpg'),
(21, 'Pool Master', 'https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc', 4.3, 'Cue Masters', 'Conviértete en un maestro del billar y supera a tus oponentes en emocionantes partidas.', 'https://static.gamezop.com/hgempP8Sc/cover.jpg'),
(22, 'Ludo with Friends', 'https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb', 4.3, 'Ludo Labs', 'Disfruta del clásico juego de mesa, ahora con opciones multijugador.', 'https://static.gamezop.com/SkhljT2fdgb/cover.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
