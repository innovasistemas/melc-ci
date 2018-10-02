/* 
 * Funciones Javascript para la home (inicio) y las internas
 * 
 */

var isUrlLocalRemote = window.location.toString().indexOf('http://127.0.0.1', 0);

var urlListRecord;

if(isUrlLocalRemote < 0){
    isUrlLocalRemote = window.location.toString().indexOf('http://medellinenlacabeza', 0);
    if(isUrlLocalRemote < 0){
        urlListRecord = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/listrecords/';
    }else{
        urlListRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/listrecords/';
    }
}else{
    urlListRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/';
}


//****************************
//Funciones de página
//****************************

function loadLayout(isHome)
{
    $('#divStyles').load('styles.html');
    if(!isHome){
        $('#navbar-top').load('layout/navbar-top-internal.html');
    }
    $('#myCarousel').load('layout/header.html');
    $('#content-common').load('layout/content-common.html');
    $('#footer-links').load('layout/footer.html');
}  
            

function loadFooterDate()
{
    var date = new Date();
    var year = date.getFullYear();
    $('#footer').find('#footer-date').find('#footer-date-copyright').html(year);
}


//****************************
//Funciones del CRUD y BD
//****************************

function loadSocialNetworks()
{
    var entity = 'melc_social_network';
    var objJson = {
        'bd': {
            'table': entity
        },
        fields: {
            '0': 'id',
            '1': 'name',
            '2': 'description',
            '3': 'link',
            '4': 'logo'
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
            $.each(data, function(index, value){
                content += "<div class='row'>";
                content += "<div class='col-sm-2'>";
                content += "<a href='" + value.link +"' title='" + value.name + "' target='_blank'>" 
                content += "<img src='assets/images/social-networks/" + value.logo + "' />";
                content += "</a>";
                content += "</div>";
                content += "<div class='col-sm-2'>";
                content += "<a href='" + value.link +"' title='" + value.name + "' target='_blank' class='font-social-network'>"
                content += value.description;
                content += "</a>";
                content += "</div>";
                content += "</div>";
            });
            $('#links-social-networks').html(content);
        }
    }); 
}
            


