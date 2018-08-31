/* 
 * Scripts comunes para el sitio
 * Usado por las páginas del admin
 */

$('[data-toggle="tooltip"]').tooltip();
                
$('#frmRegister').ketchup();

$("#frmRegister").on('reset', function(){
    resetForm();
});

$('#navbar-top').delegate('#about', 'click', function(){
    var date = new Date()
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var contentHTML = "";
    contentHTML += "<small><code>" + day + "-" + parseInt(month + 1) + "-" + year + "</code></small> " ;
    contentHTML += "<br>";
    contentHTML += "MELC - medellín en la cabeza";
    contentHTML += "<br>desarrollado por: ";
    contentHTML += "<strong>jaime montoya</strong>";
    contentHTML += "<br>&copy; Copyright " + year;
    
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



