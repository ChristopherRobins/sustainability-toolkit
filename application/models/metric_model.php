<?php

	class Metric_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function getSuggestedMetrics(){
		$data = array();
		$this->db->select('metric_name');
		$query = $this->db->get_where('tbl_metric', array('company_id' => 1));
		foreach($query->result_array() as $row){
			$data[] = $row;
		}
		return $data;
	}

	public function getMetricsByCompany($id){
		$data = array();
		$this->db->select('metric_name');
		$query = $this->db->get_where('tbl_metric', array('company_id' => $id));
		foreach($query->result_array() as $row){
			$data[] = $row;
		}
		return $data;	
	}

	public function getComparedMetrics($comArr, $sugArr){
		$result = array();
		$result = array_intersect($comArr, $sugArr);
		print_r($result);die;
	}

	public function addMetrics($data){
		$this->db->insert_batch('tbl_metric', $data);
	}

}