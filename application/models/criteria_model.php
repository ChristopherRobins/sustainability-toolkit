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
		$this->db->where('m.metric_disabled', '0');
		$where = '(m.company_id = '.$companyId.' OR m.company_id = 0)';
		$this->db->where($where);
		$query = $this->db->get();
		return $query->result();
	}

	public function addMetric($data){
		$this->db->insert('tbl_metric', $data);
	}

	public function disableMetric($id){
		$data = array(
               'metric_disabled' => '1'
            );
		$this->db->where('metric_id', $id);
		$this->db->update('tbl_metric', $data);
	}

}
