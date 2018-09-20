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
            
            $response = "";
            $error = 0;
            
            //Comprobar si hay imagen para subirla
            if(!empty($_FILES)){
                $arrayFile = $this->loadFile();
                $arrayData['fields']['logo'] = $arrayFile['nameFile']; 
            }else{
                $arrayFile['responseFile'] = "sin archivo para cargar";
                $arrayFile['errorFile'] = 0;
            }
            
            //Verificar insert/update    
            if((int)$arrayData['fields']['id'] == 0){
                $intResult = $this->ManagementModel->insert(
                        $arrayData['db']['table'], $arrayData['fields']);
            }else{
                $intResult = $this->ManagementModel->update(
                        $arrayData['db']['table'], $arrayData['fields']);
            }
            
            if($intResult > 0){
                $response = "registro(s) guardado(s) correctamente";
            }else{
                $response = "no se pudo guardar el (los) registro(s)";
                $error = 301;
            }
            
        }else{
            $response = "datos incompletos para realizar esta solicitud"; 
            $error = 201;
            $intResult = 0;
        }
        
        $arrayResult = [
            "response" =>  $response,
            "responseFile" => $arrayFile['responseFile'], 
            "affectedRows" => $intResult,
            "error" =>  $error,
            "errorFile" => $arrayFile['errorFile']
        ];
        
        echo json_encode($arrayResult);
    }
    
    
    //Función para cargar archivos en el servidor (usado para imágenes)
    public function loadFile()
    {
        $responseFile = "";
        $nameFile = "";
        $errorFile = 0;
        
        //Comprobar si hay imagen para subirla
        if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && 
                strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 
                'xmlhttprequest'){
            if(!empty($_FILES['inputFile'])){
                $fName = $_FILES['inputFile']['name'];
                $fType = $_FILES['inputFile']['type'];
                $fSize = $_FILES['inputFile']['size'];
                $fTempName = $_FILES['inputFile']['tmp_name'];

                if((strpos($fType, "jpeg") || strpos($fType, "png") || 
                        strpos($fType, "gif")) && $fSize <= 2097152){

                    if(move_uploaded_file($fTempName, 
                            $_SERVER['DOCUMENT_ROOT'] .  
                            "/melc-ci/public/assets/images/gallery/" . $fName)){

                        $nameFile = $fName;
                        $responseFile = "se subió el archivo correctamente.";

                    }else{
                        $responseFile = "Ocurrió un error al subir el archivo.";
                        $errorFile = 601;
                    }
                }else{
                    $responseFile = "El tipo o el tamaño del archivo no "
                            . "son válidos.";
                    $errorFile = 602;
                }
            }else{
                $responseFile = "No se especificó el archivo.";
                $errorFile = 603;
            }
        }else{
            $responseFile = "Error procesando la petición de subida "
                    . "de archivos.";
            $errorFile = 604;
        }
        
        $arrayFile = [
            "responseFile" => $responseFile, 
            "nameFile" => $nameFile, 
            "errorFile" => $errorFile
        ];
        
        return $arrayFile;
    }
    
}
