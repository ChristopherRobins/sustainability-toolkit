<?php foreach($company_list as $company){ ?>
  <div class="companySelect">
    <?php if($company->company_id != $company_id) { ?>
      <p><?php echo $company->company_name ?></p>
      <p>Environment</p>
      <?php foreach($metric_list as $metric){ ?>
        <?php if($company->company_id == $metric->company_id && $metric->criteria_id == 1){ ?>
          <ul>
            <li><a><?php echo $metric->metric_name ?></a></li>
          </ul>
        <?php } ?>
      <?php } ?>
      <p>Community</p>
      <?php foreach($metric_list as $metric){ ?>
        <?php if($company->company_id == $metric->company_id && $metric->criteria_id == 2){ ?>
          <ul>
            <li><a><?php echo $metric->metric_name ?></a></li>
          </ul>
        <?php } ?>
      <?php } ?>
      <p>Operating Practices</p>
      <?php foreach($metric_list as $metric){ ?>
        <?php if($company->company_id == $metric->company_id && $metric->criteria_id == 3){ ?>
          <ul>
            <li><a><?php echo $metric->metric_name ?></a></li>
          </ul>
        <?php } ?>
      <?php } ?>
      <p>Products &amp; Services</p>
      <?php foreach($metric_list as $metric){ ?>
        <?php if($company->company_id == $metric->company_id && $metric->criteria_id == 4){ ?>
          <ul>
            <li><a><?php echo $metric->metric_name ?></a></li>
          </ul>
        <?php } ?>
      <?php } ?>
    <?php } ?>
  </div>
<?php } ?>
