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
  drupal_add_js(drupal_get_path('theme', 'aesbs337').'/js/contact-icon.js');
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

function search_api_preprocess_search_result(&$variables) {
  $node = $variables['result']['node'];
  if (isset($node)) {
    $variables['teaser'] = \Drupal::entityTypeManager()->getViewBuilder('node')->view($node,'teaser');
  }
};

function aesbs337_form_search_block_form_alter(&$form, &$form_state) {
    $form['keys']['#attributes']['placeholder'][] = t('Search');
    $form['actions']['submit']['#value'] = html_entity_decode('&#xf002;');
    $form['actions']['submit']['#attributes']['class'][] = 'search-button';
}
