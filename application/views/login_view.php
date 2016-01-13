<?php
   $attributes = array('id' => 'login', 'class' => 'small-10 small-offset-1 medium-6 medium-offset-3 large-4 large-offset-4 columns');
   echo validation_errors(); ?>
   <?php echo form_open('verifylogin', $attributes); ?>
     <label for="username">Username:</label>
     <input type="text" size="20" id="username" name="username"/>
     <br/>
     <label for="password">Password:</label>
     <input type="password" size="20" id="password" name="password"/>
     <br/>
     <ul>
       <li><a href="#">Forget your username?</a></li>
       <li><a href="#">Forget your password?</a></li>
     </ul>
     <input type="submit" value="Login"/>
   </form>
