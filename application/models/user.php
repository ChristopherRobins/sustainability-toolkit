<?php

	class User extends CI_Model {

    public function __construct(){
			parent::__construct();
		}

    function login($username, $password) {
      $this->db->select('*');
      $this->db->from('tbl_user u, tbl_facility f, tbl_company c');
      $this->db->where('user_username', $username);
      $this->db->where('user_password', $password);
			$this->db->where('u.facility_id = f.facility_id');
			$this->db->where('f.company_id = c.company_id');
      $this->db->limit(1);

      $query = $this->db->get();
			//print_r($query);

      if($query->num_rows() == 1){
       return $query->result();
      } else {
       return false;
      }
    }

		public function add_user() {
			$data = array(
				'user_username'=>$this->input->post('username'),
				'user_firstname'=>$this->input->post('fname'),
				'user_lastname'=>$this->input->post('lname'),
				'user_position'=>$this->input->post('position'),
				'user_department'=>$this->input->post('depertment'),
				'user_email'=>$this->input->post('email'),
				'user_privileges'=>$this->input->post('privileges'),
				'user_password'=>$this->input->post('password'),
				'facility_id'=>$this->input->post('facility')
			);
			$this->db->insert('tbl_user', $data);
		}
  }
