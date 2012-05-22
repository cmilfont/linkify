var linkify = function(url) {
		return jQuery("<div>").html(url).linkify();
	},
	linkifiedWithHttps  = "<a href=\"https://www.mifont.org\">https://www.mifont.org</a>",
	linkifiedWithHttp   = "<a href=\"http://www.mifont.org\">http://www.mifont.org</a>",
	linkified           = "<a href=\"http://www.mifont.org\">www.mifont.org</a>";
	

describe("Linkify simple value", function() {
	
	describe("When there is protocol in URL", function() {
				
	    beforeEach( function () {
	        jQuery("body").html("");
	    });
		
		it('should url with http', function(){
			expect( linkifiedWithHttp ).toEqual( linkify("http://www.mifont.org").html() );
		});
		
		it('should url with https', function(){
			expect( linkifiedWithHttps ).toEqual( linkify("https://www.mifont.org").html() );
		});

	});

	describe("When there isn't protocol in URL", function() {
		
		it('should url with http', function(){
			expect( linkified ).toEqual( linkify("www.mifont.org").html() );
		});
		
	});
	
});