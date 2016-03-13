<?php foreach($facility_list as $facility){ ?>
  <ul class="metrics">
    <li><a href="<?php echo base_url('index.php/admin/facility').'/'.$facility->facility_id?>"><?php echo $facility->facility_name ?></a></li>
  </ul>
<?php } ?>
