<?php
/**
 * @file
 * Default theme implementation for displaying a single search result.
 *
 * This template renders a single search result and is collected into
 * search-api-page-results.tpl.php. This and the parent template are dependent
 * on one another, sharing the markup for definition lists.
 *
 * View mode is set in the Search page settings. If you select
 * "Themed as search results", then this template will be used for theming the
 * individual results. Any other view mode will bypass this template.
 *
 * Available variables:
 * - $index: The search index this search is based on.
 * - $url: URL of the result.
 * - $title: Title of the result (unsanitized).
 * - $snippet: A small preview of the result.
 * - $info: String of all the meta information ready for print. Applies
 *   only if the result is a node.
 * - $info_split: Contains same data as $info, split into a keyed array.
 * - $classes: CSS classes for this list element.
 *
 * Default keys within $info_split:
 * - $info_split['user']: Author of the entity, where an author exists.
 *   Depends on permission.
 * - $info_split['date']: Last update of the entity, if the 'updated'
 *   field exists. Short formatted.
 *
 * Since $info_split is keyed, a direct print of the item is possible.
 * This array applies where the search result is a node, so it is
 * recommended to check for its existence before printing.
 * Where the result is a node, the default keys of 'user' and 'date'
 * will always exist.
 *
 * To check for all available data within $info_split, use the code below.
 * @code
 *   <?php print '<pre>'. check_plain(print_r($info_split, 1)) .'</pre>'; ?>
 * @endcode
 *
 * @see template_preprocess_search_api_page_result()
 */
?>
<?php
  $nid = $variables['result']['node']->nid;;
  $node = node_load($nid);
  $nodeType = $node->type;

  switch($nodeType):
    case 'article':
      $contentType = 'News';
    break;
    case 'case_studies':
      $contentType = 'Case Studies';
    break;
    case 'industryguide':
      $contentType = 'Industry Guide';
    break;
    case 'product':
      $contentType = 'Product';
    break;
    case 'gland_packing':
      $contentType = 'Product';
    break;
    case 'bearing_protection':
      $contentType = 'Product';
    break;
    case'seal_support_systems';
      $contentType = 'Product';
    break;
    case 'cartridge_mechanical_seals';
      $contentType = 'Product';
    break;
    case 'productbrochure':
      $contentType = 'Product Brochure';
    break;
    case 'video':
      $contentType = 'Video';
    break;
    case 'whitepaper':
      $contentType = 'Whitepaper';
    break;
    case 'apiplans':
      $contentType = 'API Plans';
    break;
    case 'page':
      $contentType = 'Web Page';
    break;
    default:
      $contentType = '';
    break;
  endswitch;
?>
<li class="search-result">
	<div class="dotted-border">
    <p class="search-performance"><?php print check_plain($url)?></p>
		<h3 class="title">
		<?php print $url ? l($title, $url['path'], $url['options']) : check_plain($title); ?>
		</h3>
    <h6>
      <?php print $contentType; ?>
    </h6>
		<div class="search-snippet-info">
				<?php if ($snippet): ?>
				<p class="search-snippet"<?php print $content_attributes; ?>>
				<?php print (filter_xss($snippet, $allowed_tags = array('sup'))); ?></p>
				<div class="text-right"><?php print $url ? l(t('Read more'), $url['path'], $url['options']) : check_plain('Read more'); ?></div>
			<?php endif; ?>
		</div>
	</div>
</li>
<br>
