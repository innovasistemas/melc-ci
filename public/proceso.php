<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
{
    $mensaje = "";
    
    //***************************************
    //Carga de imagen
    //obtenemos el archivo a subir
    $file = $_FILES['fleArchivo']['name'];
    $type = $_FILES['fleArchivo']['type'];
    $size = $_FILES['fleArchivo']['size'];
    $error = "";
    
    if($file)
    {
        //Comprobamos si existe un directorio para subir el archivo, si no es así, lo creamos
//        if(!is_dir("files/")) 
//            mkdir("files/", 0777);
        
        if(strpos($type, "jpeg") || strpos($type, "png") || strpos($type, "gif"))
        {
            //Comprobamos si el archivo ha subido
            //if (move_uploaded_file($_FILES['fleArchivo']['tmp_name'],"files/".$file))
            if (move_uploaded_file($_FILES['fleArchivo']['tmp_name'],"../backend/assets/images-article/".$file))
            {
               sleep(2);//retrasamos la petición 2 segundos
               $arrayResult["imagen"] = $file; //Devolvemos el nombre del archivo para pintar la imagen
               $arrayResult["ext"] = $type; 
               $arrayResult["siz"] = $size; 
            }   
        }
        else
        {
            $error = "Archivo no válido";
        }

         
    }
 
      
    //***************************************
    
    $arrayResult["mensaje"] = $mensaje;
    $arrayResult["error"] = $error;
    
    //echo $mensaje;
    echo json_encode($arrayResult);

}
else
{
    //throw new Exception("Error Processing Request", 1);   
    echo "Error Procesando la petición";   
}

