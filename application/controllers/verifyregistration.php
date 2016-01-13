<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class VerifyRegistration extends CI_Controller {

  function __construct() {
    parent::__construct();
    $this->load->model('user','',TRUE);
  }

	public function index() {

    $this->load->library('form_validation');
    $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean|is_unique[tbl_user.user_username]');
    $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|is_unique[tbl_user.user_email]');
    $this->form_validation->set_rules('password', 'Password', 'required|xss_clean|min_length[6]|max_length[32]');

    if($this->form_validation->run() == FALSE) {
      $this->index();
    }else{
      $this->user->add_user();
      redirect('home', 'refresh');
    }
	}
}
