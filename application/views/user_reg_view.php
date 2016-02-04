<?php if($user_privileges <= 3): ?>
<?php
   $attributes = array('id' => 'login', 'class' => 'small-10 small-offset-1 medium-8 medium-offset-2 columns');
   echo form_open('verifyregistration/user', $attributes);
   echo validation_errors('<p class="errors">');
    ?>
    <div class="small-12 medium-6 columns">
      <label for="username">Username:</label>
      <input type="text" size="20" id="username" name="username"/>
    </div>
    <div class="small-12 medium-6 columns">
      <label for="fname">First Name:</label>
      <input type="text" size="20" id="fname" name="fname"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="lname">Last Name:</label>
     <input type="text" size="20" id="lname" name="lname"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="position">Position:</label>
     <input type="text" size="20" id="position" name="position"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="department">Department:</label>
     <input type="text" size="20" id="department" name="department"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="phone">Phone:</label>
     <input type="text" size="20" id="phone" name="phone"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="email">Email:</label>
     <input type="text" size="20" id="email" name="email"/>
    </div>
    <div id="userPrivileges" class="small-12 medium-6 columns">
     <label for="privileges">Privileges:</label>
     <select name="privileges">
      <?php if($user_privileges == 1):?>
       <option value="1">Tavares</option>
      <?php endif; ?>
      <?php if($user_privileges <= 2): ?>
       <option value="2">Organization Admin</option>
      <?php endif; ?>
      <?php if($user_privileges == 2 || $user_privileges == 3): ?>
       <option value="3">Facility Admin</option>
       <option value="4">Data Entry</option>
       <option value="5">Read Only</option>
      <?php endif; ?>
     </select>
    </div>
    <div id="userCompany" class="small-12 medium-6 columns">
      <label for="userCompany">Company: </label>
      <select name="userCompany">
        <?php if($user_privileges == 1): ?>
          <option value=''>Select a company</option>
          <option value='1'>Tavares</option>
        <?php endif; ?>
        <?php foreach($companies as $company){
          if($company->company_id != 1){
            echo '<option value="'.$company->company_id.'">'.$company->company_name.'</option>';
          }
        }
        ?>
      </select>           
    </div>
    <?php if($user_privileges == 1): ?>
      <div id="userFacility" class="small-12 medium-6 columns hidden">
        <label for="userFacility">Facility: </label>
          <select name="userFacility">
            <option value=''>Select a facility</option>;
          </select>
      </div>
    <?php endif; ?>
    <?php if($user_privileges >= 2): ?>
      <div class="small-12 medium-6 columns">
        <label for="userFacility">Facility: </label>
          <select name="userFacility">
            <?php if($user_privileges == 2): ?>
              <option value=''>Select a facility</option>;
            <?php endif; ?>
            <?php foreach($facilities as $facility){
              echo '<option value="'.$facility->facility_id.'">'.$facility->facility_name.'</option>';
            }
            ?>
          </select>
      </div>
    <?php endif; ?>
    <div class="small-12 medium-6 columns">
     <label for="password">Password:</label>
     <input type="password" size="20" id="password" name="password"/>
    </div>
     <input type="submit" value="Register"/>
   </form>

   <script src="<?php echo base_url();?>js/registration_form.js"></script>
   <?php else: ?>
  <h2 id="companyTitle">Access Denied</h2>
<?php endif; ?>
