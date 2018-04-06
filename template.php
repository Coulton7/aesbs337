<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

 
 
function aesbs337_preprocess_page(&$vars) { 
    // template files called page--contenttype.tpl.php 
    if (isset($vars['node']->type)) { 
        $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type; 
    }
	
	drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/logoscroll.js');
	drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/fade-text.js');
}

function aesbs337_theme(){
	$items=array();
	
	$items['user_login']=array(
	'render element' => 'form',
	'path'=> drupal_get_path('theme', 'aesbs337').'/templates',
	'template'=>'user_login',
	'preprocess functions'=>array(
	'aesbs337_preprocess_user_login'
	),
	);
	return $items;
}
