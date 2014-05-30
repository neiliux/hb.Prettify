"use strict";
var hbPrettify = angular.module('hb.prettify', [], null);

hbPrettify.directive('prettify',
	function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var prettyHtml = prettyPrintOne(element.html(), attrs.lang ? attrs.lang : null);
				element.html(prettyHtml);

				if (!element.hasClass('prettyprint')) {
					element.addClass('prettyprint');
				}
			}
		};
	}
);
