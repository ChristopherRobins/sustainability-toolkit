<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Company extends CI_Controller {

 function __construct() {
   parent::__construct();
 }

 function index() {
   $this->load->helper(array('form'));
   $this->load->view('head');
   $this->load->view('header');
   $this->load->view('company_form');
   $this->load->view('close');
 }

}

?>