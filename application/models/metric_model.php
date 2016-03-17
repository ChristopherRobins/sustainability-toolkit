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

	public function getAllStepProgressByCompany($id){
		// Total count of metrics for the company
		$environmentMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 1, 'metric_disabled' => 0))->num_rows();
		$communityMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 2, 'metric_disabled' => 0))->num_rows();
		$operatingMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 3, 'metric_disabled' => 0))->num_rows();
		$productsMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 4, 'metric_disabled' => 0))->num_rows();

		// Total count of COMPLETED metrics by company
		$environmentMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$communityMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$operatingMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$productsMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();

		return 'environment '.($environmentMetricsCount*13*3).' completed: '.$environmentMetricsComplete.' percentage: '.($environmentMetricsComplete / ($environmentMetricsCount*13*3)*100).'%<br>'
		.'community '.($communityMetricsCount*13*3).' completed: '.$communityMetricsComplete.' percentage: '.($communityMetricsComplete / ($communityMetricsCount*13*3)*100).'%<br>'
		.'operating '.($operatingMetricsCount*13*3).' completed: '.$operatingMetricsComplete.' percentage: '.($operatingMetricsComplete / ($operatingMetricsCount*13*3)*100).'%<br>'
		.'products '.($productsMetricsCount*13*3).' completed: '.$productsMetricsComplete.' percentage: '.($productsMetricsComplete / ($productsMetricsCount*13*3)*100).'%<br>';
		// $environment = array();
		// $data['community'] = array();
		// $data['op'] = array();
		// $data['pns'] = array();
		// $this->db->select('metric_name, criteria_id');
		// $query = $this->db->get_where('tbl_metric', array('company_id' => $id));
		// foreach($query->result_array() as $row){
		// 	if($row['criteria_id']==1){
		// 		$environment[] = $row;
		// 	} else if($row['criteria_id']==2) {
		// 		$data['community'][] = $row;
		// 	} else if($row['criteria_id']==3) {
		// 		$data['op'][] = $row;
		// 	} else if($row['criteria_id']==4) {
		// 		$data['pns'][] = $row;
		// 	}
		// }
		// return $data;
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
