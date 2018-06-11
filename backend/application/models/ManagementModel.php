<?php
/**
 * Description of Usuarios
 *
 * @author Jaime
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class ManagementModel extends CI_Model
{
    public function __construct() 
    {
        parent::__construct();
    }
    
    public function __destruct() 
    {
        
    }


    // Función genérica para listar los registros de cualquier entidad; 
    // puede incluir un criterio de búsqueda por el campo especificado
    public function read($table, $arrayFields)
    {
        $this->db->select($arrayFields);
        $this->db->from($table);
        
//        if($field != ""){
//            if(gettype($field != "string")){
//                $this->db->where($field, $data);                
//            }else{
//                $this->db->like($field, $data, 'both');
//            }
//        }
        return $this->db->get(); 
    }


    // Función genérica para eliminar registros por el atributo id 
    public function delete($table, $id)
    {
        $this->db->where("id", $id);
        $this->db->delete($table);
        return $this->db->affected_rows();
    }

    // Función genérica para agregar registros 
    public function insert($table, $record)
    {
        $this->db->insert($table, $record);
        return $this->db->affected_rows();
    }
    
    
    public function totalRecords($table)
    {
        return $this->db->get($table)->num_rows();
    }
    
    // Función genérica para actualizar registros
    public function update($table, $record, $id)
    {
        $this->db->where("id", $id);
        $this->db->update($table, $record);
    }
    
    
    public function find($table, $field, $data)
    {
        $this->db->where("UPPER($field)", strtoupper($data));
        return $this->db->get($table);
    }


    //Buscar el registro para tomar el nombre de la imagen y eliminar el 
    //archivo correspondiente
    // $buscarRegistro = $this->buscarClave($tabla, "id", $id);
    // foreach ($buscarRegistro->result() as $fila)
    // {
    //     unlink(getcwd() . "/assets/images-article/" . $fila->image);
    // }
        
}

?>
