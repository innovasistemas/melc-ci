-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-07-2018 a las 18:22:45
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `melc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_advertisement`
--

CREATE TABLE `melc_advertisement` (
  `id` bigint(20) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci DEFAULT '#!'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_advertisement`
--

INSERT INTO `melc_advertisement` (`id`, `name`, `description`, `active`, `link`) VALUES
(1, 'Inscríbete aquí!', '¡Ya está la programación de recorridos! Haz clic aquí e inscríbete.', b'1', 'http://bit.ly/inscripcionesmedellinenlacabeza'),
(2, 'sale a callejear', '1.276 jóvenes han participado en nuestros recorridos. ¿tú qué esperas para salir a callejear?', b'1', ''),
(4, 'melc', 'medellín en la cabeza', b'0', ''),
(18, 'recorridos', 'en 2018 hemos realizado 72 recorridos y hemos visitado más de 150 lugares en toda la ciudad.', b'1', '#!'),
(24, 'Nuevo video', 'Estas son las imágenes de nuestra última callejeada', b'0', ''),
(25, 'cine callejero', 'Aprender de cine callejeando para seguir educando', b'0', 'http://www.youtube.com'),
(26, 'dddd', 'sss', b'0', ''),
(27, 'anuncio 1', 'anuncio prueba guardar genérico', b'0', 'http://www.youtube.com/#/d');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_comment`
--

CREATE TABLE `melc_comment` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `affair` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `opinion` varchar(2000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_contact`
--

CREATE TABLE `melc_contact` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_contact_information`
--

CREATE TABLE `melc_contact_information` (
  `id` bigint(20) NOT NULL,
  `address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cell_phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_contact_information`
--

INSERT INTO `melc_contact_information` (`id`, `address`, `phone`, `cell_phone`, `email`, `logo`) VALUES
(1, 'Calle 52 Avenida la playa', '2556699', '3012256565', 'medellinenlacabeza@gmail.com', 'logo-header.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_image_gallery`
--

CREATE TABLE `melc_image_gallery` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_image_gallery`
--

INSERT INTO `melc_image_gallery` (`id`, `name`, `description`, `url`, `active`) VALUES
(1, '1', 'Comuna 14 El Poblado. Ruta: Somos educación, arte y cultura.', '1.jpg', b'1'),
(2, '2', 'Comuna 9 Buenos Aires. Ruta: Medellín en movimiento.', '2.jpg', b'1'),
(3, '3', 'Comuna 10 La Candelaria. Ruta: El centro: un lugar para descubrir.', '3.jpg', b'1'),
(4, '4', 'Comuna 3 Manrique. Ruta: Medellín sostenible', '4.jpg', b'1'),
(5, '5', 'Corregimiento de Santa Elena. Ruta: ¿Tiene Medellín campesinos?', '5.jpg', b'1'),
(6, '6', 'Comuna 6 Doce de Octubre. Ruta: Equipamientos públicos para la ciudadanía.', '6.jpg', b'1'),
(7, '7', 'Comuna 8 Villahermosa. Ruta: Medellín en movimiento', '7.jpg', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_newsletter`
--

CREATE TABLE `melc_newsletter` (
  `id` bigint(20) NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_newsletter`
--

INSERT INTO `melc_newsletter` (`id`, `email`) VALUES
(9, 'aaaaxxx23002dd@ssss.aa'),
(17, 'aaaxx.aa5a00@xxx.xx.xx'),
(15, 'aaña@uuu.xxx'),
(7, 'alquimia@gmail.com'),
(5, 'gomez1234@gmail.com'),
(6, 'jeremias@gmail.com'),
(4, 'maria1209@gmail.com'),
(2, 'mariamontes@yahoo.com'),
(1, 'pedroalvarez@gmail.com'),
(11, 'qww223@yahoo.es'),
(8, 'sdf'),
(13, 'ttee33@aa.dd'),
(3, 'victorcifuentesperez@hotmail.com'),
(14, 'yy44'),
(18, 'zzz@zzz.zzz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_social_network`
--

CREATE TABLE `melc_social_network` (
  `id` bigint(20) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'social-networks.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_social_network`
--

INSERT INTO `melc_social_network` (`id`, `name`, `description`, `link`, `logo`) VALUES
(1, 'facebook', '@delajuventud', 'https://www.facebook.com/delajuventud/', 'fb-footer.png'),
(2, 'instagram', '@medellinenlacabeza', 'https://www.instagram.com/medellinenlacabeza/', 'instagram-footer.png'),
(3, 'correo', 'medellinenlacabeza@gmail.com', 'http://www.gmail.com', 'mail-footer.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `melc_advertisement`
--
ALTER TABLE `melc_advertisement`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_comment`
--
ALTER TABLE `melc_comment`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_contact`
--
ALTER TABLE `melc_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_contact_information`
--
ALTER TABLE `melc_contact_information`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_image_gallery`
--
ALTER TABLE `melc_image_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_newsletter`
--
ALTER TABLE `melc_newsletter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `melc_social_network`
--
ALTER TABLE `melc_social_network`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `melc_advertisement`
--
ALTER TABLE `melc_advertisement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT de la tabla `melc_comment`
--
ALTER TABLE `melc_comment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `melc_contact`
--
ALTER TABLE `melc_contact`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `melc_contact_information`
--
ALTER TABLE `melc_contact_information`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `melc_image_gallery`
--
ALTER TABLE `melc_image_gallery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `melc_newsletter`
--
ALTER TABLE `melc_newsletter`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `melc_social_network`
--
ALTER TABLE `melc_social_network`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
