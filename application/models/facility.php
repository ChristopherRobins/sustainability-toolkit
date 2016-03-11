<?php

	class Facility extends CI_Model {

    public function __construct(){
			parent::__construct();
		}

	public function getAllFacilities(){
		return $this->db->get('tbl_facility')->result();
	}

	public function getFacility($id){
		return $this->db->get_where('tbl_facility', array('facility_id' => $id))->result();
	}

	public function getCompanyFacilities($id) {
		//echo $id;
		return $this->db->get_where('tbl_facility', array('company_id' => $id))->result();
		//print_r($result);
	}

	public function getFacilities() {
		return $this->db->get('tbl_facility')->result();
	}

	public function add_facility() {
		$data = array(
			'facility_name'=>$this->input->post('facilityCompanyName'),
			'facility_contact'=>$this->input->post('facilityContact'),
			'facility_country'=>$this->input->post('facilityCountry'),
			'facility_address'=>$this->input->post('facilityAddress'),
			'facility_address2'=>$this->input->post('facilityAddress2'),
			'facility_city'=>$this->input->post('facilityCity'),
			'facility_province'=>$this->input->post('facilityProvince'),
			'facility_postalcode'=>$this->input->post('facilityPostal'),
			'facility_phone'=>$this->input->post('facilityPhone'),
			'facility_email'=>$this->input->post('facilityEmail'),
			'company_id'=>$this->input->post('facilityCompany')
		);
		$this->db->insert('tbl_facility', $data);
	}
  }
