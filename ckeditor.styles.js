/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
			*/
			
			{ name : 'Lead'             , element : 'p', attributes : { 'class' : 'lead' } },
			{ name : 'red-bullet'		, element : 'li', attributes : { 'class' : 'red-bullet'} },
			{ name : 'blue-background'	, element : 'div', attributes : { 'class' : 'blue-background'} },
			{ name : 'Banner-Title'		, element : 'h1' , attributes : { 'class' : 'banner-title'} },
			{ name : 'img-adaptive'		, element : 'img', attributes : { 'class' : 'img-adaptive'} },
			{ name : 'Translation alert' , element: 'div', attributes : { 'class' : ' alert alert-danger'} },
				


            
            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            { name : 'Big'				, element : 'big' },
            { name : 'Small'			, element : 'small' },
            { name : 'Typewriter'		, element : 'tt' },

            { name : 'Computer Code'	, element : 'code' },
            { name : 'Keyboard Phrase'	, element : 'kbd' },
            { name : 'Sample Text'		, element : 'samp' },
            { name : 'Variable'			, element : 'var' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },

            { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },
			
			{ name : 'Blockquote'		, element : 'div', attributes : { 'class' : 'blockquote'} },
			
            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            },
			
    ]);

}


/*Reference: http://www.aglobalway.com/content/drupal-ckeditor-configuration-work-bootstrap-theme*/
            /* Bootstrap Styles */
   
              /* Typography */
               /* { name : 'span.H1'        , element : 'span', attributes: { 'class': 'h1' } },
                { name : 'span.H2'        , element : 'span', attributes: { 'class': 'h2' } },
                { name : 'span.H3'        , element : 'span', attributes: { 'class': 'h3' } },
                { name : 'span.H4'        , element : 'span', attributes: { 'class': 'h4' } },
                { name : 'span.H5'        , element : 'span', attributes: { 'class': 'h5' } },
                { name : 'span.H6'        , element : 'span', attributes: { 'class': 'h6' } }, 

                { name : 'Paragraph Lead'     , element : 'p', attributes: { 'class': 'lead' } },

                {
                        name : 'Unstyled List',
                        element : 'ul',
                        attributes :
                        {
                                'class' : 'list-unstyled'
                        }
                },
                {
                        name : 'List inline',
                        element : 'ul',
                        attributes :
                        {
                                'class' : 'list-inline'
                        }
                },


                {
                        name : 'Table',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'table'
                        }
                },

                {
                        name : 'Table Striped rows',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'table table-striped'
                        }
                },
                {
                        name : 'Table Bordered',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'table table-bordered'
                        }
                },
                {
                        name : 'Table Hover rows',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'table table-hover'
                        }
                },
                {
                        name : 'Table Condensed',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'table table-condensed'
                        }
                },                
                {
                        name : 'Image shape rounded',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'img-rounded'
                        }
                },
                {
                        name : 'Image shap circle',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'img-circle'
                        }
                },
                {
                        name : 'Image shap thumbnail',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'img-thumbnail'
                        }
                },
                {
                        name : 'Image float left',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'pull-left'
                        }
                },
                {
                        name : 'Image float right',
                        element : 'table',
                        attributes :
                        {
                                'class' : 'pull-right'
                        }
                },   */