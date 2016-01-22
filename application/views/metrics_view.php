<div id="metricHolder">
  <nav id="primary" class="row">
    <ul class="small-12 columns">
      <li class="companies"><a href="http://tavaresgroupconsulting.com" target="_blank"><img src="<?php echo base_url();?>images/tavares-new.png" alt="Tavares Logo"></a></li>
      <li><a href="#">Tool Kit</a></li>
      <li><a href="#">Principles &amp; Criteria</a></li>
      <li><a href="#">Action Plan &amp; Assessment</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Resources</a></li>
      <?php if(isset($user_privileges) && $user_privileges == 2) {
            echo "<li><a href=";
            echo base_url('index.php/registration');
            echo ">Register User</a></li>";
          }
          ?>
          <li><a href="<?php echo base_url('index.php/home/logout')?>">Logout</a></li>
    </ul>
  </nav>
  <div class="row">
    <div id="metricHeader" class="large-12 columns">
      <div id="text" class="large-12 columns">
        <h2></h2>
        <h3></h3>
        <div class="row">
          <div class="large-4 columns">
            <ul id="level">
              <li>A</li>
              <li>AA</li>
              <li>AAA</li>
            </ul>
            <div id="levelview">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="large-3 columns">
    </div>
  </div>
  <ul id="metrics">
  </ul>
</div>
