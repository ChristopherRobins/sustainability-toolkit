<?php

	class Metric_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function getAllMetrics(){
		return $this->db->get('tbl_metric')->result();
	}

	public function getSuggestedMetrics(){
		$data = array();
		$this->db->select('metric_name, criteria_id');
		$query = $this->db->get_where('tbl_metric', array('company_id' => 1));
		foreach($query->result_array() as $row){
			if($row['criteria_id']==1){
				$data['environment'][] = $row;
			} else if($row['criteria_id']==2) {
				$data['community'][] = $row;
			} else if($row['criteria_id']==3) {
				$data['op'][] = $row;
			} else if($row['criteria_id']==4) {
				$data['pns'][] = $row;
			}
		}
		return $data;
	}

	public function getMetricsByCompany($id){
		$data = array();
		$data['environment'] = array();
		$data['community'] = array();
		$data['op'] = array();
		$data['pns'] = array();
		$this->db->select('metric_name, criteria_id');
		$query = $this->db->get_where('tbl_metric', array('company_id' => $id));
		foreach($query->result_array() as $row){
			if($row['criteria_id']==1){
				$data['environment'][] = $row;
			} else if($row['criteria_id']==2) {
				$data['community'][] = $row;
			} else if($row['criteria_id']==3) {
				$data['op'][] = $row;
			} else if($row['criteria_id']==4) {
				$data['pns'][] = $row;
			}
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
