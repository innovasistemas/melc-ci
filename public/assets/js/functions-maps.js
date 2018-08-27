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

    // Adds a marker at the center of the map.
//    var locations = [
//        {lat: 6.2471457, lng: -75.6700965},
//        {lat: 6.371457, lng: -75.5900965},
//        {lat: 6.2771457, lng: -75.5700965},
//        {lat: 6.2779302, lng: -75.6387827},
//        {lat: 6.2891079, lng: -75.5115368}
//    ];
    
    
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

//        {lat: 6.2518401, lng: -75.563591},
    var locations1 = [
        /*{lat: 6.2459273, lng: -75.5588449},
        {lat: 6.2459273, lng: -75.5588449},
        {lat: 6.2506827, lng: -75.5563988},
        {lat: 6.2540511, lng: -75.6176208},
        {lat: 6.2492968, lng: -75.5642994},
        {lat: 6.2656590, lng: -75.5633738},*/
        {lat: 6.2769211, lng: -75.5757206},
        {lat: 6.1912162, lng: -75.5796313},
        {lat: 6.2457364, lng: -75.5681838}
    ];
    
    places = [
        /*'Museo Casa de la Memoria',
        'Parque Biblioteca La Ladera',
        'Cementerio de San Javier / Parque Biblioteca / Jardines de Resistencia / Casa Morada',
        'Escultura en homenaje a los jóvenes de Villatina (Parque del Periodista, Comuna 10)',
        'Museo Cementerio San Pedro',
        'Jardín Cementerio Universal',*/
        'Edificio Mónaco',
        'Pájaro de Botero',
        'Universidad de Antioquia'
    ]
    
    descriptionPlace = [
        /*'¿Sabes por qué es un museo y también una casa? ¿de qué memoria se habla allí? ¿mental, urbana, social, afectiva, del conflicto? En el entorno público de este museo, ubicado en el Parque Bicentenario, puedes encontrar un memorial con nombres y situaciones de victimización, unos totem sonoros, jardines de la memoria, un busto de Mahatma Ghandi ¡y hasta un árbol construido con cuchillos! Si vas a conocer sus salas internas reserva por lo menos 4 horas de tu día. ',
        '¡¿Vas para la antigua cárcel de varones de la ciudad?! En 1921, un ingeniero belga, el mismo que construyó el Palacio de la Cultura, la Facultad de Derecho de la Universidad de Antioquia y la Iglesia del Sagrado Corazón, comenzó su construcción ¿Sabes cómo se llamaba el ingeniero? ¿desde cuándo se transformó en parque y en biblioteca?',
        'En la ciudad de Medellín aún quedan algunos cementerios de barrio como los de El Rincón, Belén Miravalle, El Poblado y San Javier. Este último cada día transforma los hechos de muerte y dolor en ejercicios de memoria y vida. Allí podrás encontrar grafitis y jardines de resistencia que te hablarán de una nueva forma de mirar el conflicto en este territorio liderado por colectivos de jóvenes. Cerquita están el Parque Biblioteca San Javier y las escaleras eléctricas donde se realiza un tour de grafitis como voz pública de estos barrios que perdonan, pero no olvidan.',
        '¿Te imaginas que una escultura pueda simbolizar la muerte de 9 jóvenes habitantes del barrio Villatina en pleno centro de la ciudad? ¿qué les sucedió a estos chicos? ¿sabes qué es una escultura de reparación simbólica? ¿quién ordenó al Estado a hacerla? Muchos de los jóvenes que callejean por el Parque del Periodista no saben por qué está allí, ojalá tu les puedas contar luego de visitarla.',
        'Fue fundado en 1842 por familias adineradas de la ciudad que buscaron un lugar diferente al Cementerio de San Lorenzo (único hasta ese momento en la ciudad) para enterrar allí a sus familias en mausoleos. Pero ahora también es un museo donde se evidencian las diferencias existentes entre las clases sociales de nuestra ciudad y que ofrece una programación cultural y educativa ¿Te imaginaste alguna vez que un cementerio también podría ser museo?',
        'Fue diseñado por el maestro Pedro Nel Gómez en 1936. En medio del Cementerio Israelita y del antiguo Cementerio La Candelaria (donde hoy está el Instituto de Medicina Legal) se encuentra el Jardín Cementerio Universal ¿Sabes por qué se llama así? ¿qué tipo de personas fueron las primeras en sepultarse en este lugar? ¿por qué se conoce como el cementerio de los NN? Tal vez visitar un cementerio no sea el mejor plan para muchos, pero ¡anímate a visitar los que te hemos mencionado y verás todas las historias interesantes que encontrarás',*/
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
        'Palmitas: Asociación de Mujeres de Palmitas - Biblioteca pública - Red Corregimental de Jóvenes - Alguna de las fincas de los campesinos asociados a Campo vivo. Santa Elena: Parque Arví - Centralidad Vereda Mazo con su importante proyecto Sapiencia. Altavista: La Casa Museo y las huertas de la Vereda Manzanillo Crea tu propia lista de lugares corregimentales o te contáctate con la Gerencia de Corregimientos quienes impulsan un importante proyecto de Turismo Rural Comunitario.'
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
        'Esta unidad residencial construida en los años 70  se consolida como otro gran pulmón de la ciudad,  pues en él reposan cerca de 1.800 árboles que hacen parte del importante corredor verde Cerro El Volador, Universidad Nacional, Carlos E. Restrepo y Suramericana.',
        'Es tal vez el más cerro tutelar mejor conservado y arborizado de los siete con que cuenta la ciudad. En este oasis en medio de la ciudad se puede visitar el mariposario al aire libre, un vivero pedagógico, la estación de abejas angelito y varios miradores desde donde se puede tener hermosas panorámicas a la ciudad ¡Sin duda es un patrimonio natural y arqueológico!',
        'Moravia es una flor, dice “Mamá Chila”, quien  orienta los recorridos por el barrio que hace unas décadas fue un basurero a cielo abierto y donde se asentaron numerosas familias de manera precaria. Varios años de intervención y la reubicación de la gran mayoría de ellas permitió que el morro hoy sea un gran jardín coronado en su cima con un vivero de plantas ornamentales liderado por mujeres que, además de ofrecer la guía y vender plantas, cuentan una historia de resistencia y perseverancia características de este barrio.',
        'Un pequeño grupo de empeliculados con el tema de la sostenibilidad y el problema de las basuras, se dieron a la tarea de explorar estrategias reales y posibles de implementar contando con las dinámicas de la ciudad. Aprovechando los espacios disponibles en su entorno, crearon un proyecto de compostaje con la técnica denominada Pacas bio-digestoras Silva. Con estas han logrado tratar más de 4 toneladas de residuos orgánicos que producen en sus casas ¿Alguna vez habías pensado qué pasa con la basura que produces?',
        'Jardín Circunvalar / Cerro Pan de Azúcar / Huertas caseras del Parque Biblioteca de San Cristóbal / Mercado Col y flor / Red de Huerteros Casa de la Cultura Los Alcázares / Barrio Naranjal.'
    ];
    
    title = 'Medellín sostenible';
    
    $.each(locations5, function(index, value){
        addMarker5(index, value, logos[0], title);
    });
    

    var locations6 = [
        {lat: 6.2609775, lng: -75.5766487},
        {lat: 6.2577165, lng: -75.5890918},
        {lat: 6.264745, lng: -75.5847107},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2372616, lng: -75.5858295},
        {lat: 6.2470025, lng: -75.5375514},
    ];
    
    places = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    descriptionPlace = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    title = 'Equipamientos públicos para la ciudadanía';
    
    $.each(locations6, function(index, value){
        addMarker6(index, value, logos[0], title);
    });
    

    var locations7 = [
        {lat: 6.2609775, lng: -75.5766487},
        {lat: 6.2577165, lng: -75.5890918},
        {lat: 6.264745, lng: -75.5847107},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2372616, lng: -75.5858295},
        {lat: 6.2470025, lng: -75.5375514},
    ];
    
    places = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    descriptionPlace = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    title = 'Somos educación, arte y cultura';
    
    $.each(locations7, function(index, value){
        addMarker7(index, value, logos[0], title);
    });


    var locations8 = [
        {lat: 6.2609775, lng: -75.5766487},
        {lat: 6.2577165, lng: -75.5890918},
        {lat: 6.264745, lng: -75.5847107},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2372616, lng: -75.5858295},
        {lat: 6.2470025, lng: -75.5375514},
    ];
    
    places = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    descriptionPlace = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    title = 'Territorios jóvenes nocturnos';
    
    $.each(locations8, function(index, value){
        addMarker8(index, value, logos[0], title);
    });
    

    var locations9 = [
        {lat: 6.2609775, lng: -75.5766487},
        {lat: 6.2577165, lng: -75.5890918},
        {lat: 6.264745, lng: -75.5847107},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2372616, lng: -75.5858295},
        {lat: 6.2470025, lng: -75.5375514},
    ];
    
    places = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    
    descriptionPlace = [
        '',
        '',
        '',
        '',
        '',
        ''
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
                content += "<label for='" + id + "'>" + value.name +"</label>";
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
        icon: 'assets/images/map-icons/Educacion.png'
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
        icon: 'assets/images/map-icons/Educacion.png'
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

