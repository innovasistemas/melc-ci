/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Variables globales a nivel de página+
            
var map;

var markers1 = [];
var markers2 = [];
var markers3 = [];
var markers4 = [];
var markers5 = [];
var markers6 = [];
var markers7 = [];
var markers8 = [];
var markers9 = [];
var markers = [];

var locations = [];
var idMap = [];
var descriptionPlace = [];
var urlPlace = [];
var places = [];
var logos = [];




// Initialize and add the map
function initMap() 
{
    // The location of Uluru

    // Coordenadas decimales para Medellín:
    var uluru;
    uluru = {lat: 6.2518401, lng: -75.563591};

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13, 
        center: uluru,
        title: 'Medellín',
//        icon: 'brown_markerA.png',
//                    mapTypeId: 'terrain'
        mapTypeId: 'roadmap'

    });
    
    var marker = new google.maps.Marker({position: uluru, map: map});
//    marker.setIcon('http://img.javascriptes.com/javascript/green-dot.png') 


    // This event listener will call addMarker() when the map is clicked.
//                map.addListener('click', function(event) {
//                    addMarker(event.latLng);
//                });

   
    
    //---------------------------------------------------------------
    
    var url = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/'
    var entity = 'melc_place';
    var objJson = {
        'bd': {
            'table': entity
        },
        fields: {
            '0': 'id',
            '1': 'name',
            '2': 'description',
            '3': 'latitude',
            '4': 'longitude',
            '5': 'url',
            '6': 'id_map',
        }                   
    }

    var strJson = JSON.stringify(objJson);

    $.ajax({
        url: url,
        data: {'dataSend': strJson},
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            var content = "";
            var id;
            $.each(data, function(index, value){
                idMap[index] = parseInt(value.id_map);
                locations[index] = {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)};
                places[index] = value.name;
                descriptionPlace[index] = value.description;
                urlPlace[index] = value.url;
            });
//            console.log(locations);
//            console.log(descriptionPlace);
//            $.each(locations, function(index, value){
//                addMarker(index, value);
//            })
        }
    }); 
    
    
//    $.each(idMap, function(index, value){
//        switch(value){
//            case 1:
//                addMarker1(index, locations[index], places[index]);
//                break;
//            case 2:
//                addMarker2(index, locations[index], places[index]);
//                break;
//            default:
//                break;
//        }
//    })



    var title;
   
    var locations1 = [
        {lat: 6.2459273, lng: -75.5588449},
        {lat: 6.2459273, lng: -75.5588449},
        {lat: 6.2506827, lng: -75.5563988},
        {lat: 6.2540511, lng: -75.6176208},
        {lat: 6.2492968, lng: -75.5642994},
        {lat: 6.2656590, lng: -75.5633738},
        {lat: 6.2769211, lng: -75.5757206},
        {lat: 6.1912162, lng: -75.5796313},
        {lat: 6.2457364, lng: -75.5681838}
    ];
    
    places = [
        'Museo Casa de la Memoria',
        'Parque Biblioteca La Ladera',
        'Cementerio de San Javier / Parque Biblioteca / Jardines de Resistencia / Casa Morada',
        'Escultura en homenaje a los jóvenes de Villatina (Parque del Periodista, Comuna 10)',
        'Museo Cementerio San Pedro',
        'Jardín Cementerio Universal',
        'Edificio Mónaco',
        'Pájaro de Botero',
        'Universidad de Antioquia'
    ]
    
    descriptionPlace = [
        '¿Sabes por qué es un museo y también una casa? ¿de qué memoria se habla allí? ¿mental, urbana, social, afectiva, del conflicto? En el entorno público de este museo, ubicado en el Parque Bicentenario, puedes encontrar un memorial con nombres y situaciones de victimización, unos totem sonoros, jardines de la memoria, un busto de Mahatma Ghandi ¡y hasta un árbol construido con cuchillos! Si vas a conocer sus salas internas reserva por lo menos 4 horas de tu día. ',
        '¡¿Vas para la antigua cárcel de varones de la ciudad?! En 1921, un ingeniero belga, el mismo que construyó el Palacio de la Cultura, la Facultad de Derecho de la Universidad de Antioquia y la Iglesia del Sagrado Corazón, comenzó su construcción ¿Sabes cómo se llamaba el ingeniero? ¿desde cuándo se transformó en parque y en biblioteca?',
        'En la ciudad de Medellín aún quedan algunos cementerios de barrio como los de El Rincón, Belén Miravalle, El Poblado y San Javier. Este último cada día transforma los hechos de muerte y dolor en ejercicios de memoria y vida. Allí podrás encontrar grafitis y jardines de resistencia que te hablarán de una nueva forma de mirar el conflicto en este territorio liderado por colectivos de jóvenes. Cerquita están el Parque Biblioteca San Javier y las escaleras eléctricas donde se realiza un tour de grafitis como voz pública de estos barrios que perdonan, pero no olvidan.',
        '¿Te imaginas que una escultura pueda simbolizar la muerte de 9 jóvenes habitantes del barrio Villatina en pleno centro de la ciudad? ¿qué les sucedió a estos chicos? ¿sabes qué es una escultura de reparación simbólica? ¿quién ordenó al Estado a hacerla? Muchos de los jóvenes que callejean por el Parque del Periodista no saben por qué está allí, ojalá tu les puedas contar luego de visitarla.',
        'Fue fundado en 1842 por familias adineradas de la ciudad que buscaron un lugar diferente al Cementerio de San Lorenzo (único hasta ese momento en la ciudad) para enterrar allí a sus familias en mausoleos. Pero ahora también es un museo donde se evidencian las diferencias existentes entre las clases sociales de nuestra ciudad y que ofrece una programación cultural y educativa ¿Te imaginaste alguna vez que un cementerio también podría ser museo?',
        'Fue diseñado por el maestro Pedro Nel Gómez en 1936. En medio del Cementerio Israelita y del antiguo Cementerio La Candelaria (donde hoy está el Instituto de Medicina Legal) se encuentra el Jardín Cementerio Universal ¿Sabes por qué se llama así? ¿qué tipo de personas fueron las primeras en sepultarse en este lugar? ¿por qué se conoce como el cementerio de los NN? Tal vez visitar un cementerio no sea el mejor plan para muchos, pero ¡anímate a visitar los que te hemos mencionado y verás todas las historias interesantes que encontrarás',
        'En este edificio se realizaron tres atentados explosivos contra la familia del capo de la mafia Pablo Escobar Gaviria. Hoy es un lugar por el que desfilan, varias veces al día, pequeñas giras turísticas con el afán amarillista de conocer la residencia de este sujeto que tanto daño le hizo a la sociedad ¡Ah! También es importante que conozcas un poco más de la historia y las consecuencias de una guerra declarada por la ilegalidad al gobierno y a la sociedad, y los miles de daños causó y las vidas con las que acabó.',
        'Debajo de esta escultura del maestro Fernando Botero, ubicada en uno de los parques públicos centrales de la ciudad, se ubicó un artefacto explosivo la noche del 10 de junio de 1999. Con su detonación murieron 23 personas y 99 más resultaron heridas, mutiladas y con cicatrices imborrables en su cuerpo y en su mente. Cinco años después, el artista no permitió que se retirara, donó un nuevo pájaro y pidió que se le nombrara Monumento a la estupidez ¿qué tal ese nombre?',
        '¿Sabes porqué hay una plazoleta que se llama Plazoleta Barrientos en la Universidad de Antioquia? ¿por qué se encuentran allí los bustos de varios docentes y quiénes fueron? ¿qué les sucedió? ¿quién fue Gustavo Adolfo Muñoz y por qué un auditorio lleva su nombre? o ¿Hernán Henao? La Universidad, en su objetivo de transformar la sociedad, ha sido escenario de duras confrontaciones del pensamiento y, lastimosamente, de muertes por esta causa. Sus memorias hablan ya de más de 200 años de nuestra historia.'
    ];
    
    title = 'Haciendo memoria para construir futuro';
    
    $.each(locations1, function(index, value){
        addMarker1(index, value, logos[0], title);
    });

    var locations2 = [
        {lat: 6.2649106, lng: -75.6383117},
        {lat: 6.2482097, lng: -75.5645807},
        {lat: 6.2569851, lng: -75.6470032},
        {lat: 6.231251, lng: -75.577633},
        {lat: 6.2589828, lng: -75.6470033}
    ];
    
    places = [
        'Metro y cables',
        'Avenida La Playa',
        'Tranvía de Ayacucho',
        'Metroplús de Belén y sus rutas alimentadoras',
        'Encicla'
    ];
    
    descriptionPlace = [
        'Acceder al Sistema Metro es tener la posibilidad de ir al sur y al norte del Valle de Aburrá en poco tiempo y en un solo trayecto, o pasar por municipios vecinos como Envigado, Itagüí, La Estrella o Bello. Nos permite también llegar a algunas laderas del oriente y del occidente de la ciudad en el sistema de cables y alimentadores.',
        'La peatonalización de La Playa es el eje central de la futura Red Caminera del Centro. Desde esta vía se accede a las siguientes vías peatonales: Junín, La Bastilla y, a través de la calle Córdoba, que también será peatonal, se accede al paseo urbano más grande de Medellín: El Tranvía de Ayacucho.',
        '¡Este sistema ha sido muy importante para Medellín en la Cabeza! Lo utilizamos para subir hasta el barrio La Sierra y Villa Turbay y así evidenciamos la alternancia entre la Red Caminera, el tranvía y el sistema de cables. Desde el sistema del tranvía también nos gusta visitar la galería de arte a cielo abierto con más de 32 obras en su entorno y el trayecto conocido como corredor gastronómico.',
        'Este sistema llega incluso hasta al corregimiento de Altavista y específicamente a las veredas Buga y Manzanillo, se conecta con la línea A en la Estación Industriales y en las estaciones Hospital y Cisneros con el Metroplús hacia el sector de Manrique (La 45).',
        'La ciudad cuenta con más de 50 estaciones de bicicletas públicas que se pueden utilizar con la tarjeta cívica del Metro. Es un maravilloso sistema para recorrer trayectos cortos y siempre se encuentran en zonas aledañas a ciclorrutas. En bici puedes acceder a equipamientos públicos, instituciones educativas, parques, plazas, UVA y sedes culturales y artísticas de diferentes organizaciones.'
    ];
    
    title = 'Medellín en movimiento';
    
    $.each(locations2, function(index, value){
        addMarker2(index, value, logos[0], title);
       
    });
    

    var locations3 = [
        {lat: 6.2500271, lng: -75.570322},
        {lat: 6.2494548, lng: -75.5705354},
        {lat: 6.2467651, lng: -75.5650027},
        {lat: 6.2439346, lng: -75.5738133}
    ];
    
    places = [
        'Parque de Berrío',
        'Banco de La República',
        'Distrito Patrimonial San Ignacio',
        'Otros lugares para callejear en El Centro'
    ];
    
    descriptionPlace = [
        '¿Sabes cuál es la importancia de este parque y cómo era antes de tener una gigante estación del Metro? ¿qué grupo de mujeres, desde hace más de 15 años, se encuentra todos los miércoles al mediodía en el atrio de la Iglesia La Candelaria? ¿de quién es la escultura ubicada en el centro del parque? ¿cómo se llamaba antes el Parque de Berrio? Estas son algunas de las preguntas que puedes plantearte antes de visitar este lugar.',
        'En el costado sur del Parque de Berrío se encuentra la sucursal Medellín del Banco de la República, el más importante del país y de propiedad del Estado (¡o sea de todos nosotros!) Para más pistas, es el que luce a la famosa escultura que se conoce popularmente como la Gorda de Botero (su nombre original fue Mujer sin Cabeza). En una de sus torres se encuentra el área cultural del banco que promueve diversos procesos culturales del país ¡Sácale tiempo, no te arrepentirás!',
        '¿Sabes cuáles edificios o lugares conforman el Distrito Patrimonial San Ignacio? ¿de qué año es la Ceiba ubicada en la esquina de Ayacucho? ¿quienes fueron los primeros habitantes del Claustro y qué colegio fundaron? ¿de dónde viene la palabra claustro? y ¿Paraninfo? Estas son solo unas cuantas de las mil preguntas que puede inspirarte esta zona ¡Ve con tiempo porque seguro lo vas a necesitar pero, aún más seguro, lo disfrutarás!',
        'Galería Bolívar / Plazuela La Veracruz/ Edificio Víctor / Casa del Encuentro / Museo de Antioquia / Mercado Abierto de Tejelo / Plazuela Rojas Pinilla / La Bachue Parque de Boston / Parque Obrero / Escultura Esfera Pública / Placita de Flórez / Teatro El Trueque / Comando de Policía / Parque e Iglesia de San Antonio / Taberna Diógenes / Palacio de Bellas Artes / CEFA / Pequeño Teatro / Piscina desarenadora / Antiguo Café Cyrano (Reunión de los Pánidas) ¡De resto, el reto es tuyo, tan tuyo como El Centro de Medellín!'
    ];
    
    title = 'El centro: un lugar para descubrir';
    
    $.each(locations3, function(index, value){
        addMarker3(index, value, logos[0], title);
    });
    

    var locations4 = [
        {lat: 6.251926, lng: -75.6009126},
        {lat: 6.245461, lng: -75.5618417},
        {lat: 6.3500098, lng: -75.7087648},
    ];
    
    places = [
        'Plaza de Mercado de La América',
        'Placita de Flórez',
        'Otros lugares que puedes visitar'
    ];
    
    descriptionPlace = [
        'En la ciudad existieron varias plazas de mercado donde las pasadas generaciones iban de costal y canasta a comprar productos frescos y recién traídos de zonas rurales. La Plaza de La América es una sobreviviente, pues otras desaparecieron y fueron reemplazadas por supermercados y almacenes de cadena. Además de ir a mercar ¿qué más puedes encontrar en la Plaza de la América? ¡Es un tesorito sostenible y campesino de la ciudad!',
        '¡Sí, Flórez con “z”, no está mal escrita! Es que su nombre no se debe a la cantidad de flores que bajaban en silletas humanas desde el Corregimiento de Santa Elena, sino a que quien donó el predio para su construcción fue Don Rafael Flórez. Antes de ser la primera plaza de mercado cubierta en la ciudad, fue patronato de trabajadores, convento religioso y hasta circo de toros (no plaza) ¡Tendremos que averiguar también la diferencia entre un circo y una plaza de toros!',
        'Palmitas: Asociación de Mujeres de Palmitas - Biblioteca pública - Red Corregimental de Jóvenes - Alguna de las fincas de los campesinos asociados a Campo vivo. Santa Elena: Parque Arví - Centralidad Vereda Mazo con su importante proyecto Sapiencia. Altavista: La Casa Museo y las huertas de la Vereda Manzanillo Crea tu propia lista de lugares corregimentales o te contáctate con la Gerencia de Corregimientos quienes impulsan un importante proyecto de Turismo Rural Comunitario.'
    ];
    
    title = '¿Tiene Medellín campesinos?';
    
    $.each(locations4, function(index, value){
        addMarker4(index, value, logos[0], title);
    });
    
    
    var locations5 = [
        {lat: 6.2609775, lng: -75.5766487},
        {lat: 6.2577165, lng: -75.5890918},
        {lat: 6.264745, lng: -75.5847107},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2372616, lng: -75.5858295},
        {lat: 6.2470025, lng: -75.5375514},
    ];
    
    places = [
        'Universidad Nacional de Colombia (Agronomía)',
        'Barrio Carlos E. Restrepo',
        'Cerro El Volador',
        'Morro de Moravia',
        'Parque de las pacas – Belén Fátima',
        'Otros lugares de Medellín Sostenible para visitar'
    ];
    
    descriptionPlace = [
        'En el campus de Agronomía, que en su interior guarda un oasis ambiental de flora y fauna, puedes encontrar el Palmetum, que es la colección de palmas vivas más grande y diversa del país. Igualmente, el Arboretum, que es una colección de árboles de muchos lugares del mundo que posee la Universidad y, además de servir de hábitat para muchas especies de aves, también es el motivo de muchas investigaciones forestales.',
        'Esta unidad residencial construida en los años 70 se consolida como otro gran pulmón de la ciudad, pues en él reposan cerca de 1.800 árboles que hacen parte del importante corredor verde Cerro El Volador, Universidad Nacional, Carlos E. Restrepo y Suramericana.',
        'Es tal vez el más cerro tutelar mejor conservado y arborizado de los siete con que cuenta la ciudad. En este oasis en medio de la ciudad se puede visitar el mariposario al aire libre, un vivero pedagógico, la estación de abejas angelito y varios miradores desde donde se puede tener hermosas panorámicas a la ciudad ¡Sin duda es un patrimonio natural y arqueológico!',
        'Moravia es una flor, dice “Mamá Chila”, quien orienta los recorridos por el barrio que hace unas décadas fue un basurero a cielo abierto y donde se asentaron numerosas familias de manera precaria. Varios años de intervención y la reubicación de la gran mayoría de ellas permitió que el morro hoy sea un gran jardín coronado en su cima con un vivero de plantas ornamentales liderado por mujeres que, además de ofrecer la guía y vender plantas, cuentan una historia de resistencia y perseverancia características de este barrio.',
        'Un pequeño grupo de empeliculados con el tema de la sostenibilidad y el problema de las basuras, se dieron a la tarea de explorar estrategias reales y posibles de implementar contando con las dinámicas de la ciudad. Aprovechando los espacios disponibles en su entorno, crearon un proyecto de compostaje con la técnica denominada Pacas bio-digestoras Silva. Con estas han logrado tratar más de 4 toneladas de residuos orgánicos que producen en sus casas ¿Alguna vez habías pensado qué pasa con la basura que produces?',
        'Jardín Circunvalar / Cerro Pan de Azúcar / Huertas caseras del Parque Biblioteca de San Cristóbal / Mercado Col y flor / Red de Huerteros Casa de la Cultura Los Alcázares / Barrio Naranjal.'
    ];
    
    title = 'Medellín sostenible';
    
    $.each(locations5, function(index, value){
        addMarker5(index, value, logos[0], title);
    });
    

    var locations6 = [
        {lat: 6.1812389, lng: -75.6570257},
        {lat: 6.2779302, lng: -75.6387827},
        {lat: 6.3431908, lng: -75.6903934},
        {lat: 6.2891079, lng: -75.5115368},
        {lat: 6.2548476, lng: -75.6280696},
        {lat: 6.304305, lng: -75.5803627},
        {lat: 6.245076, lng: -75.5026948},
        {lat: 6.2554459, lng: -75.5799932},
        {lat: 6.27652, lng: -75.5668187},
        {lat: 6.2523907, lng: -75.5710995},
        {lat: 6.177062, lng: -75.6567097}
    ];
    
    places = [
        'Piscina skater (Corregimiento San Antonio de Prado)',
        'Parque Biblioteca Fernando Botero (Corregimiento de San Cristóbal)',
        'Biblioteca del Corregimiento de San Sebastián de Palmitas',
        'Parque Arví (Corregimiento de Santa Elena)',
        'Centralidad Barrio El Salado',
        'Parque Biblioteca 12 de octubre',
        'Centralidad Mazo (Corregimiento de Santa Elena)',
        'Biblioteca Pública Piloto',
        'Centro Cultural Moravia',
        'Museo de Antioquia',
        'Otros Equipamientos para visitar:'
    ];
    
    descriptionPlace = [
        '¿Dónde practicaban antes los skaters en el corregimiento? ¿qué motivó esta práctica? ¿cómo hicieron para solucionar esta tensión generacional en el corregimiento? ¿qué otros equipamientos están cerca de la nueva piscina skater del corregimiento? ¡Detrás de este parche encontrarás la historia de una transformación concertada del territorio!',
        'Este Parque tiene una escultura del maestro Fernando Botero ¿Sabes qué escultura es? La propuesta arquitectónica de este edificio dejó la posibilidad de tener varias zonas verdes en su entorno ¿sabes qué servicios y actividades le ofrece la biblioteca a sus vecinos? Todas las respuestas se podrían encontrar en internet, pero te perderías la sensación y la experiencia de estar allí.',
        'Es una de las bibliotecas corregimentales que sirve también como referente y lugar de encuentro para buena parte de la población que allí reside. Hace parte del Sistema de Bibliotecas de la ciudad y si allá está un libro que quieres leer te lo pueden enviar pero, ¡mejor ir hasta allá por él!',
        'Este equipamiento ubicado en el corregimiento de Santa Elena recibe miles de visitantes cada día que llegan en el Metrocable o en el sistema de transporte público del corregimiento. Cuenta con senderos, parques de diversiones de las cajas de compensación familiar, zona de picnic, exposición de hallazgos arqueológicos, mercado campesino ¡y hasta laguna!',
        'Esta importante zona de la Comuna 13 es un referente de la transformación de la ciudad. Cancha de futból, colegio de calidad, casa de justicia, UVA y senderos para caminar rodean a su biblioteca comunitaria para hacer de este espacio un punto de encuentro donde los vecinos se conocen, se integran y, por ende, se respetan.',
        'Este fue uno de los últimos parques biblioteca en entregarse en la ciudad. Pero también uno de los más completos por su diversidad. Está ubicado en el barrio del mismo nombre y sirve a muchos barrios cercanos, entre ellos El Progreso 1 y 2, El Triunfo y Santander. Lleva como nombre Gabriel García Márquez en homenaje a nuestro premio Nobel y cuenta con una sala de ensayo y grabación para grupos musicales de la zona, sala de danza, ludoteca, teatro, sala de exposiciones, aulas de capacitación, entre otros espacios ¡Este lugar está imperdible!',
        'Este equipamiento cuenta con diversos espacios de capacitación y servicio donde tienen asiento muchas dependencias municipales. El área destinada a Sapiencia cuenta con más de 30 equipos de cómputo que la comunidad vecina puede utilizar. Pero lo más novedoso, sin duda, es la sala de capacitación con metodología LEGO Educación, con la cual pueden aprender desde niños, jóvenes y adultos ¡Vale la pena visitar Santa Elena, no solo durante la Feria de las Flores!',
        '¡Esta biblioteca es el corazón del Sistema de Bibliotecas de la ciudad! Este equipamiento de ciudad es un edificio patrimonial de la ciudad identificado como bien de interés cultural. Sin duda, muchos de tus recorridos podrían pasar por este renovado edificio, que tiene como misión recuperar su liderazgo y representación en la movida cultural y educativa de la ciudad. La piloto fue, es y será el lugar indicado para aquellos que disfrutan de la cultura, el conocimiento y la expresión artística.',
        'Ubicado en el norte de la ciudad, sobre la carrera Carabobo, en el barrio Moravia, es un referente cultural y arquitectónico, pues sus diseños fueron donados por Rogelio Salmona, un arquitecto bogotano y quizás uno de los más importantes del país. Su diseño y construcción busca hacer algo muy lindo y funcional que demuestre que, cuando a la ciudadanía se le entregan espacios trabajados concertadamente, esta responde con comportamientos éticos y se apropia de su sostenibilidad y cuidado.',
        'Este equipamiento se consolida en el antiguo edificio donde funcionó la Alcaldía y el Concejo Municipal de la ciudad. En su interior se encuentra una de las colecciones de arte más importantes del país y en sus muros varios de los frescos del maestro Pedro Nel Gómez. El museo que estuvo a punto de ser uno de los equipamientos en abandonar El Centro, pero muchas voces se sumaron para invitarlo a quedarse y muchos esfuerzos y recursos unieron para que pudiera ser lo que es hoy ¡Y la donación del maestro Botero fue el moño de este maravilloso regalo para la ciudad!',
        'Parque Biblioteca San Antonio de Prado / UVA El Paraíso / Parque San Antonio/ Parque Biblioteca San Javier / Núcleo de Vida Ciudadana del Barrio La Esperanza (Castilla).'
    ];
    
    title = 'Equipamientos públicos para la ciudadanía';
    
    $.each(locations6, function(index, value){
        addMarker6(index, value, logos[0], title);
    });
    

    var locations7 = [
        {lat: 6.300633, lng: -75.5843267},
        {lat: 6.272146, lng: -75.6331867},
        {lat: 6.3025589, lng: -75.5736187},
        {lat: 6.2475208, lng: -75.5614637},
        {lat: 6.2428185, lng: -75.5588212},
        {lat: 6.2550017, lng: -75.5618128},
        {lat: 6.2470608, lng: -75.5643377},
    ];
    
    places = [
        'Talla de reyes. (Jóvenes de la Vereda La Loma San Cristóbal) ',
        'I.E. Jesus Maria Valle',
        'Teatro al Aire Libre de Pedregal',
        'Teatro Pablo Tobón Uribe',
        'Corredor de Arte Urbano de Ayacucho',
        'La Esquina Radio',
        'Otros lugares para visitar:'
    ];
    
    descriptionPlace = [
        'Esta vereda fue estratégica en la comunicación entre Medellín y el occidente antioqueño, porque era la vía que comunicaba a Medellín con la zona de Urabá y, consecuentemente, fue el territorio por donde varios grupos armados quisieron llevar el conflicto rural a lo urbano. Ahora trabaja allí el colectivo Talla de Reyes que comenzó como una expresión juvenil que, desde el grafiti urbano, plasmó mensajes de resistencia y resiliencia. Su lema es: La loma no es como la pintan.',
        'Esta institución educativa, localizada en la base del Cerro Picacho en el barrio del mismo nombre, tiene como principio de acción la defensa de los derechos humanos. ¿Sabes quién fue Jesús María Valle? ¿Por qué un colegio en la Comuna 6 lleva su nombre? ¿Sabes qué es una mesa de DDHH? Ahí te dejamos la inquietud.',
        'Este lugar localizado en el barrio Pedregal es el único teatro al aire libre registrado en el inventario municipal. Si te interesan las artes circenses, este es un buen lugar para incluir en tus callejeadas. Además, en sus instalaciones encuentras un excelente estudio de grabación y unos ‘empeliculados’ para produciendo y sacando adelante muchos sueños musicales. No en vano hace varios años comenzaron con el Festival Rock del barrio Castilla y este permanece activo como propuesta cultural para la ciudad.',
        '¿Sabes cuántos años de funcionamiento continuo cumplió el teatro? ¿cuál es slogan de este equipamiento cultural? ¿Sabías que otro teatro quiso reemplazarlo? ¿quién fue su arquitecto y diseñador? Si no conoces todas las actividades que allí se realizan ¡anímate a visitarlo porque es uno de los lugares imperdibles de El Centro!',
        'La historia de Medellín se puede leer en las diversas expresiones artísticas de este corredor, y es solo uno de los varios lugares en la ciudad donde esta forma de expresión tiene una presencia importante. Además tuvo una gran difusión gracias a la apertura y funcionamiento del Tranvía de Ayacucho ¡Te podemos asegurar que si te vas a callejear  por este corredor, vuelves a tu casa con muy buenas fotos!',
        'La emisora comunitaria de Medellín, o sea nuestra emisora, la de todos, se encuentra en el barrio Prado Centro. Allí se realizan producciones radiales concertadas con grupos e iniciativas comunitarias de diferentes comunas. Sintoniza 101.4 FM ¡y luego vas a hacerles la visita!',
        'Corporación Picacho Con Futuro / Grupo de punk Desadaptadoz / Edificio Cultural de la Cámara de Comercio donde está la Emisora Cultural Cámara FM / Latina Stereo / Antigua UPB (Hoy Universidad Antonio Nariño) / Casa de la Cultura Santader / Institución Universitaria Bellas Artes / Taberna Diógenes / Pabellón del Agua / Restaurante Cyrano / Centro Cultural Homero Manzi / Plazuela San Ignacio / Calle del Codo.'
    ];
    
    title = 'Somos educación, arte y cultura';
    
    $.each(locations7, function(index, value){
        addMarker7(index, value, logos[0], title);
    });


    var locations8 = [
        {lat: 6.2411109, lng: -75.5506017},
        {lat: 6.2411106, lng: -75.5659227},
        {lat: 6.2425527, lng: -75.5584788},
        {lat: 6.2454594, lng: -75.5620535},
        {lat: 6.2492968, lng: -75.5642994}
    ];
    
    places = [
        'Unidad Deportiva Miraflores',
        'Torres de Marco Fidel Suárez',
        'Corredor Gastronómico de Ayacucho',
        'I.E. Héctor Abad Gómez',
        'Otros lugares para callejear en la noche:'
    ];
    
    descriptionPlace = [
        '¿Sabes dónde se comenzó a practicar el fútbol en Medellín? ¿en qué año y qué comunidad lo impulsó? ¡La cancha de futbol de Miraflores vio crecer a los primeros futbolistas de la ciudad! Ahora se complementa con otros espacios deportivos y hasta con una casa para practicar música. Te vas a sorprender cuando observes la cantidad de personas practicando algún deporte durante la noche en este barrio. ',
        'Tal vez con ese nombre no tienes no idea de qué torres son esas, pero ¿si te decimos Torres de Bomboná?, seguramente ya sabes cuáles son. Aunque casi todos las conocemos con ese nombre, realmente Bomboná es el nombre de solo una de las torres. Bueno, pero lo que más nos interesa es que en la parte de debajo de estas torres hay lugares para ir a escuchar música, tomarse algo rico y está el Teatro Porfirio Barba Jacob ¿ese ya lo conocías?',
        'Al igual que el corredor de arte urbano, este corredor se hizo visible con la llegada del nuevo Tranvía de Ayacucho. Sin embargo, este corredor gastronómico ha existido desde hace muchas décadas, donde la chunchurria es uno de los alimentos más solicitados en cada esquina del sector conocido como Buenos Aires. Pero también las famosas tortas negras (bizcochos) y el helado artesanal “Amoracuyá”, ganador de reconocimientos internacionales. También encuentras empanadas, comida de mar en un exclusivo mercado de estilo europeo ¿Ya se te hizo agua la boca? ¡La calle te espera!',
        'En la noche también se estudia ¡y mucho! La realidad social y económica de la ciudad hace que gran parte de la población joven deba trabajar en horario diurno y avanzar en sus estudios en la noche. El Hector Abad Gómez es uno de los colegios de calidad de la ciudad y presta sus servicios de bachillerato nocturno a jóvenes de toda la ciudad. Parque de ‘La Mila’ Ese es el nombre que le dimos de cariño, pero el nombre real es Parque de La Milagrosa. Un tradicional parque que se convirtió en un subcentro de la ciudad con servicios de todo tipo: supermercados, tiendas de barrio, bancos, estaciones de gasolina y los infaltables lugares de comida rápida.',
        'Unidad Deportiva Atanasio Girardot / Boulevard de la carrera 68 en Castilla / Glorieta de la Vida en el Teatro Pablo Tobón Uribe / Parque del Periodista / Plazuela de San Ignacio / Casa de la Cultura Barrio Ávila.'
    ];
    
    title = 'Territorios jóvenes nocturnos';
    
    $.each(locations8, function(index, value){
        addMarker8(index, value, logos[0], title);
    });
    

    var locations9 = [
        {lat: 6.2350287, lng: -75.6040404},
        {lat: 6.2110582, lng: -75.5751874},
        {lat: 6.256864, lng: -75.5923187},
        {lat: 6.229265, lng: -75.5503717},
        {lat: 6.2684353, lng: -75.5682742},
        {lat: 6.251233, lng: -75.561925},
        {lat: 6.252932, lng: -75.5708444},
        {lat: 6.2698761, lng: -75.5681568},
    ];
    
    places = [
        'Plazoleta de la Nueva Villa de Aburrá',
        'Granja Somos Gente (Corregimiento de San Cristóbal)',
        'Unidad Deportiva Atanasio Girardot',
        'Centro de formación Los Pomos',
        'Parque de los Deseos',
        'Corporación Carabantú Afrocolombiana de Desarrollo Social y Cultural ',
        'Esquina del Raudal',
        'Exploratorio'
    ];
    
    descriptionPlace = [
        'Esta plazoleta con forma de herradura se construyó en la segunda etapa de la urbanización de la Nueva Villa de Aburrá a comienzos de los años 80. Hoy es lugar de encuentro de jóvenes amantes de diferentes tendencias del rock. El street workout, escuelas de pensamiento como de la Fernando González, los amantes del juego "Mil espadas" y el ya institucionalizado concierto del Grupo Suramérica para despedir el año, se dan cita en este espacio',
        'Este lugar alberga a población en condición de calle que adelanta su proceso de reintegración a la sociedad. Allí, mediante cultivos agrícolas y actividades complementarias, pasa los días y las noches este grupo poblacional que tiene mucho que aportar a los jóvenes desde su experiencia de vida.',
        'La unidad deportiva de la ciudad es un espacio donde las noches están vivas hasta muy tarde. Jóvenes que practican de manera competitiva alguna disciplina deportiva, se recrean con una actividad física despreocupada o se enfrenta a las peripecias de un skate, una bici o unos patines, se encuentran allí. Y ni hablar de los aficionados al fútbol que dejan escapar sus emociones por el amor a su camiseta. Es una pasión que ha intentado convertirse en acciones creadoras, creativas y ciudadanas para superar el estigma que cargan las palabras hincha o barra.',
        'Las creencias religiosas pueden ser el motor de vida para muchos y la diversidad de estas creencias en la ciudad es lo que la hace fascinante y nos impulsa ser mejores personas cada día. En este lugar se desarrolla el programa Animadores de la Juventud que son jóvenes católicos comprometidos con la vida, la vocación y el servicio. Cada uno recibe una formación integral que le permite replicar la experiencia a otros jóvenes.',
        'Este lugar está ubicado estratégicamente en el sector Carabobo Norte, debajo de la Estación Universidad del Metro, se convirtió en el referente de encuentro para buena parte de la población LGBTI de la ciudad. Allí, con la diversa oferta cultural de la Fundación EPM, la Universidad de Antioquia, la Alcaldía y otras instituciones, esta población encontró un lugar donde la diversidad es respetada.',
        'La Corporación Afrocolombiana de Desarrollo Social y Cultural está localizada en el barrio Los Ángeles y trabaja por la reivindicación, reconocimiento y fortalecimiento de la labor de la mujer y los derechos de la población afrocolombiana en Medellín, mediante la implementación de acciones en contra del racismo y la xenofobia; la promoción de la etno-educación afrocolombiana y la cátedra de estudios afrocolombianos.',
        'Este lugar es otra expresión de la diversidad en la ciudad. Por décadas ha sido un espacio donde se ha ejercido la prostitución, pero que no ha escapado a la visita de la poesía, la música, el baile y el encuentro de amigos bohemios. Un lugar del que han salido importantes exponentes de la literatura como Mario Escobar Velásquez con algunos de sus cuentos.',
        'Este es un espacio lleno de empeliculados buscando cómo inventar algo nuevo ¿Ya habías escuchado algo sobre un lugar así? Toma el Metro, llega al Parque Explora y en sus afueras, con entrada gratis, vas a encontrar tal vez a alguien tan empeliculado como tú. Los jóvenes buscamos maneras para innovar en diversos procesos para que se acoplen a nuestros ritmos y a nuestras inquietudes. Allí también encontrarás experiencias con sonido, amplificación, generación alternativa de energías, stop motion, escuchas remotas, entre otras. En fin, ¡como para creerse científico!'
    ];
    
    title = 'Somos jóvenes, somos diversos';
    
    $.each(locations9, function(index, value){
        addMarker9(index, value, logos[0], title);
    });


    
    
    //---------------------------------------------------------------
  

}


function loadMaps()
{
    var url = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/'
    var entity = 'melc_map';
    var objJson = {
        'bd': {
            'table': entity
        },
        fields: {
            '0': 'id',
            '1': 'name',
            '2': 'description',
            '3': 'logo'
        }                   
    }

    var strJson = JSON.stringify(objJson);

    $.ajax({
        url: url,
        data: {'dataSend': strJson},
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            var content = "";
            var id;
            $.each(data, function(index, value){
                id = 'chkItinerary' + value.id;
                functionOptionMarker = 'optionsMarkers' + value.id + '()';
                content += "<input type='checkbox' value='" + value.id + "' id='" + id + "' name='" + id + "' onclick='" + functionOptionMarker + "' data-toggle='tooltip' data-placement='bottom' title='" + value.description + "'/>";
                content += "<label for='" + id + "' title='" + value.description + "'>" + value.name +"</label>";
                content += "<br>";
                logos[index] = value.logo;        
            });
            $('#collapse-itinerary').html(content);
        }
    }); 
}


//function optionsMarkers(input)
//{//$(':checkbox').prop('checked', true)
////    if($("#chkItinerary1").prop('checked')){
//    input = "#" + input;
//    if($(input).prop('checked')){
//        showMarkers(input); 
//    }else{
//        clearMarkers(input);
//    }
//}


function optionsMarkers1()
{
    if($("#chkItinerary1").prop('checked')){
//    if($("#panel-itinerarychkItinerary1").prop('checked')){
        showMarkers1(); 
    }else{
        clearMarkers1();
    }
}


function optionsMarkers2()
{
    if($("#chkItinerary2").prop('checked')){
        showMarkers2(); 
    }else{
        clearMarkers2();
    }
}


function optionsMarkers3()
{ 
    if($("#chkItinerary3").prop('checked')){
        showMarkers3(); 
    }else{
        clearMarkers3();
    }
}


function optionsMarkers4()
{ 
    if($("#chkItinerary4").prop('checked')){
        showMarkers4(); 
    }else{
        clearMarkers4();
    }
}


function optionsMarkers5()
{ 
    if($("#chkItinerary5").prop('checked')){
        showMarkers5(); 
    }else{
        clearMarkers5();
    }
}


function optionsMarkers6()
{ 
    if($("#chkItinerary6").prop('checked')){
        showMarkers6(); 
    }else{
        clearMarkers6();
    }
}


function optionsMarkers7()
{ 
    if($("#chkItinerary7").prop('checked')){
        showMarkers7(); 
    }else{
        clearMarkers7();
    }
}


function optionsMarkers8()
{ 
    if($("#chkItinerary8").prop('checked')){
        showMarkers8(); 
    }else{
        clearMarkers8();
    }
}


function optionsMarkers9()
{ 
    if($("#chkItinerary9").prop('checked')){
        showMarkers9(); 
    }else{
        clearMarkers9();
    }
}


// Adds a marker to the map and push to the array.
//function addMarker(location) 
//{
//    var marker = new google.maps.Marker({
//        position: location,
////        title: index,
////        content: index,
//        map: map, 
//        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
////        icon: 'assets/images/menu-burguer.png'
//    });
////    marker.setIcon('http://img.javascriptes.com/javascript/green-dot.png') 
//    markers.push(marker);
//}


// Adds a marker to the map and push to the array.
function addMarker1(index, location, logo, title) 
{
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + places[index] + '</h1>' +
            '<div id="bodyContent">'+
            '<p>'+ descriptionPlace[index] +'</p>'
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
//        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//        icon: 'http://img.javascriptes.com/javascript/blue-dot.png'
//        icon: 'assets/images/map-icons/' + logo
        icon: 'assets/images/map-icons/Memoria.png'
    });
    
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    
    
//    marker.setIcon('http://img.javascriptes.com/javascript/green-dot.png') 
    markers1.push(marker);
}


// Sets the map on all markers in the array.
//function setMapOnAll1(map) 
//{
//    for (var i = 0; i < markers1.length; i++) {
//        markers1[i].setMap(map);
//    }
//}


function setMapOnAll1(map) 
{
    for (var i = 0; i < markers1.length; i++) {
        markers1[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers1() 
{
    setMapOnAll1(null);
}


// Shows any markers currently in the array.
function showMarkers1() 
{
    setMapOnAll1(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers1() 
{
    clearMarkers();
    markers1 = [];
}


// Adds a marker to the map and push to the array.
function addMarker2(index, location, name, title) 
{
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
            '<div id="bodyContent">'+
            '<p>'+ descriptionPlace[index] +'</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map
    });
//    marker.setIcon('http://img.javascriptes.com/javascript/green-dot.png') 
//    marker.setIcon('assets/images/map-icons/' + logos[1].toString()); 
    marker.setIcon('assets/images/map-icons/Movimiento.png'); 
    markers2.push(marker);
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll2(map) 
{
    for (var i = 0; i < markers2.length; i++) {
        markers2[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers2() 
{
    setMapOnAll2(null);
}


// Shows any markers currently in the array.
function showMarkers2() 
{
    setMapOnAll2(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers2() 
{
    clearMarkers2();
    markers2 = [];
}


// Adds a marker to the map and push to the array.
function addMarker3(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Centro.png'
    });
    markers3.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll3(map) 
{
    for (var i = 0; i < markers3.length; i++) {
        markers3[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers3() 
{
    setMapOnAll3(null);
}


// Shows any markers currently in the array.
function showMarkers3() 
{
    setMapOnAll3(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers3() 
{
    clearMarkers3();
    markers3 = [];
}


// Adds a marker to the map and push to the array.
function addMarker4(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Campesinos.png'
    });
    markers4.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll4(map) 
{
    for (var i = 0; i < markers4.length; i++) {
        markers4[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers4() 
{
    setMapOnAll4(null);
}


// Shows any markers currently in the array.
function showMarkers4() 
{
    setMapOnAll4(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers4() 
{
    clearMarkers4();
    markers4 = [];
}


// Adds a marker to the map and push to the array.
function addMarker5(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Sostenible.png'
    });
    markers5.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll5(map) 
{
    for (var i = 0; i < markers5.length; i++) {
        markers5[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers5() 
{
    setMapOnAll5(null);
}


// Shows any markers currently in the array.
function showMarkers5() 
{
    setMapOnAll5(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers5() 
{
    clearMarkers5();
    markers5 = [];
}


// Adds a marker to the map and push to the array.
function addMarker6(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Equipamientos.png'
    });
    markers6.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll6(map) 
{
    for (var i = 0; i < markers6.length; i++) {
        markers6[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers6() 
{
    setMapOnAll6(null);
}


// Shows any markers currently in the array.
function showMarkers6() 
{
    setMapOnAll6(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers6() 
{
    clearMarkers6();
    markers6 = [];
}


// Adds a marker to the map and push to the array.
function addMarker7(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Educacion.png'
    });
    markers7.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll7(map) 
{
    for (var i = 0; i < markers7.length; i++) {
        markers7[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers7() 
{
    setMapOnAll7(null);
}


// Shows any markers currently in the array.
function showMarkers7() 
{
    setMapOnAll7(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers7() 
{
    clearMarkers7();
    markers7 = [];
}


// Adds a marker to the map and push to the array.
function addMarker8(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Nocturnos.png'
    });
    markers8.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll8(map) 
{
    for (var i = 0; i < markers8.length; i++) {
        markers8[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers8() 
{
    setMapOnAll8(null);
}


// Shows any markers currently in the array.
function showMarkers8() 
{
    setMapOnAll8(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers8() 
{
    clearMarkers8();
    markers8 = [];
}


// Adds a marker to the map and push to the array.
function addMarker9(index, location, name, title) 
{
    var contentString = 
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
        '<div id="bodyContent">'+
        '<p>'+ descriptionPlace[index] +'</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + title + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/Diversos.png'
    });
    markers9.push(marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}


// Sets the map on all markers in the array.
function setMapOnAll9(map) 
{
    for (var i = 0; i < markers9.length; i++) {
        markers9[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers9() 
{
    setMapOnAll9(null);
}


// Shows any markers currently in the array.
function showMarkers9() 
{
    setMapOnAll9(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers9() 
{
    clearMarkers9();
    markers9 = [];
}

