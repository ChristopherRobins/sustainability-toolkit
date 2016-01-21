<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

session_start();

class Home extends CI_Controller {

	function __construct(){
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('form_model');
		$this->load->model('criteria_model');
        $this->load->helper('url');
    }

    // Builds page
	public function index() {
		if($this->session->userdata('logged_in')) {
			$session_data = $this->session->userdata('logged_in');
			//$user_data['user_id'] = $session_data['user_id'];
			$id = $session_data['user_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			//print_r($session_data);
			$data['input'] = $this->form_model->getInput($id, 1, 1);
			$this->load->view('head', $data);
			$this->load->view('header');
			$this->load->view('flowers');
			$this->load->view('wheel');
			$this->load->view('form_view', $data);
			$this->load->view('metrics_view');
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
		$user_data['user_id'] = $session_data['user_id'];
		$id = $user_data['user_id'];
		$step = $this->input->post('theStep');
		$metric = $this->input->post('theMetric');
		//$this->form_model->getInput($id, $step, $metric);
		//$this->form_model->getInput($id, $step, $metric);
		$query = $this->form_model->getInput($id, $step, $metric);
		echo json_encode($query);
		//$this->load->view('form_view', $data);
	}

	// Part of the form UPDATE/INSERT process
	public function formInput(){
		$session_data = $this->session->userdata('logged_in');
		$user_data['user_id'] = $session_data['user_id'];

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
		);
		//$id = $_POST['data'];
		$this->form_model->userInput($id, $arrInput, $step, $metric);
		//echo "asdokjnfn";
	}

	public function criteriaMetrics(){
		$name = $this->input->post('theName');
		$query = $this->criteria_model->getMetrics($name);
		echo json_encode($query);
	}
}
