<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// Staging for new methods
class Criteria_ctrl extends CI_Controller {

	function __construct(){
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('criteria_model');
    }
}
