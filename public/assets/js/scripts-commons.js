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
    sessionStorage.clear();
    $(location).attr('href', 'index.html');
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
    contentHTML += "<br><strong>jaime montoya</strong> ";
    contentHTML += "<small><code>(innovasistemas@gmail.com)</code></small>";
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



