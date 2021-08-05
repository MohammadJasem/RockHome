<?php

namespace app\models;

use app\lib\model;

class user extends model
{
	public function __construct() {
        $this->fields = ['id, email, firstname, lastname, password'];
		$this->table = 'users';
        parent::__construct();
    }
}