// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {
	$('select[id$="ca_site_version"]').on("change", function(){
		correct_colorscheme_visibility($(this).val());
	} );

	$('#caweb_enable_design_system').on("change", function(){
		var version = document.getElementById('caweb_enable_design_system').checked ? 'design-system' : $('select[id$="ca_site_version"]').val(); 
		correct_colorscheme_visibility(version);
	} );

	function correct_colorscheme_visibility(version){
		var color_scheme_picker = $('select[id$="ca_site_color_scheme"]');
		var current_color = color_scheme_picker.val();
		var new_colors = caweb_admin_args.caweb_colorschemes[version];

		color_scheme_picker.empty();

		$.each(new_colors, function(i, ele){
			var o = document.createElement( 'OPTION' );

			$(o).val( i );
			$(o).html( ele.displayname );

			if( i === current_color ){
				$(o).attr('selected', 'selected');
			}

			color_scheme_picker.append( o );
		});

	}

});