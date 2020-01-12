require(['knockout-x.y.z', 'mapbox', 'components'], function(ko, appViewModel) {
	ko.applyBindings(new appViewModel());
});


//Loading Knockout.js and a ViewModel class via RequireJs
//HTML
//
//<html>
//	<head>
//		<script type="text/javascript" data-main="scripts/init.js" src="scripts/require.js"></script>
//	</head>
//	<body>
//		<p>First name: <input data-bind="value: firstName" /></p>
//		<p>First name capitalized: <strong data-bind="text: firstNameCaps"></strong></p>
//	</body>
//</html>
//scripts/init.js
//
//require(['knockout-x.y.z', 'appViewModel', 'domReady!'], function(ko, appViewModel) {
//	ko.applyBindings(new appViewModel());
//});
//scripts/appViewModel.js
//
//// Main viewmodel class
//define(['knockout-x.y.z'], function(ko) {
//	return function appViewModel() {
//		this.firstName = ko.observable('Bert');
//		this.firstNameCaps = ko.pureComputed(function() {
//			return this.firstName().toUpperCase();
//		}, this);
//	};
//});
//Of course, x.y.z should be replaced with the version number of the Knockout script you are loading (e.g., knockout-3.5.1).