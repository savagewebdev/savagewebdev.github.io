// Knockout Template

// Simple Bindings (actionable items)
const viewmodel = function (header) {
	
};
ko.applyBindings(new viewModel(header)); // activates knockout object, creates new object with argument
ko.applyBindings(viewModel) // activates knockout using the viewModel shown above, no argument/instantiation


// Components (adding components)

// Component Registration
ko.components.register('my-component', {
	viewModel: SomeComponentViewModel,
	template: { require: 'text!path/my-html-file.html' }, // using AMD frameworks
	template: `Here is HTML Code of some type`...
});

ko.applyBindings(); // needed to apply component bindings?

// Component Binding
	// Shorthand
<div data-bind='component: "my-component"'></div>

	// Longhand
<div data-bind='component: { name: "shopping-cart", params: { mode: "detailed-list", items: productsList }}'></div>
	
// Component Binding without container Element
<!-- ko component: "message-editor" -->
<!-- /ko -->
… or passing parameters:

<!-- ko component: {
	name: "message-editor",
	params: { initialText: "Hello, world!", otherParam: 123 }
} -->
<!-- /ko -->