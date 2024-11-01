/**
 * This little bit of code will add some small interface-effects, and of course 
 * will provide the Ajax-call necessary to retrieve the shortcode-details
 * 
 */
jQuery(document).ready(function(){
	var els = jQuery('.shortcode_reference_list .shortcode_reference_item');
	els.on('mouseover',
		function(){
			jQuery(this).addClass('highlight');
	});
	els.on('mouseout',
		function(){
			jQuery(this).removeClass('highlight');
	});
	els.on('click',
		function(){
			jQuery.post(ajaxurl, 
			{action: 'shortcode_reference_find_shortcode', shortcode: this.id}, 
			function(response){
				jQuery('#shortcode_reference_details').html(response);
			});
			
			jQuery('.shortcode_reference_list .shortcode_reference_item.selected').removeClass('selected');		
			jQuery(this).addClass('selected');
		});
	
});
