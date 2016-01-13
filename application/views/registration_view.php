<?php
   $attributes = array('id' => 'login', 'class' => 'small-10 small-offset-1 medium-8 medium-offset-2 columns');
   echo validation_errors(); ?>
   <?php echo form_open('verifyregistration', $attributes); ?>
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
     <label for="email">Email:</label>
     <input type="text" size="20" id="email" name="email"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="privileges">Privileges:</label>
     <select name="privileges">
       <option value="2">Administrator</option>
       <option value="3">Data Entry</option>
       <option value="4">Read Only</option>
     </select>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="password">Password:</label>
     <input type="password" size="20" id="password" name="password"/>
    </div>
    <div class="small-12 medium-6 columns">
     <label for="password">Facility:</label>
     <input type="text" size="20" id="facility" name="facility" value="<?php echo $facility_id;?>"/>
    </div>
     <input type="submit" value="Register"/>
   </form>
