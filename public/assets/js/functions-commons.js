/* 
 * Funciones para el admin
 * 
 */

//****************************
// Variables globales Javascript
//****************************

var entity;
var folder;

var isUrlLocalRemote = window.location.toString().indexOf('http://127.0.0.1', 0);

var urlListRecord;
var urlTotalRecord;
var urlSaveRecord;
var urlDeleteRecord;
var urlRequestAccess;
var urlVerifyAuthentication;

if(isUrlLocalRemote < 0){
    isUrlLocalRemote = window.location.toString().indexOf('http://medellinenlacabeza', 0);
    if(isUrlLocalRemote < 0){
        urlListRecord = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/listrecords/';
        urlTotalRecord = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/totalrecords/';
        urlSaveRecord = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/saverecord/';
        urlDeleteRecord = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/deleterecords/';
        urlRequestAccess = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/requestAccess/';
        urlVerifyAuthentication = 'http://melc.medellinjoven.com/backend/index.php/MasterEngine/verifyAuthentication/';
    }else{
        urlListRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/listrecords/';
        urlTotalRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/totalrecords/';
        urlSaveRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/saverecord/';
        urlDeleteRecord = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/deleterecords/';
        urlRequestAccess = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/requestAccess/';
        urlVerifyAuthentication = 'http://medellinenlacabeza.medellinjoven.com/backend/index.php/MasterEngine/verifyAuthentication/';
    }
}else{
    urlListRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/listrecords/';
    urlTotalRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/totalrecords/';
    urlSaveRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/saverecord/';
    urlDeleteRecord = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/deleterecords/';
    urlRequestAccess = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/requestAccess/';
    urlVerifyAuthentication = 'http://127.0.0.1/melc-ci/backend/index.php/MasterEngine/verifyAuthentication/';
}


//****************************
// Funciones Javascript
//****************************


//****************************
// Funciones de página
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
    var month = date.getMonth();
    var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    
    $('#footer').find('#footer-date').find('#footer-date-copyright').html(months[month] + " - " + year);
}


//****************************
// Funciones de sesión
//****************************

function loadUserSession()
{
    var content;
    content = sessionStorage.getItem('full_user_name') + " (" + sessionStorage.getItem('user') + ")";
    $('#container').find('#user-session-div').find('#user-session').html(content);
}


function verifyAuthentication()
{
    var entityAccess;
    entityAccess = 'melc_access';
    
    if(sessionStorage.length > 0){
        if(sessionStorage.getItem('session_id') !== null){
            var objJson = {
                'db': {
                    'table': entityAccess
                },
                fields: {
                    'id': sessionStorage.getItem('session_id'),
                    'ip_access': sessionStorage.getItem('ip_access'),
                    'user_agent': sessionStorage.getItem('user_agent'),
                    'token': sessionStorage.getItem('token'),
                }                   
            }

            var strJson = JSON.stringify(objJson);

            $.ajax({
                url: urlVerifyAuthentication,
                data: {'dataSend': strJson},
                type: 'POST',
                dataType: 'json',
                success: function(data) {
                    if(data.error !== 0){
                        closeSession('error de autenticación');
                    }
                }
            });
            
        }else{
            sessionStorage.clear();
            $(location).attr('href', 'index.html');
        }
        
    }else{
        sessionStorage.clear();
        $(location).attr('href', 'index.html');
    }
}


function closeSession(observation)
{
    entity = 'melc_access';
    folder = 'no-folder';
    
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var strDateTimeExit = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
    
    var fields = {
        'id': sessionStorage.getItem('session_id'),
        'active': 0,
        'observation': observation,
        'date_time_exit': strDateTimeExit
    }
    
    var objJson = {
        'db': {
            'table': entity
        },
        'fields': fields,
        'folder': folder
    };
    
    var strJson = JSON.stringify(objJson);
    
    $.ajax({
        url: urlSaveRecord,
        data: {'dataSend': strJson},
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            sessionStorage.clear();
            $(location).attr('href', 'index.html');
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            sessionStorage.clear();
            $(location).attr('href', 'index.html');
        }
    });
    
}


//****************************
// Funciones de formulario
//****************************

// Permite cambiar la imagen visualmente a medida que se seleccionan archivos
const readURL = (input) => {
 
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            $('#logoViewUpdate').attr('src', e.target.result);
            $("#logoViewUpdate").attr('class', 'show img-thumbnail');
        }
        reader.readAsDataURL(input.files[0]);
    }
};


function enabledForm(sw)
{
    $('#frmRegister').find('input, textarea, button, select, file').prop('disabled', sw);
}


function cleanForm()
{
    $("#frmRegister").find('input[type=text], input[type=email], input[type=tel], input[type=hidden], input[type=password], input[type=number], input[type=color], input[type=file], textarea').val('');
    $("#frmRegister").find('.select2').val('').trigger('change');
    $("#frmRegister").find('.jqte-test').jqteVal('');
}


function resetForm(state)
{ 
    $(".ketchup-error").css("display", "none");
    
    if(state !== "update"){
        $("#frmRegister").find('#logoViewUpdate').attr('src', '#');
        $("#frmRegister").find("#logoViewUpdate").attr('class', 'hide');
    }

    $("#frmRegister").find('div').each(function(){
        var div = this;
        if(div.id !== undefined){
            $("#" +  div.id).removeClass("has-error has-success");
        }
    });
    
    $("#frmRegister").find('.select2').select2().trigger('select2:close'); 
    $("#frmRegister").find('.select2').select2({
        placeholder: 'seleccione una opción',
        language: "es",
        allowClear: true
//        width: 'resolve'
//        theme: 'classic'
    });
    
}
        

//****************************
// Funciones de validación
//****************************

function validateValueBetween(division, input, valMin, valMax)
{
    if(!isNaN(input.val()) && parseFloat(input.val()) >= valMin && parseFloat(input.val()) <= valMax){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        return true;                    
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
        return false;
    }
}


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
    if(pattern.test(input.val()) || input.val() === "#!"){
        division.removeClass("has-error"); 
        division.addClass("has-success");
        return true;                    
    }else{
        division.removeClass("has-success");
        division.addClass("has-error");
        return false;
    }
}


function validateFile(division, input, maxSize)
{
    var sw = false;
    var file = input.files[0];
    var fName = file.name;
    var fExtension = fName.substring(fName.lastIndexOf('.') + 1);
    var fSize = file.size;
    
    if(/gif|jpeg|jpg|png$/i.test(fExtension)){
        if(fSize <= maxSize){
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
// Funciones del CRUD
//****************************


function newRecord()
{
    $( "#dialog" ).html("¿está seguro?");
    $( "#dialog" ).dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "aceptar": function () {
                $(this).dialog("close"); 
                resetForm();
                cleanForm(); 
                enabledForm(false);
                $("#txtId").val('0');
                $(':input:visible:enabled:first').focus();
            },
            "cancelar": function(){
               $(this).dialog("close"); 
            }
        } 
    });
}


function saveRecord(entity, fields, folder)
{ 
    var objJson = {
        'db': {
            'table': entity
        },
        'fields': fields,
        'folder': folder
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
                    }
                } 
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $( "#dialog" ).html(
                    "<b>respuesta:</b>" + 
                    "<br><span class='text-danger'>Sucedió un problema al tratar de guardar</span>" + 
                    "<br><b>incidencia</b>" + 
                    "<br><span class='text-danger'>" + textStatus + "</span>" +
                    "<br><b>tipo de error</b>" + 
                    "<br><span class='text-danger'>" + errorThrown + "</span>" +
                    "<br><b>estado:</b>" +
                    "<br><span class='text-danger'>" + XMLHttpRequest.status + "</span>" +
                    "<!--br><b>detalle:</b>" +
                    "<br>" + XMLHttpRequest.responseText + "-->"
                    );
            $( "#dialog" ).dialog({
                autoOpen: true,
                modal: true,
                buttons: {
                    "Aceptar": function () {
                        $(this).dialog("close");
                    }
                } 
            });
        }
    });
}


function deleteRecord(entity, folder, id)
{ 
    var objJson = {
        'bd': {
            'table': entity
        },
        'fields': {
            'id': id                      
        },
        'folder': folder
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
                        $( "#dialog" ).html(
                            "<b>respuesta:</b>" + 
                            "<br><u>datos:</u> " + data.response + 
                            "<br><u>archivos:</u> " + data.responseFile +
                            "<br><b>filas afectadas:</b> " + data.affectedRows + 
                            "<br><b>errores:</b>" +
                            "<br><u>datos:</u> " + data.error +
                            "<br><u>archivos:</u> " + data.errorFile
                        );
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

