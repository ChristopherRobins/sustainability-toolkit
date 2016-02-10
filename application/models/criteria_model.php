<?php

	class Criteria_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

    public function getMetrics($criteria, $companyId){
		$this->db->select('*');
		$this->db->from('tbl_criteria c, tbl_metric m');
		$this->db->where('c.criteria_id = m.criteria_id');
		$this->db->where('c.criteria_id', $criteria);
		//$this->db->where('m.company_id', $companyId);
		$where = '(m.company_id = '.$companyId.' OR m.company_id = 0)';
		$this->db->where($where);
		$query = $this->db->get();
		return $query->result();
	}

	public function addMetric($data){
		$this->db->insert('tbl_metric', $data);
	}

  }
