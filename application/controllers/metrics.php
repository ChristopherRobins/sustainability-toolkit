<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

session_start();

class Metrics extends CI_Controller {

	function __construct(){
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('form_model');
		$this->load->model('criteria_model');
		$this->load->model('metric_model');
        $this->load->helper('url');
    }

    // Builds page
	public function index() {
		if($this->session->userdata('logged_in')) {
			$session_data = $this->session->userdata('logged_in');
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			$data['suggestedMetrics'] = $this->metric_model->getSuggestedMetrics();
			$data['companyMetrics'] = $this->metric_model->getMetricsByCompany($session_data['company_id']);
			$data['comparedMetrics'] = $this->metric_model->getComparedMetrics($data['companyMetrics'], $data['suggestedMetrics']);
			$this->load->view('head', $data);
			$this->load->view('header');
			$this->load->view('metric_suggestions', $data);
			$this->load->view('close');
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

	public function add_metric(){
		if($this->session->userdata('logged_in')) {
			$session_data = $this->session->userdata('logged_in');
			$data = array();
			if(isset($_POST['environmentMetrics'])){
				foreach($_POST['environmentMetrics'] as $envMetric){
					$data[] = array(
						'metric_name' => $envMetric,
						'criteria_id' => 1,
						'company_id' => $session_data['company_id']
					);
				}
			}
			if(isset($_POST['communityMetrics'])){
				foreach($_POST['communityMetrics'] as $comMetric){
					$data[] = array(
						'metric_name' => $comMetric,
						'criteria_id' => 2,
						'company_id' => $session_data['company_id']
					);
				}
			}
			if(isset($_POST['opMetrics'])){
				foreach($_POST['opMetrics'] as $opMetric){
					$data[] = array(
						'metric_name' => $opMetric,
						'criteria_id' => 3,
						'company_id' => $session_data['company_id']
					);
				}
			}
			if(isset($_POST['psMetrics'])){
				foreach($_POST['psMetrics'] as $psMetric){
					$data[] = array(
						'metric_name' => $psMetric,
						'criteria_id' => 4,
						'company_id' => $session_data['company_id']
					);
				}
			}
			$this->metric_model->addMetrics($data);
			$this->session->set_flashdata('message', 'Metrics Added Successfully');
			redirect('home/index', 'refresh');
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

}