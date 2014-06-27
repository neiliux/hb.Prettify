hb.Prettify
===========

AngularJS and google-code-prettify integration.

How to use
----------
* Include prettify.js and any prettify styles you want to use on your page.
* Include hbPrettify.js on your page.
* Inject hb.prettify into your controller, service, etc.
````
var sandbox = angular.module('sandbox', ['hb.prettify'], null);
var sandboxCtrl = sandbox.controller('sandboxCtrl', [
    '$scope',
    '$sce',
    function ($scope, $sce) {
        $scope.dynamicSnippet = $sce.trustAsHtml('<pre data-prettify>public class DynamicFoobar() { }</pre>');
    }
]);
````
* Add the prettify directive to your element containing the snippet:
````
<pre data-prettify>public class Foobar { }</pre>
````

Caveat
--------
If you are loading content into your page via AJAX or another mechanism you will need to include the compile directive to the parent element containing the snippet.
````
<div data-compile data-ng-bind-html="dynamicSnippet"></div>
````  
