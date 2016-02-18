<?php

	class Form_model extends CI_Model {

		public function __construct(){
			parent::__construct();
		}

		public function getUser(){
			$users = $this->db->get('tbl_user');
			return $users->result();
		}

		public function getInput($user_data, $step, $metric){
			$this->db->select('*');
			$this->db->from('tbl_form_input');
			//$this->db->where('ms.step_id = s.step_id');
			//$this->db->where('s.step_id = sl.step_id');
			//$this->db->where('l.level_id = sl.level_id');
			//$this->db->where('m.metric_id = ms.metric_id');
			//$this->db->where('ps.metricstep_id = ms.metricstep_id');
			$this->db->where('facility_id', $user_data['facility_id']);
			$this->db->where('company_id', $user_data['company_id']);
			$this->db->where('step_id', $step);
			$this->db->where('metric_id', $metric);
			$input = $this->db->get();
			//print_r($input);
			return $input->row();
			//$input = $this->db->get_where('tbl_form_input', array('metricstep_responsibility' => $id, ''));
			//$query = $this->db->get_where('tbl_form_input', array('metricstep_responsibility' => $id, 'step_id' => $step, 'metric_id' => $metric));
			//return result()->row();
			//return $query->result();
		}

		public function userInput($user_data, $input, $step, $metric) {
		   $this->db->where('metric_id',$metric);
		   $this->db->where('step_id',$step);
		   $this->db->where('facility_id', $user_data['facility_id']);
		   $query = $this->db->get('tbl_form_input');
		   //print_r($this->db->last_query());

		   //$this->db->update('tbl_form_input', $input);

		   if ( $query->num_rows() > 0 ) {
		      $this->db->where('metric_id',$metric);
		      $this->db->where('step_id',$step);
		      $this->db->where('facility_id', $user_data['facility_id']);
		      $this->db->update('tbl_form_input',$input);
		   } else {
		      $this->db->set('metric_id', $metric);
		      $this->db->set('step_id', $step);
		      $this->db->where('step_id',$step);
		      $this->db->where('facility_id', $user_data['facility_id']);
		      $this->db->insert('tbl_form_input', $input);
		   }

		   /*if ( $query->num_rows() > 0 ) {
		      $this->db->where('metricstep_id',1);
		      $this->db->update_batch('tbl_l_principlestep',$input);
		   } else {
		      $this->db->set('metricstep_id',1);
		      $this->db->insert_batch('tbl_l_principlestep',$input);
		   }*/
		}

		public function levelProgress($user_data, $step, $metric){
			//LEVEL A
			$this->db->select('*');
			$this->db->where('i.facility_id', $user_data['facility_id']);
			$this->db->where('i.metric_id = m.metric_id');
			$this->db->where('i.metric_id', $metric);
			$this->db->where('m.metric_disabled', 0);
			$this->db->where('i.metricstep_status', 1);
			$countA = $this->db->get_where('tbl_form_input i, tbl_metric m', array('i.step_id <' => '14'));

			// LEVEL AA
			$this->db->select('*');
			$this->db->where('i.facility_id', $user_data['facility_id']);
			$this->db->where('i.metric_id = m.metric_id');
			$this->db->where('i.metric_id', $metric);
			$this->db->where('m.metric_disabled', 0);
			$this->db->where('i.metricstep_status', 1);
			$countAA = $this->db->get_where('tbl_form_input i, tbl_metric m', array('i.step_id < ' => '27', 'i.step_id > ' => '13'));
			//print_r($this->db->last_query());
			// LEVEL AAA
			$this->db->select('*');
			$this->db->where('i.facility_id', $user_data['facility_id']);
			$this->db->where('i.metric_id = m.metric_id');
			$this->db->where('i.metric_id', $metric);
			$this->db->where('m.metric_disabled', 0);
			$this->db->where('i.metricstep_status', 1);
			$countAAA = $this->db->get_where('tbl_form_input i, tbl_metric m', array('i.step_id <= ' => '39', 'i.step_id > ' => '26'));

			$count = array(
				'A' => $countA->num_rows(),
				'AA' => $countAA->num_rows(),
				'AAA' => $countAAA->num_rows()
				);
			return $count;
		}

	}
