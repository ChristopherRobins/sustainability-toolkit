<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// Staging for new methods
class Admin extends CI_Controller {

	function __construct(){
  	parent::__construct();
    $this->load->helper('form');
    $this->load->model('form_model');
		$this->load->model('facility_model','',TRUE);
		$this->load->model('company_model');
		$this->load->model('metric_model');
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
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

	public function companies(){
		if($this->session->userdata('logged_in')) {
			$message = $this->session->flashdata('message');
			$session_data = $this->session->userdata('logged_in');
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			if($session_data['user_privileges'] == 1) {
				$data['company_list'] = $this->company_model->getAllCompanies();
				//$data['metric_list'] = $this->metric_model->getAllMetrics();
				//$data['facility_list'] = $this->facility_model->getAllFacilities();
				//print_r($data['metric_list']);die;
				$this->load->view('head', $data);
				$this->load->view('header');
				$this->load->view('company_list');
				//$this->load->view('wheel');
				$this->load->view('close');
			}
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

	public function company($company_id){
		if($this->session->userdata('logged_in')) {
			$message = $this->session->flashdata('message');
			$data['selected_company'] = $this->uri->segment(3);
			$session_data = $this->session->userdata('logged_in');
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			if($session_data['user_privileges'] == 1) {
				//$data['metric_list'] = $this->metric_model->getAllMetrics();
				$data['facility_list'] = $this->facility_model->getCompanyFacilities($data['selected_company']);
				//print_r($data['metric_list']);die;
				$this->load->view('head', $data);
				$this->load->view('header');
				$this->load->view('company');
				$this->load->view('close');
			}
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}

	public function facility($facility_id){
		if($this->session->userdata('logged_in')) {
			$message = $this->session->flashdata('message');
			$data['selected_facility'] = $this->uri->segment(3);
			$session_data = $this->session->userdata('logged_in');
			$id = $session_data['user_id'];
			$data['company_id'] = $session_data['company_id'];
			$data['company_name'] = $session_data['company_name'];
			$data['user_privileges'] = $session_data['user_privileges'];
			$data['facility_id'] = $session_data['facility_id'];
			if($session_data['user_privileges'] == 1) {
				$data['selected_company'] = $this->company_model->getCompanyByFacility($data['selected_facility']);
				$data['metric_list'] = $this->metric_model->getMetricsByCompany($data['selected_company']->company_id);
				//$data['facility_list'] = $this->facility_model->getCompanyFacilities($data['selected_company']);
				//print_r($data['metric_list']);die;
				$this->load->view('head', $data);
				$this->load->view('header');
				//$this->load->view('wheel');
				$this->load->view('facility');
				$this->load->view('close');
			}
		} else {
			//If no session, redirect to login page
     		redirect('login', 'refresh');
		}
	}
}
