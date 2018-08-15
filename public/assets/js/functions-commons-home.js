/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//****************************
//Funciones Javascript
//****************************


//****************************
//Funciones de página
//****************************

function loadLayout()
{
    $('#divStyles').load('styles.html');
    $('#navbar-top').load('layout/navbar-top-internal.html');
    $('#myCarousel').load('layout/header.html');
    $('#content-common').load('layout/content-common.html');
    $('#footer').load('layout/footer.html');
}  
            


function loadFooterDate()
{
    var date = new Date();
    var year = date.getFullYear();
//                alert(year + 5)

    $('#footer-date').html('1 + year');

}


//****************************
//Funciones del CRUD
//****************************

function loadSocialNetworks()
{
    var url = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/'
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
        url: url,
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

