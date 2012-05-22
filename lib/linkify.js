(function($){
	
	var noProtocolUrl   = /(^|["'(\s]|&lt;)(www\..+?\..+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g, 
		httpOrMailtoUrl = /(^|["'(\s]|&lt;)((?:(?:https?|ftp):\/\/|mailto:).+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g;
		
	$.fn.linkify = function(params) {		
		var statement = '$1<a href="$2">$2</a>$3';
		
		if(typeof params !== 'undefined')	{
			statement =  '$1<a href="$2" ' + params + '>$2</a>$3';
		}
		
		$(this).html(
			$(this).html()
					.replace( noProtocolUrl, '$1<a href="<``>://$2">$2</a>$3' )
					.replace( httpOrMailtoUrl, statement )
					.replace( /"<``>/g, '"http' )
		);
		return $(this);
	};
	
})(jQuery);