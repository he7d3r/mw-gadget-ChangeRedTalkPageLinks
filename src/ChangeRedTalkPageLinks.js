/**
 * Make red links to talk pages behave like action=edit&section=new ([[bugzilla:22416]])
 */
/*jslint browser: true, white: true, unparam:true*/
/*global jQuery, mediaWiki */
( function ( $ ) {
'use strict';

var changeRedTalkPageLinks = function(){
	$('#ca-talk.new')
		// .removeClass('new')
		.find('a')
			.attr('href', function(i,href){
				return href.replace('redlink=1', 'section=new');
			});
};
$(changeRedTalkPageLinks);

}( jQuery ) );