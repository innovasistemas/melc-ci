/* 
 *  (In the following example, markers appear when the user clicks on the map.
    The markers are stored in an array.
    The user can then click an option to hide, show or delete the markers.)
 * 
 *  Funciones para el tratamiento de los mapas.
 * 
 */

// Variables globales a nivel de página
            
// Variables para el mapa            
var map;
var markers = [];

// Arrays para guardar datos de mapas o rutas
var idItinerary = [];
var mapNumbers = [];
var names = [];
var logos = [];

// Array para guardar datos de lugares
var idMap = [];
var idMapNumbers = [];
var locations = [];
var places = [];
var descriptionPlace = [];
var urlPlace = [];


// Función para cargar las rutas (mapas)
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
            '1': 'map_number',
            '2': 'name',
            '3': 'description',
            '4': 'logo',
            '5': 'color'
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
                id = 'chkItinerary' + value.map_number;
                content += "<input type='checkbox' value='" + value.id + "' id='" + id + "' name='" + id + "' onclick='optionsMarkers(\"" + id + "\")' data-toggle='tooltip' data-placement='bottom' title='" + value.description + "'/>";
                content += "<label for='" + id + "' title='" + value.description + "' style='color:" + value.color + ";'>" + value.name+"</label>";
                content += "<br>";
                idItinerary[index] = parseInt(value.id);        
                mapNumbers[index] = parseInt(value.map_number);        
                names[index] = value.name;        
                logos[index] = value.logo;        
            });
            $('#collapse-itinerary').html(content);
        }
    }); 
}


// Initialize and add the map
function initMap() 
{
    // Centramos el mapa con Coordenadas decimales en Medellín: 
    var uluru;
    uluru = {lat: 6.2518401, lng: -75.563591};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13, 
        center: uluru,
        title: 'Medellín',
        mapTypeId: 'roadmap'

    });
    var marker = new google.maps.Marker({position: uluru, map: map});

    // This event listener will call addMarker() when the map is clicked.
//                map.addListener('click', function(event) {
//                    addMarker(event.latLng);
//                });

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
//                idMapNumbers[index] = parseInt(value.id_map);
                locations[index] = {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)};
                places[index] = value.name;
                descriptionPlace[index] = value.description;
                urlPlace[index] = value.url;
            });
            console.log(idMap)
            $.each(locations, function(index, value){
                addMarker(index, value);
            })
            
        }
    }); 
}


//***************************************************************
// Adds a marker to the map and push to the array.
function addMarker(index, location) 
{ 
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + places[index] + '</h1>' +
            '<div id="bodyContent">'+
            '<p>'+ descriptionPlace[index] +'</p>' +
            '<p>Lugar en detalle: <a href="' + urlPlace[index] + '" target="_blank">' + urlPlace[index] + 'dd</a></p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
    var pos = findElementArray(idItinerary, idMap[index]);
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + names[pos] + '. (Clic para ver sobre el lugar)',
        map: map, 
        icon: 'assets/images/map-icons/' + logos[pos]
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    
    markers.push(marker);
}


function optionsMarkers(id)
{
    if($("#" + id).prop('checked')){
        var element = parseInt($("#" + id).val());
        var positionInitial = findElementArray(idMap, element);
        var positionFinal = findLastElementSubArray(idMap, positionInitial);
        showMarkers(positionInitial, positionFinal); 
    }else{
        clearMarkers();
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers() 
{
    setMapOnAll(null, 0, idMap.length-1);
}


// Shows any markers currently in the array.
function showMarkers(positionInitial, positionFinal) 
{
    setMapOnAll(map, positionInitial, positionFinal);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers() 
{
    clearMarkers();
    markers = [];
}


// Sets the map on all markers in the array.
function setMapOnAll(map, positionInitial, positionFinal) 
{
//    for (var i = 0; i < markers.length; i++) {
//        markers[i].setMap(map);
//    }
    for (var i = positionInitial; i < positionFinal; i++) {
        markers[i].setMap(map);
    }
}


//  Función para encontrar un elemento en un array, devolviendo la posición
function findElementArray(arrayData, item)
{
    var pos = -1;
    var i = 0;
    while(i < arrayData.length && pos === -1){
        if(arrayData[i] === item){
            pos = i;
        }else{
            i++;
        }
    }
    return pos
}


//  Función para encontrar el último elemento en un sub array, devolviendo la posición
function findLastElementSubArray(arrayData, positionInitial)
{
    var positionFinal = positionInitial;
    var i = positionInitial + 1;
    while(i < arrayData.length && positionFinal === positionInitial){
        if(arrayData[i] !== arrayData[positionInitial]){
            positionFinal = i - 1;
        }else{
            i++;
        }
    }
    if(i === arrayData.length){
        positionFinal = i - 1;
    }
    return positionFinal
}

