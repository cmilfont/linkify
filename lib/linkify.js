(function($){
	
	var noProtocolUrl   = /(^|["'(\s]|&lt;)(www\..+?\..+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g, 
		httpOrMailtoUrl = /(^|["'(\s]|&lt;)((?:(?:https?|ftp):\/\/|mailto:).+?)((?:[:?]|\.+)?(?=(?:\s|$)|&gt;|[)"',]))/g;
		
	$.fn.linkify = function(params) {		
		var statement1 = '$1<a href="<``>://$2">$2</a>$3',
			statement2 = '$1<a href="$2">$2</a>$3';
		
		if(typeof params !== 'undefined')	{
			statement1 = '$1<a href="<``>://$2" ' + params + '>$2</a>$3';
			statement2 = '$1<a href="$2" ' + params + '>$2</a>$3';
		}
		
		$(this).html(
			$(this).html()
					.replace( noProtocolUrl,  statement1  )
					.replace( httpOrMailtoUrl, statement2 )
					.replace( /"<``>/g, '"http' )
		);
		return $(this);
	};
	
})(jQuery);