<body>
  <div id="headerWrap" class="large-12 columns">
    <header id="mainHeader" class="row">
      <nav id="topNav">
        <ul>
          <li class="companies"><img src="<?php echo base_url();?>images/tavares-new.png" alt="Tavares Logo"></li>
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
      <div id="title" class="small-12 columns">
        <img id="decor" src="<?php echo base_url();?>images/buildings.png" alt="buildings decor">
        <h1>Sustainability Toolkit</h1>
        <p>The Sustainability Toolkit has been developed to address the lack of available and practical guidance on how to implement sustainability in an organization.</p>
        <img id="decor" src="<?php echo base_url();?>images/buildings.png" alt="buildings decor">
      </div>
    </header>
    <!--<nav id="secondary" class="row">
        <ul class="small-6 columns">
            <li><a href="#">Company Profile</a></li>
            <li><a href="#">AAA Standing</a></li>
            <li><a href="#">Set Up Metric</a></li>
          </ul>
        </nav>-->
  </div>
  <div id="holder">
