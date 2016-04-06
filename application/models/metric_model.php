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
		// Total count of facilities for the company
		$facilityCount = $this->db->get_where('tbl_facility', array('company_id' => $id))->num_rows();

		// Total count of metrics for the company
		$totalMetricsCount = (($this->db->get_where('tbl_metric', array('company_id' => $id, 'metric_disabled' => 0))->num_rows())*$facilityCount)*13*3;
		$environmentMetricsCount = (($this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 1, 'metric_disabled' => 0))->num_rows())*$facilityCount)*13*3;
		$communityMetricsCount = (($this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 2, 'metric_disabled' => 0))->num_rows())*$facilityCount)*13*3;
		$operatingMetricsCount = (($this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 3, 'metric_disabled' => 0))->num_rows())*$facilityCount)*13*3;
		$productsMetricsCount = (($this->db->get_where('tbl_metric', array('company_id' => $id, 'criteria_id' => 4, 'metric_disabled' => 0))->num_rows())*$facilityCount)*13*3;

		// Total count of COMPLETED metrics by company
		$totalMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$environmentMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$communityMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$operatingMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$productsMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.company_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();

		//Total percentage of COMPLETED metrics by company
		$data['company']['all']['total'] = round($totalMetricsComplete / $totalMetricsCount*100);
		$data['company']['all']['environment'] = round($environmentMetricsComplete / $environmentMetricsCount*100);
		$data['company']['all']['community'] = round($communityMetricsComplete / $communityMetricsCount*100);
		$data['company']['all']['operating'] = round($operatingMetricsComplete / $operatingMetricsCount*100);
		$data['company']['all']['products'] = round($productsMetricsComplete / $productsMetricsCount*100);

		// Total percentage of COMPLETED metrics for A
		$data['company']['A']['total'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.company_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['company']['A']['environment'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['company']['A']['community'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.company_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['company']['A']['operating'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.company_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['company']['A']['products'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.company_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED metrics for AA
		$data['company']['AA']['total'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.company_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['company']['AA']['environment'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['company']['AA']['community'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.company_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['company']['AA']['operating'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.company_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['company']['AA']['products'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.company_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED metrics for AAA
		$data['company']['AAA']['total'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['company']['AAA']['environment'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.company_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['company']['AAA']['community'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.company_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['company']['AAA']['operating'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.company_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['company']['AAA']['products'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.company_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// return 'company<br>total count '.$totalMetricsCount.'<br>facilities '.$facilityCount.'<br>completed: '.$totalMetricsComplete.'<br>percentage: '.$totalMetricsPercentage.'%<br>A: '.$totalMetricsA.'%<br>AA: '.$totalMetricsAA.'%<br>AAA: '.$totalMetricsAAA.'%<br>'
		// .'<br>environment<br>total count '.$environmentMetricsCount.'<br>completed: '.$environmentMetricsComplete.'<br>percentage: '.$environmentMetricsPercentage.'%<br>A: '.$environmentMetricsA.'%<br>AA: '.$environmentMetricsAA.'%<br>AAA: '.$environmentMetricsAAA.'%<br>'
		// .'<br>community<br>total count '.$communityMetricsCount.'<br>completed: '.$communityMetricsComplete.'<br>percentage: '.$communityMetricsPercentage.'%<br>A: '.$communityMetricsA.'%<br>AA: '.$communityMetricsAA.'%<br>AAA: '.$communityMetricsAAA.'%<br>'
		// .'<br>operating<br>total count '.$operatingMetricsCount.'<br>completed: '.$operatingMetricsComplete.'<br>percentage: '.$operatingMetricsPercentage.'%<br>A: '.$operatingMetricsA.'%<br>AA: '.$operatingMetricsAA.'%<br>AAA: '.$operatingMetricsAAA.'%<br>'
		// .'<br>products<br>total count '.$productsMetricsCount.'<br>completed: '.$productsMetricsComplete.'<br>percentage: '.$productsMetricsPercentage.'%<br>A: '.$productsMetricsA.'%<br>AA: '.$productsMetricsAA.'%<br>AAA: '.$productsMetricsAAA.'%<br>'
		return json_encode($data);
	}

	public function getAllStepProgressByFacility($id){
		// Get the associated company id
		$company_id = $this->db->select('c.company_id')->from('tbl_company c')->join('tbl_facility f', 'f.company_id=c.company_id')->where(array('f.facility_id' => $id))->get()->row();

		// Total count of metrics for the desired facility
		$totalMetricsCount = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'metric_disabled' => 0))->num_rows())*13*3;
		$environmentMetricsCount = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 1, 'metric_disabled' => 0))->num_rows())*13*3;
		$communityMetricsCount = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 2, 'metric_disabled' => 0))->num_rows())*13*3;
		$operatingMetricsCount = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 3, 'metric_disabled' => 0))->num_rows())*13*3;
		$productsMetricsCount = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 4, 'metric_disabled' => 0))->num_rows())*13*3;

		// Total count of level A metrics
		$totalMetricsCountA = ($this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'metric_disabled' => 0, 'criteria_id' => 1))->num_rows())*13*3;

		// Total count of COMPLETED metrics by facility
		$totalMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$environmentMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$communityMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$operatingMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$productsMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();

		// Total percentage of COMPLETED facility metrics for A
		$totalMetricsA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$environmentMetricsA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$communityMetricsA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$operatingMetricsA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$productsMetricsA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED facility metrics for AA
		$totalMetricsAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$environmentMetricsAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$communityMetricsAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$operatingMetricsAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$productsMetricsAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED facility metrics for AAA
		$totalMetricsAAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$environmentMetricsAAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$communityMetricsAAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$operatingMetricsAAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$productsMetricsAAA = (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of each COMPLETED metric by criteria
		$environmentMetricsList = $this->db->select('*')->from('tbl_metric m')->join('tbl_facility f', 'f.company_id=m.company_id')->where(array('f.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0))->get();
		foreach($environmentMetricsList->result_array() as $row){
			$data['facility']['environment']['metrics']['A'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <' => 14, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 1))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['environment']['metrics']['AA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id < ' => 27, 'i.step_id > ' => 13, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 1))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['environment']['metrics']['AAA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <= ' => 39, 'i.step_id > ' => 26, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 1))->get()->num_rows()) / 13 * 100)
				);
		}
		$communityMetricsList = $this->db->select('*')->from('tbl_metric m')->join('tbl_facility f', 'f.company_id=m.company_id')->where(array('f.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0))->get();
		foreach($communityMetricsList->result_array() as $row){
			$data['facility']['community']['metrics']['A'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <' => 14, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 2))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['community']['metrics']['AA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id < ' => 27, 'i.step_id > ' => 13, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 2))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['community']['metrics']['AAA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <= ' => 39, 'i.step_id > ' => 26, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 2))->get()->num_rows()) / 13 * 100)
				);
		}
		$operatingMetricsList = $this->db->select('*')->from('tbl_metric m')->join('tbl_facility f', 'f.company_id=m.company_id')->where(array('f.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0))->get();
		foreach($operatingMetricsList->result_array() as $row){
			$data['facility']['operating']['metrics']['A'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <' => 14, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 3))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['operating']['metrics']['AA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id < ' => 27, 'i.step_id > ' => 13, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 3))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['operating']['metrics']['AAA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <= ' => 39, 'i.step_id > ' => 26, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 3))->get()->num_rows()) / 13 * 100)
				);
		}
		$productsMetricsList = $this->db->select('*')->from('tbl_metric m')->join('tbl_facility f', 'f.company_id=m.company_id')->where(array('f.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0))->get();
		foreach($productsMetricsList->result_array() as $row){
			$data['facility']['products']['metrics']['A'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <' => 14, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 4))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['products']['metrics']['AA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id < ' => 27, 'i.step_id > ' => 13, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 4))->get()->num_rows()) / 13 * 100)
				);
			$data['facility']['products']['metrics']['AAA'][] = array(
				'name' => $row['metric_name'],
				'value' => (($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'i.metricstep_status' => 1, 'i.step_id <= ' => 39, 'i.step_id > ' => 26, 'm.metric_disabled' => 0, 'm.metric_name' => $row['metric_name'], 'm.criteria_id' => 4))->get()->num_rows()) / 13 * 100)
				);
		}

		// Total Percentage of completed metrics by criteria
		$data['facility']['all']['total'] = round(($totalMetricsComplete / $totalMetricsCount)*100);
		$data['facility']['environment']['total'] = round(($environmentMetricsComplete / $environmentMetricsCount)*100);
		$data['facility']['community']['total'] = round(($communityMetricsComplete / $communityMetricsCount)*100);
		$data['facility']['operating']['total'] = round(($operatingMetricsComplete / $operatingMetricsCount)*100);
		$data['facility']['products']['total'] = round(($productsMetricsComplete / $productsMetricsCount)*100);

		// Total percentage of COMPLETED facility metrics for A
		$data['facility']['all']['A'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['facility']['environment']['A'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['facility']['community']['A'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['facility']['operating']['A'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['facility']['products']['A'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <' => '14','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED facility metrics for AA
		$data['facility']['all']['AA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['facility']['environment']['AA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['facility']['community']['AA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['facility']['operating']['AA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['facility']['products']['AA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id < ' => '27', 'i.step_id > ' => '13','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// Total percentage of COMPLETED facility metrics for AAA
		$data['facility']['all']['AAA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($totalMetricsCount/3)*100);
		$data['facility']['environment']['AAA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($environmentMetricsCount/3)*100);
		$data['facility']['community']['AAA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($communityMetricsCount/3)*100);
		$data['facility']['operating']['AAA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($operatingMetricsCount/3)*100);
		$data['facility']['products']['AAA'] = round(($this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.step_id <= ' => '39', 'i.step_id > ' => '26','i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows()) / ($productsMetricsCount/3)*100);

		// return 'facility<br>total count '.$totalMetricsCount.'<br>completed: '.$totalMetricsComplete.'<br>percentage: '.(($totalMetricsComplete / $totalMetricsCount)*100).'%<br>A: '.$totalMetricsA.'%<br>AA: '.$totalMetricsAA.'%<br>AAA: '.$totalMetricsAAA.'%<br>'
		// .'<br>environment<br>total count '.$environmentMetricsCount.'<br>completed: '.$environmentMetricsComplete.'<br>percentage: '.(($environmentMetricsComplete / $environmentMetricsCount)*100).'%<br>A: '.$environmentMetricsA.'%<br>AA: '.$environmentMetricsAA.'%<br>AAA: '.$environmentMetricsAAA.'%<br>'
		// .'<br>community<br>total count '.$communityMetricsCount.'<br>completed: '.$communityMetricsComplete.'<br>percentage: '.(($communityMetricsComplete / $communityMetricsCount)*100).'%<br>A: '.$communityMetricsA.'%<br>AA: '.$communityMetricsAA.'%<br>AAA: '.$communityMetricsAAA.'%<br>'
		// .'<br>operating<br>total count '.$operatingMetricsCount.'<br>completed: '.$operatingMetricsComplete.'<br>percentage: '.(($operatingMetricsComplete / $operatingMetricsCount)*100).'%<br>A: '.$operatingMetricsA.'%<br>AA: '.$operatingMetricsAA.'%<br>AAA: '.$operatingMetricsAAA.'%<br>'
		// .'<br>products<br>total count '.$productsMetricsCount.'<br>completed: '.$productsMetricsComplete.'<br>percentage: '.(($productsMetricsComplete / $productsMetricsCount)*100).'%<br>A: '.$productsMetricsA.'%<br>AA: '.$productsMetricsAA.'%<br>AAA: '.$productsMetricsAAA.'%<br>'.

		return json_encode($data);
	}

	public function getAllStepProgressByCompanyCriteria($id){
		// Get the associated company id
		$company_id = $this->db->select('c.company_id')->from('tbl_company c')->join('tbl_facility f', 'f.company_id=c.company_id')->where(array('f.facility_id' => $id))->get()->row();

		// Total count of metrics for the desired facility
		$environmentMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 1, 'metric_disabled' => 0))->num_rows();
		$communityMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 2, 'metric_disabled' => 0))->num_rows();
		$operatingMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 3, 'metric_disabled' => 0))->num_rows();
		$productsMetricsCount = $this->db->get_where('tbl_metric', array('company_id' => $company_id->company_id, 'criteria_id' => 4, 'metric_disabled' => 0))->num_rows();

		// Total count of COMPLETED metrics by facility
		$environmentMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 1, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$communityMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 2, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$operatingMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 3, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();
		$productsMetricsComplete = $this->db->select('*')->from('tbl_form_input i')->join('tbl_metric m', 'i.metric_id=m.metric_id')->where(array('i.facility_id' => $id, 'm.criteria_id' => 4, 'm.metric_disabled' => 0, 'i.metricstep_status' => 1))->get()->num_rows();

		return 'environment '.($environmentMetricsCount*13*3).' completed: '.$environmentMetricsComplete.' percentage: '.($environmentMetricsComplete / ($environmentMetricsCount*13*3)*100).'%<br>'
		.'community '.($communityMetricsCount*13*3).' completed: '.$communityMetricsComplete.' percentage: '.($communityMetricsComplete / ($communityMetricsCount*13*3)*100).'%<br>'
		.'operating '.($operatingMetricsCount*13*3).' completed: '.$operatingMetricsComplete.' percentage: '.($operatingMetricsComplete / ($operatingMetricsCount*13*3)*100).'%<br>'
		.'products '.($productsMetricsCount*13*3).' completed: '.$productsMetricsComplete.' percentage: '.($productsMetricsComplete / ($productsMetricsCount*13*3)*100).'%<br>';
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
