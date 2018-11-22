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
    
    
    //****************************
    // Funciones del CRUD
    //****************************

    // Función para devolver un listado general de registros en un objeto JSON. 
    // Recibe un objeto JSON     // que contiene la tabla, los campos a mostrar 
    // y un criterio de búsqueda
    public function listRecords()
    {
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            $orderFile = empty($arrayData['bd']['orderField']) 
                    ? "id" : $arrayData['bd']['orderField'];
            $objResult = $this->ManagementModel->read($arrayData['bd']['table'], 
                    array_values($arrayData['fields']), $orderFile);
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
        $response = "";
        $error = 0;
        $intResult = 0;
        $arrayFile['responseFile'] = "N/A";
        $arrayFile['errorFile'] = 0;
        
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            if($arrayData['folder'] != 'no-folder'){
                $arrayFile = $this->deleteFile($arrayData['bd']['table'], 
                        $arrayData['fields']['id'], $arrayData['folder']);
            }else{
                $arrayFile['responseFile'] = "sin archivo para eliminar";
                $arrayFile['errorFile'] = 0;
            }
            $intResult = $this->ManagementModel->delete(
                    $arrayData['bd']['table'], $arrayData['fields']['id']
                );
            if($intResult > 0){
                $response = "registro eliminado correctamente";
            }else{
                $response = "no se pudo eliminar el registro";
                $error = 203;
            }
        }else{
            $response = "datos incompletos para realizar esta solicitud";
            $error = 202;
        }
        
        $arrayResult = [
            "response" => $response, 
            "responseFile" => $arrayFile['responseFile'], 
            "affectedRows" => $intResult,
            "error" =>  $error,
            "errorFile" => $arrayFile['errorFile']
        ];
        
        echo json_encode($arrayResult);
    }


    // Función para guardar un registro en inserciones o actualizaciones
    public function saveRecord()
    { 
        $response = "";
        $error = 0;
        $intResult = 0;
        $arrayFile['responseFile'] = "N/A";
        $arrayFile['errorFile'] = 0;
        
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);  
            
            // Comprobar si hay imagen para subirla
            if(!empty($_FILES)){
                $arrayFile = $this->loadFile($arrayData['folder']);
                $arrayData['fields']['logo'] = $arrayFile['nameFile']; 
            }else{
                $arrayFile['responseFile'] = "sin archivo para cargar";
                $arrayFile['errorFile'] = 0;
            }
            
            // Verificar insert/update    
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
                $error = 204;
            }
            
        }else{
            $response = "datos incompletos para realizar esta solicitud"; 
            $error = 205;
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

    
    //****************************
    // Funciones para el tratamiento de archivos
    //****************************

    // Función para cargar archivos en el servidor (usado para imágenes)
    public function loadFile($folder)
    { 
        $responseFile = "";
        $nameFile = "";
        $errorFile = 0;
        
        // Comprobar si hay imagen para subirla
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
                            "/melc-ci/public/assets/images/" . $folder . 
                            "/" . $fName)){

                        $nameFile = $fName;
                        $responseFile = "se subió el archivo correctamente.";

                    }else{
                        $responseFile = "ocurrió un error al subir el archivo.";
                        $errorFile = 301;
                    }
                }else{
                    $responseFile = "el tipo o el tamaño del archivo no "
                            . "son válidos.";
                    $errorFile = 302;
                }
            }else{
                $responseFile = "no se especificó el archivo.";
                $errorFile = 303;
            }
        }else{
            $responseFile = "error procesando la petición de subida de "
                    . "archivos.";
            $errorFile = 304;
        }
        
        $arrayFile = [
            "responseFile" => $responseFile, 
            "nameFile" => $nameFile, 
            "errorFile" => $errorFile
        ];
        
        return $arrayFile;
    }
    
    
    // Función para eliminar el archivo correspondiente a un registro eliminado 
    // o editado que contenga imagen
    public function deleteFile($table, $id, $folder)
    {
        $responseFile = "";
        $errorFile = 0;
        
        $arrayFind = $this->ManagementModel->find($table, 'id', $id);
        $arrayResult = $arrayFind->result_array();
        
        $route = $_SERVER['DOCUMENT_ROOT'] 
                . "/melc-ci/public/assets/images/$folder/" 
                . $arrayResult[0]['logo'];
        
        if(file_exists($route)){
            if(unlink($route)){
                $responseFile = "el archivo se eliminó correctamente.";
            }else{
                $responseFile = "no se puede eliminar el archivo; "
                        . "es posible que no exista.";
                $errorFile = 305;
            }
        }else{
            $responseFile = "no se puede eliminar el archivo; "
                    . "no hay uno asociado al registro.";
            $errorFile = 306;
        }
        
        
        $arrayFile = [
            "responseFile" => $responseFile, 
            "nameFile" => $folder . "/" . $arrayResult[0]['logo'], 
            "errorFile" => $errorFile
        ];
        
        return $arrayFile;
    }
    
    
    //****************************
    // Funciones para el tratamiento de la autenticación
    //****************************
    
    // Función para devolver un token de autenticación en un objeto JSON, si las
    // credenciales son válidas o un mensaje de error. 
    // Recibe un objeto JSON que contiene la tabla, los campos a mostrar 
    // y un criterio de búsqueda
    public function requestAccess()
    {
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            $objResult = $this->ManagementModel->validateAccess(
                    $arrayData['db']['table'], array_keys($arrayData['fields']),
                    array_values($arrayData['fields']));
            $arrayResult = [];
            if($objResult->num_rows() > 0){
                // Datos a guardar en la sesión del servidor (acceso)
                $arrayResult['id_melc_profile_user'] = 
                        $objResult->result()[0]->id_profile_user;
                $arrayResult['ip_access'] = $_SERVER['REMOTE_ADDR'];
                $arrayResult['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
                $arrayResult['token'] = $this->getToken();
                if($this->ManagementModel->insert('melc_access', $arrayResult)){
                    // Datos para enviar a la sesión del cliente junto con los
                    // anteriores
                    $objResultId = 
                            $this->ManagementModel->lastInsertId('melc_access');
                    $arrayResult['session_id'] = 
                            $objResultId->result()[0]->id;
                    $arrayResult['user'] = $objResult->result()[0]->user;
                    $arrayResult['profile_name'] = 
                            $objResult->result()[0]->profile_name;
                    $arrayResult['full_user_name'] = 
                            $objResult->result()[0]->full_user_name;
                    $arrayResult['response'] = "acceso concedido";
                    $arrayResult['error'] = 0;
                    
                }else{
                    $arrayResult = [
                        "response" => "Ocurrio un problema en el servidor. "
                            . "No se pudo crear la sesión", 
                        "error" => 403
                    ];
                }
            }else{
                $arrayResult = [
                    "response" => "las credenciales no coinciden", 
                    "error" => 402
                ];
            }
        }else{
            $arrayResult = [
                "response" => "datos incompletos para realizar esta solicitud", 
                "error" => 401
            ];
        }
        
        echo json_encode($arrayResult);
    }
    
    
    // Función para verificar los datos de autenticación al navegar en el admin
    public function verifyAuthentication()
    {
        if(!empty($this->input->post("dataSend"))){
            $arrayData = json_decode($this->input->post("dataSend"), TRUE);
            
//            var_dump(array_values($arrayData['fields'])); 
//            var_dump(array_keys($arrayData['fields'])); exit();
            
            $objResult = $this->ManagementModel->verifyAuthentication(
                    $arrayData['db']['table'], array_keys($arrayData['fields']),
                    array_values($arrayData['fields']));
            
//            var_dump($objResult->result());exit();
            
            
            $arrayResult = [];
            if($objResult->num_rows() > 0){
                $arrayResult['response'] = "credenciales de acceso correctas";
                    $arrayResult['error'] = 0;
            }else{
                $arrayResult = [
                    "response" => "credenciales de autenticación incorrectas", 
                    "error" => 406
                ];
            }
        }else{
            $arrayResult = [
                "response" => "datos incompletos para realizar esta solicitud. "
                . "Debe iniciar sesión nuevamente", 
                "error" => 405
            ];
        }
        
        echo json_encode($arrayResult);
    }
    
    
    // Función para generar una cadena de autenticación aleatoria
    public function getToken()
    {
        $characters = "0123456789abcdefghijklmnopqrstuvwxyz" . 
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ_@+-*%/\\$#=&[]{}()~|<>?^.,;:";
        $lenCharacters = strlen($characters);
        $token = "";
        for($i=0; $i < 30; $i++){
            $token .= $characters[rand(0, $lenCharacters - 1)]; 
        }

        return $token;
    }
    
}
