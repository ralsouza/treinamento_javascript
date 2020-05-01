(function(win,doc) {

	'use strict';

	var $inputUserName = doc.querySelector('#username');
	var $inputPassword = doc.querySelector('#password');
	var $inputButton = doc.querySelector('#button');

	// Adding an event submit to send the form, after click
	$inputButton = doc.addEventListener( 'click', function(event) {

		event.preventDefault();

		console.log('Click Me');

	}, false);	

	// Show an alert on click in User Name Field
	$inputUserName = doc.addEventListener( 'click', function(event) {
		alert('Clicked on the input');
	}, false);

	// Show an alert on click in the document
	
	/*
		document.addEventListener( 'click', function(event) {
			alert('Clicked in the form');
		}, false);
	*/
})(window,document);
