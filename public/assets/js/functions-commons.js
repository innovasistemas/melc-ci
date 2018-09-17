/* 
 * Funciones para el admin
 * 
 */

var isUrlLocalRemote = window.location.toString().indexOf('http://127.0.0.1', 0);

var urlListRecord;
var urlTotalRecord;
var urlSaveRecord;
var urlDeleteRecord;

if(isUrlLocalRemote < 0){
    urlListRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/listrecords/';
    urlTotalRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/totalrecords/';
    urlSaveRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/saverecord/';
    urlDeleteRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/deleterecords/';
}else{
    urlListRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/';
    urlTotalRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/totalrecords/';
    urlSaveRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/saverecord/';
    urlDeleteRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/deleterecords/';
}


//****************************
//Funciones Javascript
//****************************


//****************************
//Funciones de página
//****************************
function loadLayout(isHome)
{
    $('#divStyles').load('styles.html');
    if(!isHome){
        $('#navbar-top').load('../layout/navbar-top.html');
    }
//    $('#myCarousel').load('../layout/header.html');
    $('#content-common').load('../layout/content-common.html');
//    $('#footer-links').load('layout/footer.html');
}


function loadFooterDate()
{
    var date = new Date();
    var year = date.getFullYear();
    $('#footer').find('#footer-date').find('#footer-date-copyright').html(year);
}
   


//****************************
//Funciones de formulario
//****************************

function enabledForm(sw)
{
    $('#frmRegister').find('input, textarea, button, select, file').prop('disabled', sw);
}


function cleanForm()
{
    $("#frmRegister").find('input[type=text], input[type=email], input[type=tel], input[type=hidden], input[type=password], textarea').val('');
}


function resetForm()
{ 
    if($("#btnReset").attr('data-page') !== "index"){
        enabledForm(true); 
    }
    $(".ketchup-error").css("display", "none");
    
    $("#frmRegister").find('#logoViewUpdate').attr('src', '#');
    $("#frmRegister").find("#logoViewUpdate").attr('class', 'hide');

    $("#frmRegister").find('div').each(function(){
        var div = this;
        if(div.id !== undefined){
            $("#" +  div.id).removeClass("has-error has-success");
        }
    });
}
        

//****************************
//Funciones de validación
//****************************

function validateLength(division, input, length)
{
    var sw = false;
    if(input.val().length >= length){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        sw = true;
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
    }
    return sw;
}
            

function validateEmail(division, input)
{
    var sw = false;
    var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (pattern.test(input.val())){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        sw = true;
    } else{
        division.removeClass("has-success");
        division.addClass("has-error");
    }
    return sw;
}


function validateUrl(division, input)
{
    var pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(pattern.test(input.val())){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        return true;                    
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
        return false;
    }
}


function validateFile(division, input)
{
    var sw = false;
    var file = input.files[0];
    var fName = file.name;
    var fExtension = fName.substring(fName.lastIndexOf('.') + 1);
    var fSize = file.size;
    
    if(/gif|jpeg|jpg|png$/i.test(fExtension)){
        if(fSize <= 2097152){
            sw = true;
        }
    }
    
    if(sw){
        division.removeClass("has-error"); 
        division.addClass("has-success");
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
    }
    return sw;
}
  


//****************************
//Funciones del CRUD
//****************************

function newRecord(inputDefault)
{
    $( "#dialog" ).html("¿está seguro?");
    $( "#dialog" ).dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "aceptar": function () {
                $(this).dialog("close"); 
                enabledForm(false);
                cleanForm();
                $("#txtId").val('0');
                inputDefault.focus();
            },
            "cancelar": function(){
               $(this).dialog("close"); 
            }
        } 
    });
}


function saveRecord(entity, fields)
{
    var objJson = {
        'db': {
            'table': entity
        },
        'fields': fields
    };
    
    var strJson = JSON.stringify(objJson);
    
    var formData = new FormData($("#frmRegistro"));
    formData.append('dataSend', strJson);
    
    if($("form").find("input:file").prop("type") === "file"){
        formData.append('inputFile', $("form").find("input:file")[0].files[0]);
    }
    
    $.ajax({
        url: urlSaveRecord,
        data: formData,
        type: 'POST',
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        success: function(data) {
            $( "#dialog" ).html(
                    "<b>respuesta:</b>" + 
                    "<br><u>datos:</u> " + data.response + 
                    "<br><u>carga:</u> " + data.responseFile +
                    "<br><b>filas afectadas:</b> " + data.affectedRows + 
                    "<br><b>errores:</b>" +
                    "<br><u>datos:</u> " + data.error +
                    "<br><u>carga:</u> " + data.errorFile
                    );
            $( "#dialog" ).dialog({
                autoOpen: true,
                modal: true,
                buttons: {
                    "Aceptar": function () {
                        $(this).dialog("close");
                        loadRecords(); 
//                        window.location = 'advertisement.html'; //Provisional para cargar el DataTable
                    }
                } 
            });
        }
    });
}


function deleteRecord(entity, id)
{
    var objJson = {
        'bd': {
            'table': entity
        },
        'fields': {
            'id': id                      
        }                   
    }

    var strJson = JSON.stringify(objJson);

    $( "#dialog" ).html("¿está seguro?");
    $( "#dialog" ).dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "aceptar": function () {
                $(this).dialog("close"); 
                $.ajax({
                    url: urlDeleteRecord,
                    data: {'dataSend': strJson},
                    type: 'POST',
                    dataType: 'json',
                    success: function(data){
                        $( "#dialog" ).html(data.response + "<br>filas afectadas: " + data.affectedRows + " <br>error: " + data.error);
                        $( "#dialog" ).dialog({
                            autoOpen: true,
                            modal: true,
                            buttons: {
                                "aceptar": function () {
                                    $(this).dialog("close");
                                    loadRecords();
                                }
                            } 
                        });
                    }

                });
            },
            "cancelar": function(){
               $(this).dialog("close"); 
            }
        } 

    });
}

