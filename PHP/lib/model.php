<?php

namespace app\lib;

abstract class model{
	public $db;

	protected $fields;
	
	protected $table;
	
	public function __construct()
	{
		$this->db = new database('mvc_framework','root','abcd1234');
	}
	
	public function create($data){
		$query_data = [];
		foreach ($this->fields as $field) {
			if(isset($data[$field])){
				$query_data[$field] = $data[$field];
			}
		}
		$this->db->insert($this->table, $query_data);
		return $this->db->id();
	}

	public function delete($id)
	{
		$where['id'] = $id;
		$this->db->delete($this->table ,$where);
	}

	public function get($where = [])
	{
		$this->db->select($this->table,'*', $where);
        return $this->db->result_array();
    }
}