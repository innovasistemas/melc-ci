/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function optionsMarkers1()
{//$(':checkbox').prop('checked', true)
    if($("#chkItinerary1").prop('checked')){
        showMarkers(); 
    }else{
        clearMarkers();
    }
}


function optionsMarkers2()
{//$(':checkbox').prop('checked', true)
    if($("#chkItinerary2").prop('checked')){
        showMarkers2(); 
    }else{
        clearMarkers2();
    }
}


// Initialize and add the map
function initMap() 
{
    // The location of Uluru

    // Coordenadas decimales para Medellín:

    var uluru;
    uluru = {lat: 6.2518401, lng: -75.563591};

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10, 
        center: uluru,
        title: 'Medellín',
        icon: 'brown_markerA.png',
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
    var locations = [
        {lat: 6.2471457, lng: -75.6700965},
        {lat: 6.371457, lng: -75.5900965},
        {lat: 6.2771457, lng: -75.5700965},
        {lat: 6.2779302, lng: -75.6387827},
        {lat: 6.2891079, lng: -75.5115368}
    ];

    $.each(locations, function(index, value){
        addMarker(index, value);
    })

    // Adds a marker at the center of the map.
    var locations2 = [
        {lat: 6.3471457, lng: -75.6700965},
        {lat: 6.471457, lng: -75.5900965},
        {lat: 6.3771457, lng: -75.5700965},
        {lat: 6.3779302, lng: -75.6387827},
        {lat: 6.3891079, lng: -75.5115368}
    ];

    $.each(locations2, function(index, value){
        addMarker2(value);
    })

}


// Adds a marker to the map and push to the array.
function addMarker(index, location) 
{
    var marker = new google.maps.Marker({
        position: location,
//        title: index,
        content: index,
        map: map, 
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//        icon: 'assets/images/menu-burguer.png'
    });
//    marker.setIcon('http://img.javascriptes.com/javascript/green-dot.png') 
    markers1.push(marker);
}


// Sets the map on all markers in the array.
function setMapOnAll(map) 
{
    for (var i = 0; i < markers1.length; i++) {
        markers1[i].setMap(map);
    }
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers() 
{
    setMapOnAll(null);
}


// Shows any markers currently in the array.
function showMarkers() 
{
    setMapOnAll(map);
}


// Deletes all markers in the array by removing references to them.
function deleteMarkers() 
{
    clearMarkers();
    markers1 = [];
}


// Adds a marker to the map and push to the array.

function addMarker2(location) 
{
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    marker.setIcon('http://img.javascriptes.com/javascript/blue-dot.png') 
    markers2.push(marker);
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


