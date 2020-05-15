import './css/test.css';
import style from './css/style.css';
require('./js/vendors/jquery-migrate.min.js');
require('./js/scripts-general.js')

require('./js/homepage.js');
require('./js/navBar.js');
require('./js/vendors/bootstrap.min.js')
require('./js/jquery.knob.js')
require('./js/smoothscroll.js')
require('./js/scrollReveal.js')
require('./js/zerif.js')

jQuery(document).ready(function() {

    var session_var = pirateFormsObject.errors;

    if( (typeof session_var != 'undefined') && (session_var != '') && (typeof jQuery('#contact') != 'undefined') && (typeof jQuery('#contact').offset() != 'undefined') ) {

        jQuery('html, body').animate({
            scrollTop: jQuery('#contact').offset().top
        }, 'slow');
    }
	
	if( typeof jQuery('.pirate_forms_three_inputs').val() != 'undefined' ) {
		 jQuery('.pirate_forms ').each(function(){
			  jQuery(this).find('.pirate_forms_three_inputs').wrapAll('<div class="pirate_forms_three_inputs_wrap">'); 
		  })
	}
});

