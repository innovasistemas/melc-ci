/* 
 * Scripts comunes para el sitio
 * Usado por las páginas del admin
 */

$('#navbar-top').delegate('#about', 'click', function(){
    var date = new Date()
    var year = date.getFullYear();
    var contentHTML = "";
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
