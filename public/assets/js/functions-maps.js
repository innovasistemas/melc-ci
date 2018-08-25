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
    
//    var marker = new google.maps.Marker({position: uluru, map: map});
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
    
    
    $.each(locations1, function(index, value){
        addMarker1(index, value, logos[0]);
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
    
    $.each(locations2, function(index, value){
        addMarker2(index, value);
       
    });

    var locations3 = [
        {lat: 6.2500271, lng: -75.570322},
        {lat: 6.2494548, lng: -75.5705354},
        {lat: 6.2467651, lng: -75.5650027},
        {lat: 6.2439346, lng: -75.5738133}
    ];
    
    $.each(locations3, function(index, value){
        addMarker3(index, value);
    });



//18
//:
//{lat: 6.251926, lng: -75.6009126}
//19
//:
//{lat: 6.245461, lng: -75.5618417}
//20
//:
//{lat: 6.3500098, lng: -75.7087648}
//21
//:
//{lat: 6.2609775, lng: -75.5766487}
//22
//:
//{lat: 6.2577165, lng: -75.5890918}
//23
//:
//{lat: 6.264745, lng: -75.5847107}
//24
//:
//{lat: 6.2771457, lng: -75.5700965}
//25
//:
//{lat: 6.2372616, lng: -75.5858295}
//26
//:
//{lat: 6.2470025, lng: -75.5375514}

    
    
    
    
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
function addMarker1(index, location, logo) 
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
        title: 'Memoria',
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
function addMarker2(index, location, name) 
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
        title: 'Medellín en movimiento',
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
function addMarker3(index, location) 
{
    var marker = new google.maps.Marker({
        position: location,
        title: 'Centro',
        map: map, 
        icon: 'assets/images/map-icons/Centro.png'
    });
    markers3.push(marker);
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
