<!-- 

-->

<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Medellín en la Cabeza</title>
        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.ico" />
        
    </head>
    
    <body>                
        <!--Inicio barra de navegación-->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="navbar-top"></nav>
        <!-- Fin barra de navegación-->
        
        <!-- Inicio header (cabecera)-->
        <!-- Half Page Image Background Carousel Header -->
        <header id="myCarousel" class="carousel slide" data-ride="carousel"></header>
        <!-- Fin header (cabecera)-->
        
        <!-- Inicio contenido - (formulario principal) -->
        <div id="content-map">
            
        </div>
        
        <div id="container" class="modal-dialog lead text-justify">
            
            <p>&nbsp;</p>
            <h1 class="h1 text-center text-uppercase">Confirmación boletín de noticias</h1>
            <p>&nbsp;</p>
            
            <div id="content-main" class="text-center alert <?php echo $colorResponse; ?>">
                <?php
                    echo $response;
                ?>
            </div>
            
            <br><br>
            
            <a href="#!" id="link-home" title="Inicio">
                <h3 class="text-center">
                    Regresar a la página de inicio
                </h3>
            </a>
            
        </div>
        <br><br><br><br><br>
        <div id="content-common"></div>
        
        <!-- Fin contenido -->
        
        <!-- Inicio pie de página -->
        <!--<footer id="footer" class="page-footer font-small blue pt-4 mt-4 navbar-color"></footer>-->
        
        <footer id="footer" class="page-footer font-small blue pt-4 mt-4 navbar-color">
            
            <div id="footer-links" class="container-fluid text-center text-md-left"></div>
            
            <div id="footer-date" class="footer-copyright text-center py-3 text-capitalize">
                &copy; <span id="footer-date-copyright"></span> copyright:
                <a href="#!">medellín en la cabeza</a>
            </div>
            
        </footer>
        <!-- Fin pie de página -->
              
        <!--Scripts de la página-->
        <script src="http://medellinenlacabeza.medellinjoven.com/public/assets/js/jquery-2.1.4.js"></script> 
        <script src="http://medellinenlacabeza.medellinjoven.com/public/assets/js/jquery-ui-1.12.1.custom/jquery-ui.js"></script>
        <script src="http://medellinenlacabeza.medellinjoven.com/public/assets/css/bootstrap-3.3.6/dist/js/bootstrap.min.js"></script>
        
        <div id="divStyles">
            <link rel="stylesheet" type="text/css" href="http://medellinenlacabeza.medellinjoven.com/public/assets/css/styles.css" />
            <link rel="stylesheet" type="text/css" href="http://medellinenlacabeza.medellinjoven.com/public/assets/js/jquery-ui-1.12.1.custom/jquery-ui.css"/>
            <link rel="stylesheet" type="text/css" href="http://medellinenlacabeza.medellinjoven.com/public/assets/js/jquery-ui-1.12.1.custom/jquery-ui.theme.css"/>
            <link rel="stylesheet" type="text/css" href="http://medellinenlacabeza.medellinjoven.com/public/assets/css/bootstrap-3.3.6/dist/css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="http://medellinenlacabeza.medellinjoven.com/public/assets/css/bootstrap-3.3.6/dist/css/bootstrap-theme.css" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto" >
        </div>
        
        <script>
            $(function(){ 
                
                loadFooterDate();
                
                $("#link-home").click(function(){
                   $(location).attr('href', urlBase); 
                });
                
            });
            
            
            //****************************
            //Funciones Javascript
            //****************************
            
            var isUrlLocalRemote = window.location.toString().indexOf('http://127.0.0.1', 0);
            var urlBase = 'http://127.0.0.1/public/';

            if(isUrlLocalRemote < 0){
                isUrlLocalRemote = window.location.toString().indexOf('http://medellinenlacabeza', 0);
                if(isUrlLocalRemote < 0){
                    urlBase = 'http://melc.medellinjoven.com/public/';
                }else{
                    urlBase = 'http://medellinenlacabeza.medellinjoven.com/public/';
                }
            }else{
                urlBase = 'http://127.0.0.1/melc-ci/public/';
            }

            
            function loadFooterDate()
            {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

                $('#footer').find('#footer-date').find('#footer-date-copyright').html(months[month] + " - " + year);
            }
            
        </script>
        
    </body>
</html>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    