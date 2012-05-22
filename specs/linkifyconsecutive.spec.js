xdescribe("When there are consecutive URLs", function() {
	xit('should have 3 URLs');
});

var linkify = function(url) {
		return jQuery("<div>").html(url).linkify();
	},
	
	urlsInSequence = "https://www.mifont.org www.grupofortes.com.br www.google.com",
	alternateUrls  = "https://www.mifont.org bla ble www.grupofortes.com.br oh my gosh www.google.com",
	
	linkifiedInSequence = "<a href=\"https://www.mifont.org\">https://www.mifont.org</a> <a href=\"http://www.grupofortes.com.br\">www.grupofortes.com.br</a> <a href=\"http://www.google.com\">www.google.com</a>",
						   
	linkifiedAlternate  = "<a href=\"https://www.mifont.org\">https://www.mifont.org</a> bla ble <a href=\"http://www.grupofortes.com.br\">www.grupofortes.com.br</a> oh my gosh <a href=\"http://www.google.com\">www.google.com</a>";

describe("Linkify consecutive URLs", function() {

    beforeEach( function () {
        jQuery("body").html("");
    });
	
	it('should have 3 URLs when in sequence', function() {
		expect( linkifiedInSequence ).toEqual( linkify( urlsInSequence ).html() );
	});

	it('should have 3 alternate URLs', function() {
		expect( linkifiedAlternate ).toEqual( linkify( alternateUrls ).html() );
	});
	
});
