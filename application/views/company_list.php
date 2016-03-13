<?php foreach($company_list as $company){ ?>
  <div class="companySelect">
    <ul class="metrics">
      <?php if($company->company_id != $company_id) { ?>
        <li><a href="company/<?php echo $company->company_id;?>"><?php echo $company->company_name ?></a></li>
      <?php } ?>
    </ul>
  </div>
<?php } ?>
<script src="<?php echo base_url();?>js/admin_company.js"></script>
