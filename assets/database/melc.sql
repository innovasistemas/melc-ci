-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-08-2018 a las 09:21:24
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
(2, 'sale a callejear', 'Cerca de 2.200 jóvenes han callejeado este años con Medellín en la Cabeza', b'1', ''),
(4, 'melc', 'El 60% de las personas que callejean con nosotros son mujeres', b'1', ''),
(18, 'recorridos', 'Hemos realizado más de 150 recorridos', b'1', '#!'),
(24, 'Nuevo video', 'El 83% de los jóvenes que participan en Medellín en la Cabeza pertenecen a los estratos 1, 2 y 3', b'1', ''),
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
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_image_gallery`
--

INSERT INTO `melc_image_gallery` (`id`, `name`, `description`, `logo`, `active`) VALUES
(1, '1', 'Comuna 14 El Poblado. Ruta: Somos educación, arte y cultura.', '1.jpg', b'1'),
(2, '2', 'Comuna 9 Buenos Aires. Ruta: Medellín en movimiento.', '2.jpg', b'1'),
(3, '3', 'Comuna 10 La Candelaria. Ruta: El centro: un lugar para descubrir.', '3.jpg', b'1'),
(4, '4', 'Comuna 3 Manrique. Ruta: Medellín sostenible', '4.jpg', b'1'),
(5, '5', 'Corregimiento de Santa Elena. Ruta: ¿Tiene Medellín campesinos?', '5.jpg', b'1'),
(6, '6', 'Comuna 6 Doce de Octubre. Ruta: Equipamientos públicos para la ciudadanía.', '6.jpg', b'1'),
(7, '7', 'Comuna 8 Villahermosa. Ruta: Medellín en movimiento', '7.jpg', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_map`
--

CREATE TABLE `melc_map` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_map`
--

INSERT INTO `melc_map` (`id`, `name`, `description`, `logo`, `creation_date`, `last_update`) VALUES
(1, 'Haciendo memoria para construir futuro', 'No se trata de darnos golpes de pecho, tampoco de quejarnos eternamente, ni de lamentarnos por las duras épocas de violencia que ha vivido nuestra ciudad. Esta ruta busca dignificar a las víctimas, para comprender lo que hemos permitido como sociedad y también para darnos la posibilidad de mirar con otros ojos esos lugares por los que pasamos cotidianamente y se convierten en paisaje, pese a que allí sucedieron acontecimientos importantes que marcaron nuestra historia. ¡Los jóvenes no son el futuro, son el presente! Y lo que hagamos conjuntamente permitirá construir una mejor ciudad cada día.', 'Memoria.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(2, 'Medellín en movimiento', 'Estamos seguros de que alguien que conoce y sabe utilizar el sistema de transporte público masivo de la ciudad tiene un alto porcentaje de éxito en conocerla y aprender de ella ¡Un transporte público incluyente, equitativo, seguro, sostenible y conectado a la intermodalidad es la mejor excusa para salir a callejear!', 'Movimiento.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(3, 'El centro: un lugar para descubrir', 'El centro de la ciudad es el territorio con menor número de población residente (aproximadamente 80.000), pero por sus calles pasan diariamente cerca de ¡1.2 millones de personas! Muchos de sus lugares convocan a miles de jóvenes cotidianamente: universidades, colegios, teatros, restaurantes, museos, parques, centros financieros y comerciales, clínicas y lugares de diversión nocturna ¡No te niegues la oportunidad de visitar un lugar lleno de historias y cultura!', 'Centro.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(4, '¿Tiene Medellín campesinos?', '¿Sabes qué porcentaje del suelo de Medellín es rural?, ¿cuáles son los corregimientos de nuestra ciudad y qué porcentaje de la población del municipio habita en estos territorios? ¿Sabes cómo se hace una silleta?, ¿qué hacen y venden en Altavista?, ¿qué se cultiva en San Cristóbal?, ¿qué corregimiento tiene un cable aéreo? Cuando tengas las respuestas a las preguntas anteriores, puedes hacerte muchas otras y podrás encontrar la respuesta a la pregunta ¿Tiene Medellín campesinos?', 'Campesinos.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(5, 'Medellín sostenible', 'Ojalá esta ruta motive reflexiones sobre qué consideras y en qué piensas cuando se habla de sostenibilidad. ¿Qué significa que algo sea sostenible?, ¿qué significó para nuestros ancestros el buen vivir? o ¿cuáles podrían ser las relaciones armónicas con la naturaleza? \nMuchos jóvenes tienen presente las últimas contingencias ambientales que ha vivido la ciudad y algunos ya generaron cambios en sus comportamientos y actitudes con la vida. Descubre, pregunta, aporta o imita aquellos comportamientos ciudadanos que nos permitan convivir y reducir nuestro impacto en el medio ambiente ¡Ah!  Pero no olvides que también existen la sostenibilidad social, económica, política, entre otras.\n', 'Sostenible.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(6, 'Equipamientos públicos para la ciudadanía', 'Nuestra ciudad puede estar orgullosa de contar con un importante número de equipamientos públicos en cada una de sus comunas y corregimientos. Parques, plazas, centros culturales, museos, sedes comunales, bibliotecas, UVA, placas polideportivas, parques lineales, instituciones educativas, unidades deportivas, jardín circunvalar y hasta cerros tutelares con reservas forestales. El reto de los jóvenes hoy bajarle al cemento y subirle a los contenidos, la programación, la oferta y las oportunidades de calidad que los ciudadanos pueden encontrar en estos equipamientos; hacer que lo construido socialmente permanezca en el tiempo ¿Cuántos equipamientos de ciudad visitas cotidianamente? ¿Conoces su oferta educativa, cultural y artística? Si no ¡¿qué estás esperando?!', 'Equipamientos.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(7, 'Somos educación, arte y cultura', 'Hoy existen muchas expresiones educativas, artísticas y culturales que van más allá de la institucionalidad, donde los jóvenes encontramos múltiples formas de manifestarnos con nuestros talentos y propuestas. No sólo se nos educa, también se aprende con nosotros, desde nuestra capacidad creativa, de innovación y transformación de procesos. Sabemos que la ciudad cuenta con una oferta diversa, numerosa y complementaria, y podemos afirmar que todos los días suceden actividades de este tipo en la ciudad.', 'Educacion.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(8, 'Territorios jóvenes nocturnos', 'Al caer la noche los ritmos cambian, pero aún nos queda mucha energía y buscamos alternativas para compartir. La noche no se puede asociar exclusivamente a la diversión, a la comida o al licor, también la aprovechamos para muchas otras actividades. En las noches algunos estudian, hacen deporte o se dedican a sus actividades productivas ¡La Medellín nocturna es una oportunidad para encontrarnos con los otros! Si eres de los que creen que en la noche hay que entrarse para la casa o la ciudad pierde la gracia, aquí te vamos a contar de muchos lugares que están llenos de vida en las noches.', 'Nocturnos.png', '2018-08-21 12:53:17', '0000-00-00 00:00:00'),
(9, 'Somos jóvenes, somos diversos.', 'La juventud es tan diversa como la humanidad misma, pero es necesario reconocerla, respetarla y protegerla, porque en ella está la riqueza presente y futura de nuestra sociedad y de nuestra ciudad. Nos gusta recorrer los lugares en los que habitan diferentes juventudes, ya sea por su preferencia sexual, su procedencia étnica, sus gustos musicales, religiosos o deportivos. Nuestros hobbies, saberes, capacidades e ideologías nos diferencian, pero nos dan muchos temas de qué hablar y motivos para conocernos.', 'Diversos', '2018-08-21 12:53:17', '0000-00-00 00:00:00');

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
(15, 'aañaa@uuu.xxx'),
(7, 'alquimia@gmail.com'),
(5, 'gomez1234@gmail.com'),
(6, 'jeremias@gmail.com'),
(4, 'maria1209@gmail.com'),
(2, 'mariamontes@yahoo.com'),
(19, 'nuevapruebacargaarchivo@gmail.com'),
(1, 'pedroalvarez@gmail.com'),
(11, 'qqqwww222@yahoo.es'),
(8, 'sdf'),
(13, 'ttee33@aa.dd'),
(3, 'victorcifuentesperez@hotmail.com'),
(20, 'xyz@zxy.yxz'),
(14, 'yy44'),
(18, 'zzz@zzz.zzz');

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
  `url` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `id_map` bigint(20) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_place`
--

INSERT INTO `melc_place` (`id`, `name`, `description`, `latitude`, `longitude`, `url`, `id_map`, `creation_date`, `last_update`) VALUES
(1, 'Museo Casa de la Memoria', '¿Sabes por qué es un museo y también una casa? ¿de qué memoria se habla allí? ¿mental, urbana, social, afectiva, del conflicto? En el entorno público de este museo, ubicado en el Parque Bicentenario, puedes encontrar un memorial con nombres y situaciones de victimización, unos totem sonoros, jardines de la memoria, un busto de Mahatma Ghandi ¡y hasta un árbol construido con cuchillos! Si vas a conocer sus salas internas reserva por lo menos 4 horas de tu día. ', 6.2459273, -75.5588449, 'https://goo.gl/maps/wwTFcFrSBVN2', 1, '2018-08-22 06:11:01', '0000-00-00 00:00:00'),
(2, 'Parque Biblioteca La Ladera', '¡¿Vas para la antigua cárcel de varones de la ciudad?! En 1921, un ingeniero belga, el mismo que construyó el Palacio de la Cultura, la Facultad de Derecho de la Universidad de Antioquia y la Iglesia del Sagrado Corazón, comenzó su construcción ¿Sabes cómo se llamaba el ingeniero? ¿desde cuándo se transformó en parque y en biblioteca?', 6.2506827, -75.5563988, 'https://goo.gl/maps/VcXFqzSzBwy', 1, '2018-08-22 06:11:01', '0000-00-00 00:00:00'),
(3, 'Cementerio de San Javier / Parque Biblioteca / Jardines de Resistencia / Casa Morada', 'En la ciudad de Medellín aún quedan algunos cementerios de barrio como los de El Rincón, Belén Miravalle, El Poblado y San Javier. Este último cada día transforma los hechos de muerte y dolor en ejercicios de memoria y vida. Allí podrás encontrar grafitis y jardines de resistencia que te hablarán de una nueva forma de mirar el conflicto en este territorio liderado por colectivos de jóvenes. \nCerquita están el Parque Biblioteca San Javier y las escaleras eléctricas donde se realiza un tour de grafitis como voz pública de estos barrios que perdonan, pero no olvidan.\n', 6.2540511, -75.6176208, 'https://goo.gl/maps/BisstfCDPx52', 1, '2018-08-22 06:17:31', '0000-00-00 00:00:00'),
(4, 'Escultura en homenaje a los jóvenes de Villatina (Parque del Periodista, Comuna 10)', '¿Te imaginas que una escultura pueda simbolizar la muerte de 9 jóvenes habitantes del barrio Villatina en pleno centro de la ciudad? ¿qué les sucedió a estos chicos? ¿sabes qué es una escultura de reparación simbólica? ¿quién ordenó al Estado a hacerla? Muchos de los jóvenes que callejean por el Parque del Periodista no saben por qué está allí, ojalá tu les puedas contar luego de visitarla.', 6.2492968, -75.5642994, 'https://goo.gl/maps/abYSJgL55aN2', 1, '2018-08-22 06:17:31', '0000-00-00 00:00:00'),
(5, 'Museo Cementerio San Pedro', 'Fue fundado en 1842 por familias adineradas de la ciudad que buscaron un lugar diferente al Cementerio de San Lorenzo (único hasta ese momento en la ciudad) para enterrar allí a sus familias en mausoleos. Pero ahora también es un museo donde se evidencian las diferencias existentes entre las clases sociales de nuestra ciudad y que ofrece una programación cultural y educativa ¿Te imaginaste alguna vez que un cementerio también podría ser museo?', 6.265659, -75.5633738, 'https://goo.gl/maps/Xna9e9a7Xu52', 1, '2018-08-22 06:22:14', '0000-00-00 00:00:00'),
(6, 'Jardín Cementerio Universal', 'Fue diseñado por el maestro Pedro Nel Gómez en 1936. En medio del Cementerio Israelita y del antiguo Cementerio La Candelaria (donde hoy está el Instituto de Medicina Legal) se encuentra el Jardín Cementerio Universal ¿Sabes por qué se llama así? ¿qué tipo de personas fueron las primeras en sepultarse en este lugar? ¿por qué se conoce como el cementerio de los NN? Tal vez visitar un cementerio no sea el mejor plan para muchos, pero ¡anímate a visitar los que te hemos mencionado y verás todas las historias interesantes que encontrarás', 6.2769211, -75.5757206, 'https://goo.gl/maps/xqLjfgCk9Hy', 1, '2018-08-22 06:22:14', '0000-00-00 00:00:00'),
(7, 'Edificio Mónaco', 'En este edificio se realizaron tres atentados explosivos contra la familia del capo de la mafia Pablo Escobar Gaviria. Hoy es un lugar por el que desfilan, varias veces al día, pequeñas giras turísticas con el afán amarillista de conocer la residencia de este sujeto que tanto daño le hizo a la sociedad ¡Ah! También es importante que conozcas un poco más de la historia y las consecuencias de una guerra declarada por la ilegalidad al gobierno y a la sociedad, y los miles de daños causó y las vidas con las que acabó.', 6.1912162, -75.5796313, 'https://goo.gl/maps/73kXsCoEjeL2', 1, '2018-08-22 06:26:20', '0000-00-00 00:00:00'),
(8, 'Pájaro de Botero', 'Debajo de esta escultura del maestro Fernando Botero, ubicada en uno de los parques públicos centrales de la ciudad, se ubicó un artefacto explosivo la noche del 10 de junio de 1999. Con su detonación murieron 23 personas y 99 más resultaron heridas, mutiladas y con cicatrices imborrables en su cuerpo y en su mente. Cinco años después, el artista no permitió que se retirara, donó un nuevo pájaro y pidió que se le nombrara Monumento a la estupidez ¿qué tal ese nombre?', 6.2457364, -75.5681838, 'https://goo.gl/maps/ApjSope1PS72', 1, '2018-08-22 06:26:20', '0000-00-00 00:00:00'),
(9, 'Universidad de Antioquia', '¿Sabes porqué hay una plazoleta que se llama Plazoleta Barrientos en la Universidad de Antioquia? ¿por qué se encuentran allí los bustos de varios docentes y quiénes fueron? ¿qué les sucedió? ¿quién fue Gustavo Adolfo Muñoz y por qué un auditorio lleva su nombre? o ¿Hernán Henao? La Universidad, en su objetivo de transformar la sociedad, ha sido escenario de duras confrontaciones del pensamiento y, lastimosamente, de muertes por esta causa. Sus memorias hablan ya de más de 200 años de nuestra historia.', 6.2457341, -75.5681839, 'https://goo.gl/maps/amAWw5mWUCS2', 1, '2018-08-22 06:27:56', '0000-00-00 00:00:00'),
(10, 'Metro y cables ', 'Acceder al Sistema Metro es tener la posibilidad de ir al sur y al norte del Valle de Aburrá en poco tiempo y en un solo trayecto, o pasar por municipios vecinos como Envigado, Itagüí, La Estrella o Bello. Nos permite también llegar a algunas laderas del oriente y del occidente de la ciudad en el sistema de cables y alimentadores.', 6.2649106, -75.6383117, 'https://goo.gl/maps/m2f6fk2nYYB2', 2, '2018-08-22 12:26:38', '0000-00-00 00:00:00'),
(11, 'Avenida La Playa', 'La peatonalización de La Playa es el eje central de la futura Red Caminera del Centro. Desde esta vía se accede a las siguientes vías peatonales: Junín, La Bastilla y, a través de la calle Córdoba, que también será peatonal, se accede al paseo urbano más grande de Medellín: El Tranvía de Ayacucho.', 6.2482097, -75.5645807, 'https://goo.gl/maps/5ixuYhMrrTU2', 2, '2018-08-22 12:26:38', '0000-00-00 00:00:00'),
(12, 'Tranvía de Ayacucho', '¡Este sistema ha sido muy importante para Medellín en la Cabeza! Lo utilizamos para subir hasta el barrio La Sierra y Villa Turbay y así evidenciamos la alternancia entre la Red Caminera, el tranvía y el sistema de cables. Desde el sistema del tranvía también nos gusta visitar la galería de arte a cielo abierto con más de 32 obras en su entorno y el trayecto conocido como corredor gastronómico.', 6.2569851, -75.6470032, 'https://goo.gl/maps/BFPSLJBy1J72', 2, '2018-08-22 12:33:13', '0000-00-00 00:00:00'),
(13, 'Metroplús de Belén y sus rutas alimentadoras', 'Este sistema llega incluso hasta al corregimiento de Altavista y específicamente a las veredas Buga y Manzanillo, se conecta con la línea A en la Estación Industriales y en las estaciones Hospital y Cisneros con el Metroplús hacia el sector de Manrique (La 45).', 6.231251, -75.577633, 'https://goo.gl/maps/sTkXuEzaghm', 2, '2018-08-22 12:33:13', '0000-00-00 00:00:00'),
(14, 'Encicla', 'La ciudad cuenta con más de 50 estaciones de bicicletas públicas que se pueden utilizar con la tarjeta cívica del Metro. Es un maravilloso sistema para recorrer trayectos cortos y siempre se encuentran en zonas aledañas a ciclorrutas. En bici puedes acceder a equipamientos públicos, instituciones educativas, parques, plazas, UVA y sedes culturales y artísticas de diferentes organizaciones.', 6.2589828, -75.6470033, 'https://goo.gl/maps/jAvGds6dL332', 2, '2018-08-22 12:34:52', '0000-00-00 00:00:00'),
(15, 'Parque de Berrío', '¿Sabes cuál es la importancia de este parque y cómo era antes de tener una gigante estación del Metro? ¿qué grupo de mujeres, desde hace más de 15 años, se encuentra todos los miércoles al mediodía en el atrio de la Iglesia La Candelaria? ¿de quién es la escultura ubicada en el centro del parque? ¿cómo se llamaba antes el Parque de Berrio? Estas son algunas de las preguntas que puedes plantearte antes de visitar este lugar.', 6.2500271, -75.570322, 'https://goo.gl/maps/1fusBE8a1wq', 3, '2018-08-22 12:42:46', '0000-00-00 00:00:00'),
(16, 'Banco de La República', 'En el costado sur del Parque de Berrío se encuentra la sucursal Medellín del Banco de la República, el más importante del país y de propiedad del Estado (¡o sea de todos nosotros!) Para más pistas, es el que luce a la famosa escultura que se conoce popularmente como la Gorda de Botero (su nombre original fue Mujer sin Cabeza). \nEn una de sus torres se encuentra el área cultural del banco que promueve diversos procesos culturales del país ¡Sácale tiempo, no te arrepentirás!\n', 6.2494548, -75.5705354, 'https://goo.gl/maps/nwTJoMHokUx', 3, '2018-08-22 12:42:46', '0000-00-00 00:00:00'),
(17, 'Distrito Patrimonial San Ignacio', '¿Sabes cuáles edificios o lugares conforman el Distrito Patrimonial San Ignacio? ¿de qué año es la Ceiba ubicada en la esquina de Ayacucho? ¿quienes fueron los primeros habitantes del Claustro y qué colegio fundaron? ¿de dónde viene la palabra claustro? y ¿Paraninfo? Estas son solo unas cuantas de las mil preguntas que puede inspirarte esta zona ¡Ve con tiempo porque seguro lo vas a necesitar pero, aún más seguro, lo disfrutarás!\n', 6.2467651, -75.5650027, 'https://goo.gl/maps/P4tHL5YMTUG2', 3, '2018-08-22 12:47:52', '0000-00-00 00:00:00'),
(18, 'Otros lugares para callejear en El Centro', 'Galería Bolívar / Plazuela La Veracruz/ Edificio Víctor / Casa del Encuentro / Museo de Antioquia / Mercado Abierto de Tejelo / Plazuela Rojas Pinilla / La Bachue Parque de Boston / Parque Obrero / Escultura Esfera Pública / Placita de Flórez / Teatro El Trueque / Comando de Policía / Parque e Iglesia de San Antonio / Taberna Diógenes / Palacio de Bellas Artes / CEFA / Pequeño Teatro / Piscina desarenadora / Antiguo Café Cyrano (Reunión de los Pánidas) ¡De resto, el reto es tuyo, tan tuyo como El Centro de Medellín!', 6.2439346, -75.5738133, 'https://goo.gl/maps/FsM34976Jik', 3, '2018-08-22 12:47:52', '0000-00-00 00:00:00'),
(19, 'Plaza de Mercado de La América', 'En la ciudad existieron varias plazas de mercado donde las pasadas generaciones iban de costal y canasta a comprar productos frescos y recién traídos de zonas rurales. La Plaza de La América es una sobreviviente, pues otras desaparecieron y fueron reemplazadas por supermercados y almacenes de cadena. Además de ir a mercar ¿qué más puedes encontrar en la Plaza de la América? ¡Es un tesorito sostenible y campesino de la ciudad!', 6.251926, -75.6009126, 'https://goo.gl/maps/PAvYic8H1mD2', 4, '2018-08-22 13:02:55', '0000-00-00 00:00:00'),
(20, 'Placita de Flórez', '¡Sí, Flórez con “z”, no está mal escrita! Es que su nombre no se debe a la cantidad de flores que bajaban en silletas humanas desde el Corregimiento de Santa Elena, sino a que quien donó el predio para su construcción fue Don Rafael Flórez. Antes de ser la primera plaza de mercado cubierta en la ciudad, fue patronato de trabajadores, convento religioso y hasta circo de toros (no plaza) ¡Tendremos que averiguar también la diferencia entre un circo y una plaza de toros!', 6.245461, -75.5618417, 'https://goo.gl/maps/bpEs7fdwQ4L2', 4, '2018-08-22 13:02:55', '0000-00-00 00:00:00'),
(21, 'Otros lugares que puedes visitar', 'Palmitas: Asociación de Mujeres de Palmitas - Biblioteca pública - Red Corregimental de Jóvenes - Alguna de las fincas de los campesinos asociados a Campo vivo. Santa Elena: Parque Arví - Centralidad Vereda Mazo con su importante proyecto Sapiencia. Altavista: La Casa Museo y las huertas de la Vereda Manzanillo Crea tu propia lista de lugares corregimentales o te contáctate con la Gerencia de Corregimientos quienes impulsan un importante proyecto de Turismo Rural Comunitario.', 6.3500098, -75.7087648, 'https://goo.gl/maps/RsjN8AERfH62', 4, '2018-08-22 13:05:43', '0000-00-00 00:00:00'),
(22, 'Universidad Nacional de Colombia (Agronomía)', 'En el campus de Agronomía, que en su interior guarda un oasis ambiental de flora y fauna, puedes encontrar el Palmetum, que es la colección de palmas vivas más grande y diversa del país. Igualmente, el Arboretum, que es una colección de árboles de muchos lugares del mundo que posee la Universidad y, además de servir de hábitat para muchas especies de aves, también es el motivo de muchas investigaciones forestales.', 6.2609775, -75.5766487, 'https://goo.gl/maps/EuZ1i5pmfdL2', 5, '2018-08-22 14:05:17', '0000-00-00 00:00:00'),
(23, 'Barrio Carlos E. Restrepo', 'Esta unidad residencial construida en los años 70 se consolida como otro gran pulmón de la ciudad, pues en él reposan cerca de 1.800 árboles que hacen parte del importante corredor verde Cerro El Volador, Universidad Nacional, Carlos E. Restrepo y Suramericana. ', 6.2577165, -75.5890918, 'https://goo.gl/maps/kqWeLF8Mw4w', 5, '2018-08-22 14:05:17', '0000-00-00 00:00:00'),
(24, 'Cerro El Volador', 'Es tal vez el más cerro tutelar mejor conservado y arborizado de los siete con que cuenta la ciudad. En este oasis en medio de la ciudad se puede visitar el mariposario al aire libre, un vivero pedagógico, la estación de abejas angelito y varios miradores desde donde se puede tener hermosas panorámicas a la ciudad ¡Sin duda es un patrimonio natural y arqueológico!', 6.264745, -75.5847107, 'https://goo.gl/maps/ZJYdfCTowoN2', 5, '2018-08-22 14:08:08', '0000-00-00 00:00:00'),
(25, 'Morro de Moravia', 'Moravia es una flor, dice “Mamá Chila”, quien orienta los recorridos por el barrio que hace unas décadas fue un basurero a cielo abierto y donde se asentaron numerosas familias de manera precaria. Varios años de intervención y la reubicación de la gran mayoría de ellas permitió que el morro hoy sea un gran jardín coronado en su cima con un vivero de plantas ornamentales liderado por mujeres que, además de ofrecer la guía y vender plantas, cuentan una historia de resistencia y perseverancia características de este barrio.', 6.2771457, -75.5700965, 'https://goo.gl/maps/4t4ArpPnwGp', 5, '2018-08-22 14:08:08', '0000-00-00 00:00:00'),
(26, 'Parque de las pacas – Belén Fátima\r\n', 'Un pequeño grupo de empeliculados con el tema de la sostenibilidad y el problema de las basuras, se dieron a la tarea de explorar estrategias reales y posibles de implementar contando con las dinámicas de la ciudad. Aprovechando los espacios disponibles en su entorno, crearon un proyecto de compostaje con la técnica denominada Pacas bio-digestoras Silva. Con estas han logrado tratar más de 4 toneladas de residuos orgánicos que producen en sus casas ¿Alguna vez habías pensado qué pasa con la basura que produces?', 6.2372616, -75.5858295, 'https://goo.gl/maps/FseJ2PNDUKr', 5, '2018-08-22 14:34:42', '0000-00-00 00:00:00'),
(27, 'Otros lugares de Medellín Sostenible para visitar', 'Jardín Circunvalar / Cerro Pan de Azúcar / Huertas caseras del Parque Biblioteca de San Cristóbal / Mercado Col y flor / Red de Huerteros Casa de la Cultura Los Alcázares / Barrio Naranjal.', 6.2470025, -75.5375514, 'https://goo.gl/maps/RtCV6oxpGUp', 5, '2018-08-22 14:34:42', '0000-00-00 00:00:00'),
(28, 'Piscina skater (Corregimiento San Antonio de Prado)', '¿Dónde practicaban antes los skaters en el corregimiento? ¿qué motivó esta práctica? ¿cómo hicieron para solucionar esta tensión generacional en el corregimiento? ¿qué otros equipamientos están cerca de la nueva piscina skater del corregimiento? ¡Detrás de este parche encontrarás la historia de una transformación concertada del territorio!', 6.1812389, -75.6570257, 'https://goo.gl/maps/LWKKpQyZikL2', 6, '2018-08-28 02:29:21', '0000-00-00 00:00:00'),
(29, 'Parque Biblioteca Fernando Botero (Corregimiento de San Cristóbal)', 'Este Parque tiene una escultura del maestro Fernando Botero ¿Sabes qué escultura es? La propuesta arquitectónica de este edificio dejó la posibilidad de tener varias zonas verdes en su entorno ¿sabes qué servicios y actividades le ofrece la biblioteca a sus vecinos? Todas las respuestas se podrían encontrar en internet, pero te perderías la sensación y la experiencia de estar allí.', 6.2779302, -75.6387827, 'https://goo.gl/maps/7U6frVBiZRq', 6, '2018-08-28 02:43:32', '0000-00-00 00:00:00'),
(30, 'Biblioteca del Corregimiento de San Sebastián de Palmitas', 'Es una de las bibliotecas corregimentales que sirve también como referente y lugar de encuentro para buena parte de la población que allí reside. Hace parte del Sistema de Bibliotecas de la ciudad y si allá está un libro que quieres leer te lo pueden enviar pero, ¡mejor ir hasta allá por él!', 6.3431908, -75.6903934, 'https://goo.gl/maps/GeBmBHtsXiy', 6, '2018-08-28 02:54:21', '0000-00-00 00:00:00'),
(31, 'Parque Arví (Corregimiento de Santa Elena)', 'Este equipamiento ubicado en el corregimiento de Santa Elena recibe miles de visitantes cada día que llegan en el Metrocable o en el sistema de transporte público del corregimiento. Cuenta con senderos, parques de diversiones de las cajas de compensación familiar, zona de picnic, exposición de hallazgos arqueológicos, mercado campesino ¡y hasta laguna!', 6.2891079, -75.5115368, 'https://goo.gl/maps/tdQBt97c5eG2', 6, '2018-08-28 02:57:50', '0000-00-00 00:00:00'),
(32, 'Centralidad Barrio El Salado', 'Esta importante zona de la Comuna 13 es un referente de la transformación de la ciudad. Cancha de futból, colegio de calidad, casa de justicia, UVA y senderos para caminar rodean a su biblioteca comunitaria para hacer de este espacio un punto de encuentro donde los vecinos se conocen, se integran y, por ende, se respetan.', 6.2548476, -75.6280696, 'https://goo.gl/maps/U3tEZc98NaE2', 6, '2018-08-28 03:02:59', '0000-00-00 00:00:00'),
(33, 'Parque Biblioteca 12 de octubre', 'Este fue uno de los últimos parques biblioteca en entregarse en la ciudad. Pero también uno de los más completos por su diversidad. Está ubicado en el barrio del mismo nombre y sirve a muchos barrios cercanos, entre ellos El Progreso 1 y 2, El Triunfo y Santander. Lleva como nombre Gabriel García Márquez en homenaje a nuestro premio Nobel y cuenta con una sala de ensayo y grabación para grupos musicales de la zona, sala de danza, ludoteca, teatro, sala de exposiciones, aulas de capacitación, entre otros espacios ¡Este lugar está imperdible!', 6.304305, -75.5803627, 'https://goo.gl/maps/yMTSTYwda5U2', 6, '2018-08-28 03:06:36', '0000-00-00 00:00:00'),
(34, 'Centralidad Mazo (Corregimiento de Santa Elena)', 'Este equipamiento cuenta con diversos espacios de capacitación y servicio donde tienen asiento muchas dependencias municipales. El área destinada a Sapiencia cuenta con más de 30 equipos de cómputo que la comunidad vecina puede utilizar. Pero lo más novedoso, sin duda, es la sala de capacitación con metodología LEGO Educación, con la cual pueden aprender desde niños, jóvenes y adultos ¡Vale la pena visitar Santa Elena, no solo durante la Feria de las Flores!', 6.245076, -75.5026948, 'https://goo.gl/maps/sTLvgpG6NVp', 6, '2018-08-28 03:16:58', '0000-00-00 00:00:00'),
(35, 'Biblioteca Pública Piloto', '¡Esta biblioteca es el corazón del Sistema de Bibliotecas de la ciudad! Este equipamiento de ciudad es un edificio patrimonial de la ciudad identificado como bien de interés cultural. Sin duda, muchos de tus recorridos podrían pasar por este renovado edificio, que tiene como misión recuperar su liderazgo y representación en la movida cultural y educativa de la ciudad. La piloto fue, es y será el lugar indicado para aquellos que disfrutan de la cultura, el conocimiento y la expresión artística.', 6.2554459, -75.5799932, 'https://goo.gl/maps/jMgUKkqW6ZN2', 6, '2018-08-28 03:20:19', '0000-00-00 00:00:00'),
(36, 'Centro Cultural Moravia', 'Ubicado en el norte de la ciudad, sobre la carrera Carabobo, en el barrio Moravia, es un referente cultural y arquitectónico, pues sus diseños fueron donados por Rogelio Salmona, un arquitecto bogotano y quizás uno de los más importantes del país. Su diseño y construcción busca hacer algo muy lindo y funcional que demuestre que, cuando a la ciudadanía se le entregan espacios trabajados concertadamente, esta responde con comportamientos éticos y se apropia de su sostenibilidad y cuidado.', 6.27652, -75.5668187, 'https://goo.gl/maps/AGqXTRchKyo', 6, '2018-08-28 03:24:14', '0000-00-00 00:00:00'),
(37, 'Museo de Antioquia', 'Este equipamiento se consolida en el antiguo edificio donde funcionó la Alcaldía y el Concejo Municipal de la ciudad. En su interior se encuentra una de las colecciones de arte más importantes del país y en sus muros varios de los frescos del maestro Pedro Nel Gómez. El museo que estuvo a punto de ser uno de los equipamientos en abandonar El Centro, pero muchas voces se sumaron para invitarlo a quedarse y muchos esfuerzos y recursos unieron para que pudiera ser lo que es hoy ¡Y la donación del maestro Botero fue el moño de este maravilloso regalo para la ciudad!', 6.2523907, -75.5710995, 'https://goo.gl/maps/QykF9aGtJVv', 6, '2018-08-28 03:32:49', '0000-00-00 00:00:00'),
(38, 'Otros Equipamientos para visitar:', 'Parque Biblioteca San Antonio de Prado / UVA El Paraíso / Parque San Antonio/ Parque Biblioteca San Javier / Núcleo de Vida Ciudadana del Barrio La Esperanza (Castilla).', 6.177062, -75.6567097, 'https://goo.gl/maps/nva7ghVECB62', 6, '2018-08-28 03:35:21', '0000-00-00 00:00:00'),
(39, 'Talla de reyes. (Jóvenes de la Vereda La Loma San Cristóbal) ', 'Esta vereda fue estratégica en la comunicación entre Medellín y el occidente antioqueño, porque era la vía que comunicaba a Medellín con la zona de Urabá y, consecuentemente, fue el territorio por donde varios grupos armados quisieron llevar el conflicto rural a lo urbano. Ahora trabaja allí el colectivo Talla de Reyes que comenzó como una expresión juvenil que, desde el grafiti urbano, plasmó mensajes de resistencia y resiliencia. Su lema es: La loma no es como la pintan.', 6.272146, -75.6331867, 'https://goo.gl/maps/MFvB9RrjDC22', 7, '2018-08-28 13:44:05', '0000-00-00 00:00:00'),
(40, 'I.E. Jesus Maria Valle', 'Esta institución educativa, localizada en la base del Cerro Picacho en el barrio del mismo nombre, tiene como principio de acción la defensa de los derechos humanos. ¿Sabes quién fue Jesús María Valle? ¿Por qué un colegio en la Comuna 6 lleva su nombre? ¿Sabes qué es una mesa de DDHH? Ahí te dejamos la inquietud.', 6.300633, -75.5843267, 'https://goo.gl/maps/pAAQZBu45aS2', 7, '2018-08-28 13:46:59', '0000-00-00 00:00:00'),
(41, 'Teatro al Aire Libre de Pedregal', 'Este lugar localizado en el barrio Pedregal es el único teatro al aire libre registrado en el inventario municipal. Si te interesan las artes circenses, este es un buen lugar para incluir en tus callejeadas. Además, en sus instalaciones encuentras un excelente estudio de grabación y unos ‘empeliculados’ para produciendo y sacando adelante muchos sueños musicales. No en vano hace varios años comenzaron con el Festival Rock del barrio Castilla y este permanece activo como propuesta cultural para la ciudad.', 6.3025589, -75.5736187, 'https://goo.gl/maps/PAbDh9nquen', 7, '2018-08-28 13:56:41', '0000-00-00 00:00:00'),
(42, 'Teatro Pablo Tobón Uribe', '¿Sabes cuántos años de funcionamiento continuo cumplió el teatro? ¿cuál es slogan de este equipamiento cultural? ¿Sabías que otro teatro quiso reemplazarlo? ¿quién fue su arquitecto y diseñador? Si no conoces todas las actividades que allí se realizan ¡anímate a visitarlo porque es uno de los lugares imperdibles de El Centro!', 6.2475208, -75.5614637, 'https://goo.gl/maps/3s4Jj8WYmH32', 7, '2018-08-28 13:58:55', '0000-00-00 00:00:00'),
(43, 'Corredor de Arte Urbano de Ayacucho', 'La historia de Medellín se puede leer en las diversas expresiones artísticas de este corredor, y es solo uno de los varios lugares en la ciudad donde esta forma de expresión tiene una presencia importante. Además tuvo una gran difusión gracias a la apertura y funcionamiento del Tranvía de Ayacucho ¡Te podemos asegurar que si te vas a callejear  por este corredor, vuelves a tu casa con muy buenas fotos!', 6.2428185, -75.5588212, 'https://goo.gl/maps/o42eipxMVwQ2', 7, '2018-08-28 14:04:00', '0000-00-00 00:00:00'),
(44, 'La Esquina Radio', 'La emisora comunitaria de Medellín, o sea nuestra emisora, la de todos, se encuentra en el barrio Prado Centro. Allí se realizan producciones radiales concertadas con grupos e iniciativas comunitarias de diferentes comunas. Sintoniza 101.4 FM ¡y luego vas a hacerles la visita!', 6.2550017, -75.5618128, 'https://goo.gl/maps/Sdb7nGbW8yK2', 7, '2018-08-28 14:08:16', '0000-00-00 00:00:00'),
(45, 'Otros lugares para visitar:', 'Corporación Picacho Con Futuro / Grupo de punk Desadaptadoz / Edificio Cultural de la Cámara de Comercio donde está la Emisora Cultural Cámara FM / Latina Stereo / Antigua UPB (Hoy Universidad Antonio Nariño) / Casa de la Cultura Santader / Institución Universitaria Bellas Artes / Taberna Diógenes / Pabellón del Agua / Restaurante Cyrano / Centro Cultural Homero Manzi / Plazuela San Ignacio / Calle del Codo.', 6.2470608, -75.5643377, 'https://goo.gl/maps/rJBRqqHS1To', 7, '2018-08-28 14:11:41', '0000-00-00 00:00:00'),
(46, 'Unidad Deportiva Miraflores', '¿Sabes dónde se comenzó a practicar el fútbol en Medellín? ¿en qué año y qué comunidad lo impulsó? ¡La cancha de futbol de Miraflores vio crecer a los primeros futbolistas de la ciudad! Ahora se complementa con otros espacios deportivos y hasta con una casa para practicar música. Te vas a sorprender cuando observes la cantidad de personas practicando algún deporte durante la noche en este barrio. ', 6.2411109, -75.5506017, 'https://goo.gl/maps/NiDktgpJTmD2', 8, '2018-08-28 15:21:42', '0000-00-00 00:00:00'),
(47, 'Torres de Marco Fidel Suárez', 'Tal vez con ese nombre no tienes no idea de qué torres son esas, pero ¿si te decimos Torres de Bomboná?, seguramente ya sabes cuáles son. Aunque casi todos las conocemos con ese nombre, realmente Bomboná es el nombre de solo una de las torres. Bueno, pero lo que más nos interesa es que en la parte de debajo de estas torres hay lugares para ir a escuchar música, tomarse algo rico y está el Teatro Porfirio Barba Jacob ¿ese ya lo conocías?', 6.2411106, -75.5659227, 'https://goo.gl/maps/rN1e4avQnnH2', 8, '2018-08-28 15:26:27', '0000-00-00 00:00:00'),
(48, 'Corredor Gastronómico de Ayacucho', 'Al igual que el corredor de arte urbano, este corredor se hizo visible con la llegada del nuevo Tranvía de Ayacucho. Sin embargo, este corredor gastronómico ha existido desde hace muchas décadas, donde la chunchurria es uno de los alimentos más solicitados en cada esquina del sector conocido como Buenos Aires. Pero también las famosas tortas negras (bizcochos) y el helado artesanal “Amoracuyá”, ganador de reconocimientos internacionales. También encuentras empanadas, comida de mar en un exclusivo mercado de estilo europeo ¿Ya se te hizo agua la boca? ¡La calle te espera!', 6.2425527, -75.5584788, 'https://goo.gl/maps/tKSee4kZ76D2', 8, '2018-08-28 15:30:21', '0000-00-00 00:00:00'),
(49, 'I.E. Héctor Abad Gómez', 'En la noche también se estudia ¡y mucho! La realidad social y económica de la ciudad hace que gran parte de la población joven deba trabajar en horario diurno y avanzar en sus estudios en la noche. El Hector Abad Gómez es uno de los colegios de calidad de la ciudad y presta sus servicios de bachillerato nocturno a jóvenes de toda la ciudad. Parque de ‘La Mila’ Ese es el nombre que le dimos de cariño, pero el nombre real es Parque de La Milagrosa. Un tradicional parque que se convirtió en un subcentro de la ciudad con servicios de todo tipo: supermercados, tiendas de barrio, bancos, estaciones de gasolina y los infaltables lugares de comida rápida.', 6.2454594, -75.5620535, 'https://goo.gl/maps/UNvZUwc7V8Q2', 8, '2018-08-28 15:35:21', '0000-00-00 00:00:00'),
(50, 'Otros lugares para callejear en la noche:', 'Unidad Deportiva Atanasio Girardot / Boulevard de la carrera 68 en Castilla / Glorieta de la Vida en el Teatro Pablo Tobón Uribe / Parque del Periodista / Plazuela de San Ignacio / Casa de la Cultura Barrio Ávila.', 6.2492968, -75.5642994, 'https://goo.gl/maps/qaKW4BKuGG92', 8, '2018-08-28 15:39:40', '0000-00-00 00:00:00'),
(51, 'Plazoleta de la Nueva Villa de Aburrá', 'Esta plazoleta con forma de herradura se construyó en la segunda etapa de la urbanización de la Nueva Villa de Aburrá a comienzos de los años 80. Hoy es lugar de encuentro de jóvenes amantes de diferentes tendencias del rock. El street workout, escuelas de pensamiento como de la Fernando González, los amantes del juego "Mil espadas" y el ya institucionalizado concierto del Grupo Suramérica para despedir el año, se dan cita en este espacio', 6.2350287, -75.6040404, 'https://goo.gl/maps/BCAFSVV4acR2', 9, '2018-08-29 12:37:38', '0000-00-00 00:00:00'),
(52, 'Granja Somos Gente (Corregimiento de San Cristóbal)', 'Este lugar alberga a población en condición de calle que adelanta su proceso de reintegración a la sociedad. Allí, mediante cultivos agrícolas y actividades complementarias, pasa los días y las noches este grupo poblacional que tiene mucho que aportar a los jóvenes desde su experiencia de vida.', 6.2110582, -75.5751874, 'https://goo.gl/maps/Zo97du7MEKG2', 9, '2018-08-29 12:42:40', '0000-00-00 00:00:00'),
(53, 'Unidad Deportiva Atanasio Girardot', 'La unidad deportiva de la ciudad es un espacio donde las noches están vivas hasta muy tarde. Jóvenes que practican de manera competitiva alguna disciplina deportiva, se recrean con una actividad física despreocupada o se enfrenta a las peripecias de un skate, una bici o unos patines, se encuentran allí. Y ni hablar de los aficionados al fútbol que dejan escapar sus emociones por el amor a su camiseta. Es una pasión que ha intentado convertirse en acciones creadoras, creativas y ciudadanas para superar el estigma que cargan las palabras hincha o barra.', 6.256864, -75.5923187, 'https://goo.gl/maps/XjArBjc42762', 9, '2018-08-29 12:45:38', '0000-00-00 00:00:00'),
(54, 'Centro de formación Los Pomos', 'Las creencias religiosas pueden ser el motor de vida para muchos y la diversidad de estas creencias en la ciudad es lo que la hace fascinante y nos impulsa ser mejores personas cada día. En este lugar se desarrolla el programa Animadores de la Juventud que son jóvenes católicos comprometidos con la vida, la vocación y el servicio. Cada uno recibe una formación integral que le permite replicar la experiencia a otros jóvenes.', 6.229265, -75.5503717, 'https://goo.gl/maps/rtqAWWxnpqM2', 9, '2018-08-29 12:49:54', '0000-00-00 00:00:00'),
(55, 'Parque de los Deseos', 'Este lugar está ubicado estratégicamente en el sector Carabobo Norte, debajo de la Estación Universidad del Metro, se convirtió en el referente de encuentro para buena parte de la población LGBTI de la ciudad. Allí, con la diversa oferta cultural de la Fundación EPM, la Universidad de Antioquia, la Alcaldía y otras instituciones, esta población encontró un lugar donde la diversidad es respetada.', 6.2684353, -75.5682742, 'https://goo.gl/maps/6dzTSQFQg3P2', 9, '2018-08-29 13:00:30', '0000-00-00 00:00:00'),
(56, 'Corporación Carabantú Afrocolombiana de Desarrollo Social y Cultural ', 'La Corporación Afrocolombiana de Desarrollo Social y Cultural está localizada en el barrio Los Ángeles y trabaja por la reivindicación, reconocimiento y fortalecimiento de la labor de la mujer y los derechos de la población afrocolombiana en Medellín, mediante la implementación de acciones en contra del racismo y la xenofobia; la promoción de la etno-educación afrocolombiana y la cátedra de estudios afrocolombianos.', 6.251233, -75.561925, 'https://goo.gl/maps/PUyywcSsH1T2', 9, '2018-08-29 13:04:59', '0000-00-00 00:00:00'),
(57, 'Esquina del Raudal', 'Este lugar es otra expresión de la diversidad en la ciudad. Por décadas ha sido un espacio donde se ha ejercido la prostitución, pero que no ha escapado a la visita de la poesía, la música, el baile y el encuentro de amigos bohemios. Un lugar del que han salido importantes exponentes de la literatura como Mario Escobar Velásquez con algunos de sus cuentos.', 6.252932, -75.5708444, 'https://goo.gl/maps/XXgZFVe3EC72', 9, '2018-08-29 13:10:34', '0000-00-00 00:00:00'),
(58, 'Exploratorio', 'Este es un espacio lleno de empeliculados buscando cómo inventar algo nuevo ¿Ya habías escuchado algo sobre un lugar así? Toma el Metro, llega al Parque Explora y en sus afueras, con entrada gratis, vas a encontrar tal vez a alguien tan empeliculado como tú. Los jóvenes buscamos maneras para innovar en diversos procesos para que se acoplen a nuestros ritmos y a nuestras inquietudes. Allí también encontrarás experiencias con sonido, amplificación, generación alternativa de energías, stop motion, escuchas remotas, entre otras. En fin, ¡como para creerse científico!', 6.2698761, -75.5681568, 'https://goo.gl/maps/ap9iHLs75St', 9, '2018-08-29 13:19:35', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_profile`
--

CREATE TABLE `melc_profile` (
  `id` bigint(20) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_profile`
--

INSERT INTO `melc_profile` (`id`, `name`, `description`, `creation_date`, `last_update`) VALUES
(1, 'administrador', 'administrador del sistema con todos los permisos', '2018-08-14 15:21:54', NULL),
(2, 'mediador', 'rol principal en el proyecto melc', '2018-08-14 15:21:54', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `melc_profile_user`
--

CREATE TABLE `melc_profile_user` (
  `id` bigint(20) NOT NULL,
  `id_melc_profile` bigint(20) NOT NULL,
  `id_melc_user` bigint(20) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `melc_profile_user`
--

INSERT INTO `melc_profile_user` (`id`, `id_melc_profile`, `id_melc_user`, `creation_date`, `last_update`) VALUES
(0, 1, 1, '2018-08-15 04:27:16', NULL);

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

--
-- Volcado de datos para la tabla `melc_user`
--

INSERT INTO `melc_user` (`id`, `user`, `password`, `name`, `address`, `phone`, `cell_phone`, `email`, `birth_date`, `active`, `description`, `logo`, `creation_date`, `last_update`) VALUES
(1, 'admin', 'admin', 'administrador', '', '', '', '', '0000-00-00', b'1', '', 'thumbnail.png', '2018-08-15 04:22:19', NULL),
(2, 'edwin', 'edwin', '', '', '', '', '', '0000-00-00', b'1', '', '01_EDWIN_MED.png', '2018-08-15 04:33:26', NULL),
(3, 'darlin', 'darlin', '', '', '', '', '', '0000-00-00', b'1', '', '02_DARLIN_MED.png', '2018-08-15 04:33:26', NULL),
(4, 'evelyn', 'evelyn', '', '', '', '', '', '0000-00-00', b'1', '', '04_EVELYN_MED.png', '2018-08-15 04:35:49', NULL),
(5, 'katherine', 'katherine', '', '', '', '', '', '0000-00-00', b'1', '', '05_KATHERINE_MED.png', '2018-08-15 04:35:49', NULL),
(6, 'carlos', 'carlos', '', '', '', '', '', '0000-00-00', b'1', '', '06_CARLOS_MED.png', '2018-08-15 04:38:00', NULL),
(7, 'didier', 'didier', '', '', '', '', '', '0000-00-00', b'1', '', '07_DIDIER_MED.png', '2018-08-15 04:38:00', NULL),
(8, 'luis', 'luis', '', '', '', '', '', '0000-00-00', b'1', '', '09_LUIS_MIGUEL_MED.png', '2018-08-15 04:39:40', NULL),
(9, 'manuela', 'manuela', '', '', '', '', '', '0000-00-00', b'1', '', '11_MANUELA_MED.png', '2018-08-15 04:39:40', NULL),
(10, 'anton', 'anton', '', '', '', '', '', '0000-00-00', b'1', '', '12_ANTON_MED.png', '2018-08-15 04:40:47', NULL),
(11, 'dalia', 'dalia', '', '', '', '', '', '0000-00-00', b'1', '', '13_DALIA_MED.png', '2018-08-15 04:40:47', NULL);

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
-- Indices de la tabla `melc_map`
--
ALTER TABLE `melc_map`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_newsletter`
--
ALTER TABLE `melc_newsletter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

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
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `melc_profile_user`
--
ALTER TABLE `melc_profile_user`
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
  ADD UNIQUE KEY `user` (`user`);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `melc_place`
--
ALTER TABLE `melc_place`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT de la tabla `melc_profile`
--
ALTER TABLE `melc_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `melc_social_network`
--
ALTER TABLE `melc_social_network`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `melc_user`
--
ALTER TABLE `melc_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Restricciones para tablas volcadas
--

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
