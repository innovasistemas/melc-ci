<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MasterEngine extends CI_Controller {

    /**
     * Index Page for this controller.dd
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */

    public function __construct() 
    {
        parent::__construct();

        $this->load->helper(array("url", "form"));
        $this->load->library('form_validation');
        $this->load->model("ManagementModel");
    }

    public function __destruct() 
    {

    }

    public function index()
    {
        
    }


    // Función para devolver un listado general de registros en un objeto JSON. 
    // Recibe un objeto JSON     // que contiene la tabla, los campos a mostrar 
    // y un criterio de búsqueda
    public function listRecords()
    {
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            $objResult = $this->ManagementModel->read(
                    $arrayData['bd']['table'], array_values($arrayData['fields']
                ));
            $arrayResult = [];
            foreach ($objResult->result() as $row){
                $arrayResult[] = $row;  
            }
        }else{
            $arrayResult = [
                "content" => "datos incompletos para realizar esta solicitud", 
                "error" => 201
            ];
        }
 
        echo json_encode($arrayResult);
    }
    
    
    // Función para devolver el total de registros de una entidad
    public function totalRecords($table="")
    {
        echo json_encode([
            'totalRecords' => $this->ManagementModel->totalRecords($table)
        ]);
    }

    
    // Función para eliminar registros de una tabla a partir de su id
    public function deleteRecords()
    {
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            $intResult = $this->ManagementModel->delete(
                    $arrayData['bd']['table'], $arrayData['fields']['id']
                );
            $arrayResult = array(
                "response" => "registro eliminado correctamente", 
                "affectedRows" => $intResult,
                "error" => 0
            );
        }else{
            $arrayResult = [
                "response" => "datos incompletos para realizar esta solicitud", 
                "affectedRows" => 0,
                "error" => 201
            ];
        }
        
        echo json_encode($arrayResult);
    }


    // Función para guardar un registro en inserciones o actualizaciones
    public function saveRecord()
    {
        if(!empty($this->input->post("dataSend"))){
           
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);  

            if((int)$arrayData['fields']['id'] == 0){
                $intResult = $this->ManagementModel->insert(
                        $arrayData['db']['table'], $arrayData['fields']);
                
            }else{
                $intResult = $this->ManagementModel->update(
                        $arrayData['db']['table'], $arrayData['fields']);
            }
            
            $arrayResult = array(
                "response" => "registro guardado correctamente", 
                "affectedRows" => $intResult,
                "error" => 0
            );
        }else{
            $arrayResult = [
                "response" => "datos incompletos para realizar esta solicitud", 
                "affectedRows" => 0,
                "error" => 201
            ];
        }
        
        echo json_encode($arrayResult);
    }
    
    
    //Cargar imagen
    //
                ///++++++++++++++++++++++++++++++++++
    public function loadFile()
    {
        if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
        {
            $mensaje = "";

            //***************************************
            //Carga de imagen
            //obtenemos el archivo a subir
            $file = $_FILES['url']['name'];
            $type = $_FILES['url']['type'];
            $size = $_FILES['url']['size'];
            $error = "";

//            if($file)
//            {
                //Comprobamos si existe un directorio para subir el archivo, si no es así, lo creamos
        //        if(!is_dir("files/")) 
        //            mkdir("files/", 0777);

//                if(strpos($type, "jpeg") || strpos($type, "png") || strpos($type, "gif"))
//                {
                    //Comprobamos si el archivo ha subido
                    //if (move_uploaded_file($_FILES['fleArchivo']['tmp_name'],"files/".$file))
//                    if (move_uploaded_file($_FILES['url']['tmp_name'],"../backend/assets/images-article/".$file))
//                    {
//                               sleep(2);//retrasamos la petición 2 segundos
//                               $arrayResult["imagen"] = $file; //Devolvemos el nombre del archivo para pintar la imagen
//                               $arrayResult["ext"] = $type; 
//                               $arrayResult["siz"] = $size; 

//                        $arrayRegistro =['title'=>$titulo, 'description'=>$descripcion, 'image'=>$file];
//                        $this->ModeloGestion->insertarRegistro('article', $arrayRegistro);
//                    }
//                    else
//                    {
//                        $error = "Ocurrió un error al subir el archivo";
//                    }
//                }
//                else
//                {
//                    $error = "Archivo no válido";
//                }


//            }


            //***************************************

            //$arrayResult["mensaje"] = $mensaje;
            //$arrayResult["error"] = $error;

            //echo $mensaje;
            //echo json_encode($arrayResult);



        }
        else
        {
            //throw new Exception("Error Processing Request", 1);   
            return "Error Procesando la petición";   
        }
    }
    
}
