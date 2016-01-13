<?php

	class Form_model extends CI_Model {

		public function __construct(){
			parent::__construct();
		}

		public function getUser(){
			$users = $this->db->get('tbl_user');
			return $users->result();
		}

		public function getInput($id, $step, $metric){
			$this->db->select('*');
			$this->db->from('tbl_form_input');
			//$this->db->where('ms.step_id = s.step_id');
			//$this->db->where('s.step_id = sl.step_id');
			//$this->db->where('l.level_id = sl.level_id');
			//$this->db->where('m.metric_id = ms.metric_id');
			//$this->db->where('ps.metricstep_id = ms.metricstep_id');
			$this->db->where('metricstep_responsibility', $id);
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

		public function userInput($id, $input, $step, $metric) {
		   $this->db->where('metricstep_responsibility',$id);
		   $this->db->where('metric_id',$metric);
		   $this->db->where('step_id',$step);
		   $query = $this->db->get('tbl_form_input');

		   //$this->db->update('tbl_form_input', $input);

		   if ( $query->num_rows() > 0 ) {
		      $this->db->where('metricstep_responsibility',$id);
		      $this->db->where('metric_id',$metric);
		      $this->db->where('step_id',$step);
		      $this->db->update('tbl_form_input',$input);
		   } else {
		      $this->db->set('metricstep_responsibility', $id);
		      $this->db->set('metric_id', $metric);
		      $this->db->set('step_id', $step);
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

	}
