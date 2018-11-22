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
    // la consulta es ordenada por un campo específico (id por defecto); 
    // puede incluir un criterio de búsqueda por el campo especificado
    public function read($table, $arrayFields, $orderField)
    {
        $this->db->select($arrayFields);
        $this->db->from($table);
        $this->db->order_by($orderField, 'ASC');
        
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
    
    
    // Función genérica para actualizar registros
    public function update($table, $record)
    {
        $this->db->where("id", $record['id']);
        $this->db->update($table, $record);
        return $this->db->affected_rows();
    }
    
    
    // Función para devolver el último id insertado
    public function lastInsertId($table)
    {
        $this->db->select_max("id");
        return $this->db->get($table);
    }
   
    
    // Función para devolver el total de filas de una tabla
    public function totalRecords($table)
    {
        return $this->db->get($table)->num_rows();
    }
    
    
    // Función para buscar un dato sobre una columna en alguna tabla
    public function find($table, $field, $data)
    {
        $this->db->where("UPPER($field)", strtoupper($data));
        return $this->db->get($table);
    }
    
    
    // Función para validar las credenciales de acceso en la BD
    public function validateAccess($table, $arrayFields, $arrayValues)
    {
        $query = 
                "SELECT " . 
                $arrayFields[0] . 
                ", " . $arrayFields[1] . 
                ", melc_profile_user.id AS id_profile_user" . 
                ", melc_user.name AS full_user_name" . 
                ", melc_profile.name AS profile_name " .
                "FROM melc_user " .
                "INNER JOIN melc_profile_user " .
                "ON melc_user.id=melc_profile_user.id_melc_user " . 
                "INNER JOIN melc_profile " . 
                "ON melc_profile.id=melc_profile_user.id_melc_profile " . 
                "WHERE (BINARY user='" . $arrayValues[0]  . "' " .
                "OR BINARY email='" . $arrayValues[0] . "') " .
                "AND BINARY password='" . $arrayValues[1] . "' " .
                "AND BINARY melc_profile.id='" . $arrayValues[2] . "' " .
                "AND melc_profile_user.active";
        
        return $this->db->query($query);
    }
    
        
    // Función para validar las credenciales de acceso en la BD
    public function verifyAuthentication($table, $arrayFields, $arrayValues)
    {
        $query = 
                "SELECT " . implode(",", $arrayFields) . " " .
                "FROM $table " .
                "WHERE id=" . $arrayValues[0]  . " " .
                "AND BINARY ip_access='" . $arrayValues[1] . "' " .
                "AND BINARY user_agent='" . $arrayValues[2] . "' " .
                "AND BINARY token='" . $arrayValues[3] . "'";
        
        return $this->db->query($query);
    }
    
        
}

?>
