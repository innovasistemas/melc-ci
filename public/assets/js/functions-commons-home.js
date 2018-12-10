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
    var month = date.getMonth();
    var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    $('#footer').find('#footer-date').find('#footer-date-copyright').html(months[month] + " - " + year);
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
                if(index % 2 === 0){
                    content += "<div class='row'>";
                }
                content += "<div class='col-sm-1'>";
                content += "<a href='" + value.link +"' title='" + value.name + "' target='_blank'>" 
                content += "<img src='assets/images/social-networks/" + value.logo + "' />";
                content += "</a>";
                content += "</div>";
                content += "<div class='col-sm-4'>";
                content += "<a href='" + value.link +"' title='" + value.name + "' target='_blank' class='font-social-network'>"
                content += value.description;
                content += "</a>";
                content += "</div>";
                
                if(index % 2 === 1){
                    content += "</div>";
                }
                    
            });
            $('#links-social-networks').html(content);
        }
    }); 
}
            

function loadContactInformation()
{
    var entity = 'melc_contact_information';
    var objJson = {
        'bd': {
            'table': entity
        },
        fields: {
            '0': 'id',
            '1': 'address',
            '2': 'phone',
            '3': 'cell_phone',
            '4': 'email'
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
                content += "<div class='col-sm-1'>";
                content += "<img src='assets/images/contact-information/address-footer.png' />";
                content += "</div>";
                content += "<div class='col-sm-4'>";
                content += "<strong>";
                content += value.address;
                content += "</strong>"
                content += "</div>";
                content += "<div class='col-sm-1'>";
                content += "<img src='assets/images/contact-information/mail-footer.png' />";
                content += "</div>";
                content += "<div class='col-sm-4'>";
                content += "<strong>";
                content += value.email;
                content += "</strong>";
                content += "</div>";
                content += "</div>";
                
                content += "<div class='row'>&nbsp;</div>";
                
                content += "<div class='row'>";
                content += "<div class='col-sm-1'>";
                content += "<img src='assets/images/contact-information/phone-footer.png' />";
                content += "</div>";
                content += "<div class='col-sm-4'>";
                content += "<strong>";
                content += value.phone;
                content += "</strong>";
                content += "</div>";
                content += "<div class='col-sm-1'>";
                content += "<img src='assets/images/contact-information/phone-footer.png' />";
                content += "</div>";
                content += "<div class='col-sm-4'>";
                content += "<strong>";
                content += value.cell_phone;
                content += "</strong>";
                content += "</div>";
                content += "</div>";
                
                content += "<div class='row'>&nbsp;</div>";
                
            });
            $('#contact-information').html(content);
        }
    }); 
}
            


