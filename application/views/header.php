<body>
  <nav id="topNav">
        <ul>
          <li class="companies"><a href="http://tavaresgroupconsulting.com" target="_blank"><img src="<?php echo base_url();?>images/tavares-new.png" alt="Tavares Logo"></a></li>
          <li><a href="<?php echo base_url('index.php/home/index')?>">Home</a></li>
          <li class="aboutdropdown"><!-- <a data-dropdown="drop1" aria-controls="drop1" aria-expanded="false">About</a>
            <ul id="drop1" class="f-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">
              <li><a href="#">Resources</a></li>
            </ul> -->
            <a href="#">About</a>
            <ul class="dropdowncontent">
              <li><a href="#">Resources</a></li>
            </ul>
          </li>
          <li class="aboutdropdown">
          <a href="#">Profile</a>
          <ul class="dropdowncontent">
            <?php if(isset($user_privileges) && $user_privileges == 1) {
              echo "<li><a href=";
              echo base_url('index.php/registration/company');
              echo ">Register Company</a></li>";
            }
            if(isset($user_privileges) && $user_privileges <= 2) {
              echo "<li><a href=";
              echo base_url('index.php/registration/facility');
              echo ">Register Facility</a></li>";
            }
            if(isset($user_privileges) && $user_privileges <= 3) {
              echo "<li><a href=";
              echo base_url('index.php/registration/user');
              echo ">Register User</a></li>";
            }
            ?>
          </ul>
        </li>
          <li><a href="<?php echo base_url('index.php/home/logout')?>">Logout</a></li>
        </ul>
      </nav>
  <div id="headerWrap" class="large-12 columns">
    <header id="mainHeader" class="row">
      <div id="title" class="small-12 columns">
        <img id="decor" src="<?php echo base_url();?>images/buildings.png" alt="buildings decor">
        <h1>Sustainability Toolkit</h1>
        <p>The Sustainability Toolkit has been developed to address the lack of available and practical guidance on how to implement sustainability in an organization.</p>
        <img id="decor" src="<?php echo base_url();?>images/buildings.png" alt="buildings decor">
      </div>
    </header>
  </div>
  <div id="holder">
    
