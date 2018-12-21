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
    var entity = 'melc_map';
    var objJson = {
        'bd': {
            'table': entity,
            'orderField': 'map_number'
        },
        fields: {
            '0': 'id',
            '1': 'map_number',
            '2': 'name',
            '3': 'description',
            '4': 'logo',
            '5': 'color'
        },
        clauses: {
            'active': 1,
        }
    }

    var strJson = JSON.stringify(objJson);

    $.ajax({
        url: urlListRecord,
        data: {'dataSend': strJson},
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            var content = "";
            var id;
            var modal;
            var modals = "";
            
            $.each(data, function(index, value){
                id = 'chkItinerary' + value.map_number
                content += "<div class='row'>";
                content += "<div class='col-sm-12'>";
                content += "<input type='checkbox' value='" + value.id + "' id='" + id + "' name='" + id + "' onclick='optionsMarkers(\"" + id + "\")' data-toggle='tooltip' data-placement='bottom' title=''/>";
                content += "<label for='" + id + "' title='' style='color:" + value.color + ";'>" + value.name+"</label>";
                content += "&nbsp;&nbsp;&nbsp;";
                content += "<img src='assets/images/information.png' title='Ver información de la ruta' class='img img-thumbnail' style='width:25px; height:25px;' data-toggle='modal' data-target='#modal-itinerary"+ index + "'>";
                content += "</div>";
                content += "</div>";
                idItinerary[index] = parseInt(value.id);        
                mapNumbers[index] = parseInt(value.map_number);        
                names[index] = value.name;        
                logos[index] = value.logo;    
                
                modal = '<div class="modal fade" id="modal-itinerary'+ index +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                            '<div class="modal-dialog" role="document">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                        '<h2 class="modal-title text-uppercase" id="exampleModalLabel2" style="color:' + value.color + ';">' + 
                                        '<img src="assets/images/map-icons/' + value.logo + '" class="img-thumbnail zoom" />&nbsp;&nbsp;&nbsp;' +
                                        value.name + 
                                        '</h2>' +
                                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                            '<span aria-hidden="true">&times;</span>' +
                                        '</button>' +
                                    '</div>' +
                                    '<div class="modal-body lead text-center margin-modal">' +
                                        '<p class="lead text-center margin-modal">'+
                                            value.description +
                                        '</p>'+
                                        '<p class="text-center">' +
                                            '<img src="assets/images/contact-information/logo-header.png" alt="rutas"/>' +
                                        '</p>'+
                                    '</div>'+
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-secondary text-capitalize" data-dismiss="modal">cerrar</button>' +
                                    '</div>' +
                                '</div>' +
                              '</div>'+
                        '</div>';
                
                modals += modal;
            });
            
            $('#modal-itinerary').html(modals);
            
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
    marker.setVisible(false);
    
    
    // Cerrar los infoWindow (en revisión)
    google.maps.event.addListener(marker, 'click', function() {
        if (infoWindow) {
            infoWindow.close();
        };
    });
    
    // This event listener will call addMarker() when the map is clicked.
//                map.addListener('click', function(event) {
//                    addMarker(event.latLng);
//                });

    var entity = 'melc_place';
    var objJson = {
        'bd': {
            'table': entity,
            'orderField': 'id_map'
        },
        fields: {
            '0': 'id',
            '1': 'name',
            '2': 'description',
            '3': 'latitude',
            '4': 'longitude',
            '5': 'link',
            '6': 'id_map',
        },
        clauses: {
            'active': 1,
        }                   
    }

    var strJson = JSON.stringify(objJson);

    $.ajax({
        url: urlListRecord,
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
                urlPlace[index] = value.link;
            });
            $.each(locations, function(index, value){
                addMarker(index, value);
            });
        }
    }); 
}


//***************************************************************
// Adds a marker to the map and push to the array.
function addMarker(index, location) 
{ 
    var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">' + places[index] + '</h2>' +
            '<div id="bodyContent">' +
            '<p>'+ descriptionPlace[index] +'</p>' +
            '<p>Lugar en detalle: <a href="' + urlPlace[index] + '" target="_blank">' + urlPlace[index] + 'dd</a></p>' +
            '</div>' +
            '</div>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
        
    var pos = findElementArray(idItinerary, idMap[index]);
    
    var marker = new google.maps.Marker({
        position: location,
        title: 'Ruta: ' + names[pos] + '. (Clic para ver acerca del lugar)',
        map: map, 
        icon: 'assets/images/map-icons/' + logos[pos]
    });
    
//    google.maps.event.addListener(marker, 'click', function() {
//        console.log(infoWindow)
//        if (infoWindow) {
//            infoWindow.close();
//        };
//    });

    marker.addListener('click', function() {
        if(infoWindow){
//            console.log(marker)
            infoWindow.close()
        }
        
        infoWindow.open(map, marker);
    });
    
    markers.push(marker);
    clearMarkers(0, markers.length - 1);
}


function optionsMarkers(id)
{
    var element = parseInt($("#" + id).val());
    var positionInitial = findElementArray(idMap, element);
    var positionFinal = findLastElementSubArray(idMap, positionInitial);
    if($("#" + id).prop('checked')){
        showMarkers(positionInitial, positionFinal); 
    }else{
        clearMarkers(positionInitial, positionFinal);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers(positionInitial, positionFinal) 
{
    setMapOnAll(null, positionInitial, positionFinal);
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
    for (var i = positionInitial; i <= positionFinal; i++) {
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
    return pos;
}


//  Función para encontrar el último elemento en un sub array, devolviendo la posición
function findLastElementSubArray(arrayData, positionInitial)
{
    var positionFinal = positionInitial;
    var sw = false;
    var i = positionInitial + 1;
    while(i < arrayData.length && !sw){
        if(arrayData[i] !== arrayData[positionInitial]){
            positionFinal = i - 1;
            sw = true;
        }else{
            i++;
        }
    }
    if(i === arrayData.length){
        positionFinal = i - 1;
    }
    return positionFinal;
}

