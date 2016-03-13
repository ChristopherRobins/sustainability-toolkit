<ul class="metrics">
  <li>Environment</li>
  <?php foreach($metric_list as $metric){ ?>
    <?php if($metric->criteria_id == 1){ ?>
      <ul>
        <li><a herf="#" class="metricAnchor" data-metric="<?php echo $metric->metric_id; ?>" data-company="<?php echo $metric->company_id; ?>"><?php echo $metric->metric_name ?></a></li>
      </ul>
    <?php } ?>
  <?php } ?>
  <li>Community</li>
  <?php foreach($metric_list as $metric){ ?>
    <?php if($metric->criteria_id == 2){ ?>
      <ul>
        <li><a herf="#" class="metricAnchor" data-metric="<?php echo $metric->metric_id; ?>" data-company="<?php echo $metric->company_id; ?>"><?php echo $metric->metric_name ?></a></li>
      </ul>
    <?php } ?>
  <?php } ?>
  <li>Operating Practices</li>
  <?php foreach($metric_list as $metric){ ?>
    <?php if($metric->criteria_id == 3){ ?>
      <ul>
        <li><a herf="#" class="metricAnchor" data-metric="<?php echo $metric->metric_id; ?>" data-company="<?php echo $metric->company_id; ?>"><?php echo $metric->metric_name ?></a></li>
      </ul>
    <?php } ?>
  <?php } ?>
  <li>Products &amp; Services</li>
  <?php foreach($metric_list as $metric){ ?>
    <?php if($metric->criteria_id == 4){ ?>
      <ul>
        <li><a herf="#" class="metricAnchor" data-metric="<?php echo $metric->metric_id; ?>" data-company="<?php echo $metric->company_id; ?>"><?php echo $metric->metric_name ?></a></li>
      </ul>
    <?php } ?>
  <?php } ?>
</ul>

<script src="<?php echo base_url();?>js/admin_company.js"></script>
