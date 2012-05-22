var linkify = function(url, target) {
		return jQuery("<div>").html(url).linkify(target);
	},
	linkified  = "<a href=\"http://www.mifont.org\" target=\"_blank\">http://www.mifont.org</a>";

describe("Linkify with Target", function() {

    beforeEach( function () {
        jQuery("body").html("");
    });
	
	it('should target in link tag', function() {
		expect( linkified ).toEqual( linkify( "http://www.mifont.org", "target='_blank'" ).html() );
	});
	
});
