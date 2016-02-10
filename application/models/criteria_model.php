<?php

	class Criteria_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

    public function getMetrics($name, $companyId){
		$this->db->select('*');
		$this->db->from('tbl_criteria c, tbl_metric m, tbl_l_criteriametric cm');
		$this->db->where('c.criteria_id = cm.criteria_id');
		$this->db->where('m.metric_id = cm.metric_id');
		$this->db->where('c.criteria_name', $name);
		//$this->db->where('m.company_id', $companyId);
		$where = '(m.company_id = '.$companyId.' OR m.company_id = 0)';
		$this->db->where($where);
		$query = $this->db->get();
		return $query->result();
	}

	public function addMetric($data){
		$metricData = array(
			'metric_name'=>$this->input->post('newMetric'),
			'company_id'=>$this->input->post('company')
		);
		$criteriaData = array(
			'metric_name'=>$this->input->post('companyName'),
			'company_id'=>$this->input->post($companyId)
		);
		$this->db->insert('tbl_metric', $metricData);
		$this->db->insert('tbl_l_criteriametric', $criteriaData);
	}

  }
