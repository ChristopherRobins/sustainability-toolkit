<?php
$attributes = array('id' => 'companyForm');
echo form_open('metrics/add_metric', $attributes);
  echo '<h2 id="facilityTitle">Metric Suggestions</h2>';
  echo '<div id="innerCompanyForm">';
    echo '<div data-criteria="1">';
      echo '<h3>Environment</h3>';
      for($i=0;$i<count($suggestedMetrics['environment']);$i++){
        if(in_array($suggestedMetrics['environment'][$i], $companyMetrics['environment'])){
          echo '<label for="'.$suggestedMetrics['environment'][$i]['metric_name'].'">'.$suggestedMetrics['environment'][$i]['metric_name'].' ';
            echo form_checkbox('environmentMetrics['.$i.']', $suggestedMetrics['environment'][$i]['metric_name'], TRUE, 'disabled');
          echo '</label>';
        } else {
          echo '<label for="'.$suggestedMetrics['environment'][$i]['metric_name'].'">'.$suggestedMetrics['environment'][$i]['metric_name'].' ';
            echo form_checkbox('environmentMetrics['.$i.']', $suggestedMetrics['environment'][$i]['metric_name'], FALSE);
          echo '</label>';
        }
      }
    echo '</div>';
    echo '<div>';
      echo '<h3>Community</h3>';
      for($i=0;$i<count($suggestedMetrics['community']);$i++){
        if(in_array($suggestedMetrics['community'][$i], $companyMetrics['community'])){
          echo '<label for="'.$suggestedMetrics['community'][$i]['metric_name'].'">'.$suggestedMetrics['community'][$i]['metric_name'].' ';
            echo form_checkbox('communityMetrics['.$i.']', $suggestedMetrics['community'][$i]['metric_name'], TRUE, 'disabled');
          echo '</label>';
        } else {
          echo '<label for="'.$suggestedMetrics['community'][$i]['metric_name'].'">'.$suggestedMetrics['community'][$i]['metric_name'].' ';
            echo form_checkbox('communityMetrics['.$i.']', $suggestedMetrics['community'][$i]['metric_name'], FALSE);
          echo '</label>';
        }
      }
    echo '</div>';
    echo '<div>';
      echo '<h3>Operating Practices</h3>';
      for($i=0;$i<count($suggestedMetrics['op']);$i++){
        if(in_array($suggestedMetrics['op'][$i], $companyMetrics['op'])){
          echo '<label for="'.$suggestedMetrics['op'][$i]['metric_name'].'">'.$suggestedMetrics['op'][$i]['metric_name'].' ';
            echo form_checkbox('opMetrics['.$i.']', $suggestedMetrics['op'][$i]['metric_name'], TRUE, 'disabled');
          echo '</label>';
        } else {
          echo '<label for="'.$suggestedMetrics['op'][$i]['metric_name'].'">'.$suggestedMetrics['op'][$i]['metric_name'].' ';
            echo form_checkbox('opMetrics['.$i.']', $suggestedMetrics['op'][$i]['metric_name'], FALSE);
          echo '</label>';
        }
      }
    echo '</div>';
    echo '<div>';
      echo '<h3>Prodcucts & Services</h3>';
      for($i=0;$i<count($suggestedMetrics['pns']);$i++){
        if(in_array($suggestedMetrics['pns'][$i], $companyMetrics['pns'])){
          echo '<label for="'.$suggestedMetrics['pns'][$i]['metric_name'].'">'.$suggestedMetrics['pns'][$i]['metric_name'].' ';
            echo form_checkbox('pnsMetrics['.$i.']', $suggestedMetrics['pns'][$i]['metric_name'], TRUE, 'disabled');
          echo '</label>';
        } else {
          echo '<label for="'.$suggestedMetrics['pns'][$i]['metric_name'].'">'.$suggestedMetrics['pns'][$i]['metric_name'].' ';
            echo form_checkbox('pnsMetrics['.$i.']', $suggestedMetrics['pns'][$i]['metric_name'], FALSE);
          echo '</label>';
        }
      }
    echo '</div>';
    echo '<input id="metricSend" type="submit" name="submit" value="Submit"></input>';
  echo '</div>';
echo form_close();
?>
