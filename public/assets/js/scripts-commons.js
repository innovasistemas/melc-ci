/* 
 * Scripts comunes para el sitio
 * Usado por las páginas del admin
 */

$('body').ready(function(){
    switch($('body').find('input').attr('data-page')){
        case 'noMenu':
            loadLayout(true);
            break;
        case 'noRecords':
            loadLayout(false);
            verifyAuthentication();
            break;
        case 'records':
            loadLayout(false);
            loadRecords();
            verifyAuthentication();
            break;
    }
    
    loadFooterDate();
    loadUserSession();
    
});


$('[data-toggle="tooltip"]').tooltip();


$('#frmRegister').ketchup();


$('#frmRegister').on('reset', function(){
    resetForm();
    cleanForm();
    if($('body').find('input').attr('data-page') !== 'noRecords'){
        enabledForm(true);
    }
});


$("#newRecord").click(function(){
    newRecord(); 
});


$('#reloadPage').click(function() {
    location.reload();
});
            

$('#closeSession').click(function() {
    closeSession('ninguna');
});
            

$('#navbar-top').delegate('#about', 'click', function(){
    var date = new Date()
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var contentHTML = "";
    contentHTML += "MELC - Medellín en la Cabeza";
    contentHTML += "<br>Desarrollado por: ";
    contentHTML += "<br><strong>Jaime Montoya</strong> ";
    contentHTML += "<small><code>(innovasistemas@gmail.com)</code></small>";
    contentHTML += "<br>&copy; Copyright <!-- - <span class='copyleft'>&copy;</span> Copyleft -->" + year;
    contentHTML += "<br>";
    contentHTML += "<small><code>" + day + "-" + parseInt(month + 1) + "-" + year + "</code></small> " ;
    
    $( "#dialog" ).html(contentHTML);
    $( "#dialog" ).dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "aceptar": function () {
                $(this).dialog("close");
                return false; // Evitar ejecutar el submit del formulario.
            }
        } 
    });
}); 


$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: 'Anterior',
    nextText: 'Siguiente',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'yy-mm-dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    showWeek: true
};

$.datepicker.setDefaults($.datepicker.regional['es']);       



