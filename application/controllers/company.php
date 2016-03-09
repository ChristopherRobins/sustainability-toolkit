<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// Staging for new methods
class Company extends CI_Controller {

	function __construct(){
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('form_model');
		$this->load->model('facility','',TRUE);
		$this->load->model('company_model');
        $this->load->helper('url');
    }

    public function index() {
		if($this->session->userdata('logged_in')) {
			$message = $this->session->flashdata('message');
			$session_data = $this->session->userdata('logged_in');
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			if($session_data['user_privileges'] == 1) {
				$data['company_list'] = $this->$company_model->getCompanies();
			}
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
}