ko.components.register('mapbox', {
 	viewModel: { require: 'mapbox' },
 	template: { require: '<div class="container-fluid" id="map" style="width: 100%; height: 300px;"></div>' }, 
});

ko.applyBindings();