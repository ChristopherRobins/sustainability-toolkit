<?php

	class Company_model extends CI_Model {

    public function __construct(){
			parent::__construct();
		}

	public function getCompany($id) {
		//echo $id;
		return $this->db->get_where('tbl_company', array('company_id' => $id))->result();
		//print_r($result);
	}

	public function getCompanies() {
		return $this->db->get('tbl_company')->result();
	}

	public function add_company() {
		$data = array(
			'company_name'=>$this->input->post('companyName'),
			'company_contact'=>$this->input->post('companyContact'),
			'company_facilities'=>$this->input->post('facilitiesCount'),
			'company_size'=>$this->input->post('companySize'),
			'company_sector'=>$this->input->post('sector'),
			'company_revenues'=>$this->input->post('revenue'),
			'company_country'=>$this->input->post('companyCountry'),
			'company_address'=>$this->input->post('companyAddress'),
			'company_phone'=>$this->input->post('companyPhone'),
			'company_email'=>$this->input->post('companyEmail'),
			'company_language'=>$this->input->post('companyLanguage'),
			'company_desc'=>$this->input->post('companyDesc')
		);
		$this->db->insert('tbl_company', $data);
	}
  }