<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

// Staging for new methods
class Insert_ctrl extends CI_Controller {

	function __construct(){
        parent::__construct();
        $this->load->helper('form');
        $this->load->model('form_model');
    }

	public function formInput($id){
		//$checkbox_array = $this->input->post('inputPrinciples');
		$arrInput = array(
			'metricstep_description' => $this->textarea->post('inputDesc'),
			'metricstep_gaps' => $this->textarea->post('inputGAPS'),
			'metricstep_actions' => $this->textarea->post('inputActions'),
			'metricstep_comments' => $this->textarea->post('inputComments'),
			//'metricstep_id' => serialize($checkbox_array)
			'metricstep_id' = $this->input->post('inputPrinciples');
		);
		$this->form_model->userInput($id, $arrInput);
	}
}
