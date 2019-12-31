ko.components.register('header', {
 	viewModel: SomeComponentViewModel,
 	template: { require: 'text!path/my-html-file.html' }, // using AMD frameworks
 	template: `Here is HTML Code of some type`...
});


ko.applyBindings();