<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

session_start();

class Home extends CI_Controller {

	function __construct(){
    parent::__construct();
    $this->load->helper('form');
    $this->load->model('form_model');
		$this->load->model('criteria_model');
		$this->load->model('facility_model','',TRUE);
    $this->load->helper('url');
  }

    // Builds page
	public function index() {
		if($this->session->userdata('logged_in')) {
			$message = $this->session->flashdata('message');
			$session_data = $this->session->userdata('logged_in');
			//$user_data['user_id'] = $session_data['user_id'];
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			//print_r($session_data);
			$data['input'] = $this->form_model->getInput($data, 1, 1);
			//$data['progress'] = $this->form_model->levelProgress(1,14);
			$this->load->view('head', $data);
			$this->load->view('header');
			$this->load->view('flowers');
			$this->load->view('wheel');
			$this->load->view('form_view', $data);
			$this->load->view('metrics_view', $data);
			$this->load->view('close');
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

	function logout(){
	   $this->session->unset_userdata('logged_in');
	   session_destroy();
	   redirect('home', 'refresh');
	 }

	// Grabs information to populate the form with
	public function input() {
		$session_data = $this->session->userdata('logged_in');
		$user_data = array(
			'user_id' => $session_data['user_id'],
			'facility_id' => $session_data['facility_id'],
			'company_id' => $session_data['company_id'],
		);
		$user_data['user_id'] = $session_data['user_id'];
		$id = $user_data['user_id'];
		$step = $this->input->post('theStep');
		$metric = $this->input->post('theMetric');
		//$this->form_model->getInput($id, $step, $metric);
		//$this->form_model->getInput($id, $step, $metric);
		$query = $this->form_model->getInput($user_data, $step, $metric);
		echo json_encode($query);
		//$this->load->view('form_view', $data);
	}

	// Part of the form UPDATE/INSERT process
	public function formInput(){
		$session_data = $this->session->userdata('logged_in');
		$user_data = array(
			'user_id' => $session_data['user_id'],
			'facility_id' => $session_data['facility_id'],
			'company_id' => $session_data['company_id'],
		);
		// $user_data['user_id'] = $session_data['user_id'];
		// $user_data['facility_id'] = $session_data['facility_id'];
		// $user_data['company_id'] = $session_data['company_id'];
		$id = $user_data['user_id'];
		$step = $this->input->post('inputStep');
		$metric = $this->input->post('inputMetric');
		$level = $this->input->post('inputLevel');
		//'metric_id' => $this->input->post('inputMetric'),
		//'step_id' => $this->input->post('inputStep'),
		$arrInput = array(
			'metricstep_description' => $this->input->post('inputDesc'),
			'metricstep_gaps' => $this->input->post('inputGAPS'),
			'metricstep_actions' => $this->input->post('inputActions'),
			'metricstep_comments' => $this->input->post('inputComments'),
			'metricstep_status' => $this->input->post('inputStatus'),
			'facility_id' => $user_data['facility_id'],
			'company_id' => $user_data['company_id'],
		);
		//$id = $_POST['data'];
		$this->form_model->userInput($user_data, $arrInput, $step, $metric);
		//echo "asdokjnfn";
	}

	public function criteriaMetrics(){
		$session_data = $this->session->userdata('logged_in');
		$companyId = $session_data['company_id'];
		$criteria = $this->input->post('criteriaId');
		$query = $this->criteria_model->getMetrics($criteria, $companyId);
		echo json_encode($query);
	}

	public function addMetrics(){
		$session_data = $this->session->userdata('logged_in');
		$metricData = array(
			'metric_name' => $this->input->post('theName'),
			'criteria_id' => $this->input->post('theCriteria'),
			'company_id' => $session_data['company_id']
		);
		$this->criteria_model->addMetric($metricData);
	}

	public function disableMetric(){
		$metricId = $this->input->post('theId');
		$this->criteria_model->disableMetric($metricId);
	}

	public function getProgress(){
		$step = $this->input->post('stepLevel');
		$metric = $this->input->post('metricLevel');
		$session_data = $this->session->userdata('logged_in');
		$user_data = array(
			'user_id' => $session_data['user_id'],
			'facility_id' => $session_data['facility_id'],
			'company_id' => $session_data['company_id'],
		);

		$query = $this->form_model->levelProgress($user_data, $step, $metric);
		echo json_encode($query);
	}

	public function getFacilities(){
		$id = $this->input->post('companyId');
		$query = $this->facility_model->getCompanyFacilities($id);
		echo json_encode($query);
	}
}
