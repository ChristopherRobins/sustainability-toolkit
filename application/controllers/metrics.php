<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

session_start();

class Metrics extends CI_Controller {

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
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			$this->load->view('head', $data);
			$this->load->view('header');
			$this->load->view('metric_suggestions', $data);
			$this->load->view('close');
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

}