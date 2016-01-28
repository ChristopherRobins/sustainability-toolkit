<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Registration extends CI_Controller {

 function __construct() {
   parent::__construct();
   $this->load->model('company','',TRUE);
 }

 function user() {
   if($this->session->userdata('logged_in')) {
     $session_data = $this->session->userdata('logged_in');
     $id = $session_data['user_id'];
     $data['company_name'] = $session_data['company_name'];
     $data['user_privileges'] = $session_data['user_privileges'];
     $data['facility_id'] = $session_data['facility_id'];
     if($data['user_privileges'] == 1){
       $this->load->helper(array('form'));
       $this->load->view('head', $data);
       $this->load->view('header');
       $this->load->view('user_reg_view');
       $this->load->view('close');
     }else{
       redirect('home', 'refresh');
     }
   } else {
     redirect('login', 'refresh');
   }
 }

 function company() {
   if($this->session->userdata('logged_in')) {
     $session_data = $this->session->userdata('logged_in');
     $id = $session_data['user_id'];
     $data['company_name'] = $session_data['company_name'];
     $data['user_privileges'] = $session_data['user_privileges'];
     $data['facility_id'] = $session_data['facility_id'];
     if($data['user_privileges'] == 1){
       $this->load->helper(array('form'));
       $this->load->view('head', $data);
       $this->load->view('header');
       $this->load->view('company_reg_view');
       $this->load->view('close');
     }else{
       redirect('home', 'refresh');
     }
   } else {
     redirect('login', 'refresh');
   }
 }

 function facility() {
  $this->load->model('company','',TRUE);
   if($this->session->userdata('logged_in')) {
     $session_data = $this->session->userdata('logged_in');
     $id = $session_data['user_id'];
     $data['company_name'] = $session_data['company_name'];
     $data['user_privileges'] = $session_data['user_privileges'];
     $data['facility_id'] = $session_data['facility_id'];
     if($data['user_privileges'] == 1){
       $data['companies'] = $this->company->getCompanies();
       $this->load->helper(array('form'));
       $this->load->view('head', $data);
       $this->load->view('header');
       $this->load->view('facility_reg_view', $data);
       $this->load->view('close');
     }else{
       redirect('home', 'refresh');
     }
   } else {
     redirect('login', 'refresh');
   }
 }

}

?>
