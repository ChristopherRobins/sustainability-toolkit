<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class VerifyRegistration extends CI_Controller {

  function __construct() {
    parent::__construct();
    $this->load->model('user','',TRUE);
    $this->load->model('company_model','',TRUE);
    $this->load->model('facility_model','',TRUE);
  }

  function index($url) {
    if($this->session->userdata('logged_in')) {
      $session_data = $this->session->userdata('logged_in');
      $id = $session_data['user_id'];
      $data['company_name'] = $session_data['company_name'];
      $data['user_privileges'] = $session_data['user_privileges'];
      $data['company_id'] = $session_data['company_id'];
      $data['facility_id'] = $session_data['facility_id'];
      if($data['user_privileges'] == 1){
        $data['companies'] = $this->company_model->getAllCompanies();
      } else if($data['user_privileges'] == 2) {
        $data['companies'] = $this->company_model->getCompany($data['company_id']);
        $data['facilities'] = $this->facility_model->getCompanyFacilities($data['company_id']);
      } else {
        $data['companies'] = $this->company_model->getCompany($data['company_id']);
        $data['facilities'] = $this->facility_model->getFacility($data['facility_id']);
      }
      $this->load->helper(array('form'));
      $this->load->view('head', $data);
      $this->load->view('header');
      $this->load->view($url, $data);
      $this->load->view('close');
    } else {
      redirect('login', 'refresh');
    }
 }

	public function user() {

    $this->load->library('form_validation');
    $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean|is_unique[tbl_user.user_username]');
    $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|is_unique[tbl_user.user_email]');
    $this->form_validation->set_rules('password', 'Password', 'required|xss_clean|min_length[6]|max_length[32]');
    $this->form_validation->set_rules('userCompany', 'Company', 'required');
    $this->form_validation->set_rules('userFacility', 'Facility', 'required');

    if($this->form_validation->run() == FALSE) {
      $this->index('user_reg_view');
    }else{
      $this->user->add_user();
      $this->index('form_success');
    }
	}

  public function company() {

    $this->load->library('form_validation');
    $this->form_validation->set_rules('companyName', 'Company Name', 'required|is_unique[tbl_company.company_name]');
    $this->form_validation->set_rules('companyEmail', 'Company Email', 'trim|required|valid_email|is_unique[tbl_company.company_email]');

    if($this->form_validation->run() == FALSE) {
      $this->index('company_reg_view');
    }else{
      $this->company_model->add_company();
      $this->index('form_success');
    }
  }

  public function facility() {

    $this->load->library('form_validation');
    $this->form_validation->set_rules('facilityCompany', 'Facility Company', 'required|integer');
    $this->form_validation->set_rules('facilityAddress', 'Facility Address', 'required');
    $this->form_validation->set_rules('facilityPhone', 'Facility Phone', 'required');
    $this->form_validation->set_rules('facilityCity', 'Facility City', 'required');
    $this->form_validation->set_rules('facilityProvince', 'Facility Province', 'required');
    $this->form_validation->set_rules('facilityPostal', 'Facility Postal code', 'required');

    if($this->form_validation->run() == FALSE) {
      $this->index('facility_reg_view');
    }else{
      $this->facility_model->add_facility();
      $this->index('form_success');
    }
  }
}
