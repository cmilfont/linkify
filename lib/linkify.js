(function($){
	
	var noProtocolUrl   = /(^|["'(\s]|&lt;)(www\..+?\..+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g, 
		httpOrMailtoUrl = /(^|["'(\s]|&lt;)((?:(?:https?|ftp):\/\/|mailto:).+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g;
		
	$.fn.linkify = function() {
		$(this).html(
			$(this).html()
					.replace( noProtocolUrl, '$1<a href="<``>://$2">$2</a>$3' )
					.replace( httpOrMailtoUrl, '$1<a href="$2">$2</a>$3' )
					.replace( /"<``>/g, '"http' )
		);
		return $(this);
	};
	
})(jQuery);