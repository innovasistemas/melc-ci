-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-12-2018 a las 12:28:49
-- Versión del servidor: 5.7.24
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
-- Estructura de tabla para la tabla `melc_access`
--

CREATE TABLE `melc_access` (
  `id` bigint(20) NOT NULL,
  `id_melc_profile_user` bigint(20) NOT NULL,
  `ip_access` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `user_agent` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `observation` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'ninguna',
  `date_time_access` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_time_exit` datetime DEFAULT NULL,
  `date_time_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_advertisement`
--

CREATE TABLE `melc_advertisement` (
  `id` bigint(20) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL,
  `link` varchar(4000) COLLATE utf8_unicode_ci DEFAULT '#!',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_carousel`
--

CREATE TABLE `melc_carousel` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_chronic`
--

CREATE TABLE `melc_chronic` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `date` date NOT NULL,
  `text` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_comment`
--

CREATE TABLE `melc_comment` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `affair` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `opinion` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_contact`
--

CREATE TABLE `melc_contact` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
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
  `link` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `about_us` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_image_gallery`
--

CREATE TABLE `melc_image_gallery` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_map`
--

CREATE TABLE `melc_map` (
  `id` bigint(20) NOT NULL,
  `map_number` smallint(6) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color` varchar(7) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_mediator`
--

CREATE TABLE `melc_mediator` (
  `id` bigint(20) NOT NULL,
  `user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cell_phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'0',
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'thumbnail.png',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_newsletter`
--

CREATE TABLE `melc_newsletter` (
  `id` bigint(20) NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_params`
--

CREATE TABLE `melc_params` (
  `id` bigint(20) NOT NULL,
  `expiration_time` smallint(6) NOT NULL COMMENT 'Tiempo de inactividad de la sesión para expirar en segundos',
  `temporized_session` bit(1) NOT NULL DEFAULT b'0' COMMENT 'Indica si la sesión es o no temporizada; por defecto, es 0 (no)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_place`
--

CREATE TABLE `melc_place` (
  `id` bigint(20) NOT NULL,
  `name` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `link` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `id_map` bigint(20) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_profile`
--

CREATE TABLE `melc_profile` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_profile_user`
--

CREATE TABLE `melc_profile_user` (
  `id` bigint(20) NOT NULL,
  `id_melc_profile` bigint(20) NOT NULL,
  `id_melc_user` bigint(20) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'0',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_social_network`
--

CREATE TABLE `melc_social_network` (
  `id` bigint(20) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'social-networks.png',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_user`
--

CREATE TABLE `melc_user` (
  `id` bigint(20) NOT NULL,
  `user` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cell_phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'0',
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'thumbnail.png',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_video`
--

CREATE TABLE `melc_video` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(4000) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'1',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `melc_access`
--
ALTER TABLE `melc_access`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_melc_profile_user` (`id_melc_profile_user`);

--
-- Indices de la tabla `melc_advertisement`
--
ALTER TABLE `melc_advertisement`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_carousel`
--
ALTER TABLE `melc_carousel`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_chronic`
--
ALTER TABLE `melc_chronic`
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
-- Indices de la tabla `melc_map`
--
ALTER TABLE `melc_map`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_mediator`
--
ALTER TABLE `melc_mediator`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `user` (`user`);

--
-- Indices de la tabla `melc_newsletter`
--
ALTER TABLE `melc_newsletter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `melc_params`
--
ALTER TABLE `melc_params`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_place`
--
ALTER TABLE `melc_place`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_map` (`id_map`);

--
-- Indices de la tabla `melc_profile`
--
ALTER TABLE `melc_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `melc_profile_user`
--
ALTER TABLE `melc_profile_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_melc_profile` (`id_melc_profile`),
  ADD KEY `id_melc_user` (`id_melc_user`);

--
-- Indices de la tabla `melc_social_network`
--
ALTER TABLE `melc_social_network`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_user`
--
ALTER TABLE `melc_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `melc_video`
--
ALTER TABLE `melc_video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `melc_access`
--
ALTER TABLE `melc_access`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;
--
-- AUTO_INCREMENT de la tabla `melc_advertisement`
--
ALTER TABLE `melc_advertisement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT de la tabla `melc_carousel`
--
ALTER TABLE `melc_carousel`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `melc_chronic`
--
ALTER TABLE `melc_chronic`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `melc_map`
--
ALTER TABLE `melc_map`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `melc_newsletter`
--
ALTER TABLE `melc_newsletter`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `melc_params`
--
ALTER TABLE `melc_params`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `melc_place`
--
ALTER TABLE `melc_place`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT de la tabla `melc_profile`
--
ALTER TABLE `melc_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `melc_profile_user`
--
ALTER TABLE `melc_profile_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `melc_social_network`
--
ALTER TABLE `melc_social_network`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `melc_user`
--
ALTER TABLE `melc_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `melc_video`
--
ALTER TABLE `melc_video`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `melc_access`
--
ALTER TABLE `melc_access`
  ADD CONSTRAINT `melc_access_ibfk_1` FOREIGN KEY (`id_melc_profile_user`) REFERENCES `melc_profile_user` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `melc_place`
--
ALTER TABLE `melc_place`
  ADD CONSTRAINT `melc_place_ibfk_1` FOREIGN KEY (`id_map`) REFERENCES `melc_map` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `melc_profile_user`
--
ALTER TABLE `melc_profile_user`
  ADD CONSTRAINT `melc_profile_user_ibfk_1` FOREIGN KEY (`id_melc_profile`) REFERENCES `melc_profile` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `melc_profile_user_ibfk_2` FOREIGN KEY (`id_melc_user`) REFERENCES `melc_user` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
