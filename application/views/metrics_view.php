<div id="metricHolder">
  <div class="row">
    <div id="metricHeader" class="large-12 columns">
      <div id="text" class="large-12 columns">
        <h2></h2>
        <h3></h3>
        <div class="row">
          <div class="large-4 columns">
            <!-- <ul id="level">
              <li>A</li>
              <li>AA</li>
              <li>AAA</li>
            </ul> -->
            <div class="levelA"><div></div>A</div>
            <div class="levelAA"><div></div>AA</div>
            <div class="levelAAA"><div></div>AAA</div>
            <!-- <div id="levelview">
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="large-3 columns">
    </div>
  </div>
  <div id="metricWrap" class="clearfix">
    <ul id="metrics">
    </ul>
    <?php if($user_privileges == 2): ?>
    <div id="addMetric">
      <input type="text" placeholder="Add New Metric"></input>
      <button type="button" id="search">+</button>
    </div>
    <?php endif; ?>
  </div>
</div>
<div id="background">
      <img id="grass" src="<?php echo base_url();?>images/GrassSeparate.png" alt="Background">
      <img id="frontHill" src="<?php echo base_url();?>images/FrontHill.png" alt="Background">
      <ul id="metricFlowers">
      </ul>
    </div>
    <div id="exitWheel">
      <p>Return</p>
      <img src="<?php echo base_url();?>images/flower-link.png" alt="exit wheel">
    </div>
  </div>

<script src="<?php echo base_url();?>js/wheel.js"></script>
