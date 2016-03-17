<div id="popup">
  <div id="inner-popup">
    <?php $attributes = array('id' => 'form', 'method' => 'post'); echo form_open('home', $attributes);?>
      <div class="row">
        <div class="large-12 columns formHeader">
          <h1 id="stage">1. Assess Stakeholder Priorities</h1>
          <p id="close">X</p>
        </div>

      </div>
      <div id="form-content">
        <div class="large-12 columns">
          <p class="step-desc"></p>
        </div>
        <div class="row">
          <div class="principles">
            <input name="principle" type="checkbox" value="1">
            <label>Accountability</label>
          </div>
          <div class="principles">
            <input name="principle" type="checkbox" value="2">
            <label>Compliance</label>
          </div>
          <div class="principles">
            <input name="principle" type="checkbox" value="3">
            <label>Ethical Behaviour</label>
          </div>
          <div class="principles">
            <input name="principle" type="checkbox" value="4">
            <label>Stakeholder</label>
          </div>
          <div class="principles">
            <input name="principle" type="checkbox" value="5">
            <label>Transparency</label>
          </div>
        </div>
        <div class="row">
          <div class="large-12 columns">
            <!--<label>Principle Name</label>
            <input type="text" placeholder="principle name">-->
            <label>Principle Description</label>
            <textarea name="inputDesc"><?php echo $input->metricstep_description; ?></textarea>
            <!--<textarea name="inputDesc"><?php $inputmetricstep_description; ?></textarea>-->
          </div>
        </div>
          <div class="row">
            <div class="large-12 columns">
              <label>Initial Assessment (GAPS)</label>
              <textarea name="inputGAPS"><?php echo $input->metricstep_gaps; ?></textarea>
            </div>
          </div>
          <div class="row">
            <div class="large-12 columns">
              <label>Actions</label>
              <textarea name="inputActions"><?php echo $input->metricstep_actions; ?></textarea>
            </div>
          </div>
          <div class="row">
            <div class="large-12 columns">
              <label>Responsibility</label>
              <select>
                <option vale="0">Select User</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="large-12 columns">
              <label>Comments</label>
              <textarea name="inputComments"><?php echo $input->metricstep_comments; ?></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="large-12 columns pages">
            <div class="completionStatus">
              <label>Complete</label>
              <input name="inputStatus" type="checkbox" checked>
            </div>
            <span class="prev">&lt;&lt;</span> level <span class="page">A</span><span class="next">&gt;&gt;</span>
            <img id="accept" src="<?php echo base_url();?>images/checkmark.png" alt="accept changes">
          </div>
      </div>
    <?php echo form_close(); ?>
  </div>
</div>
