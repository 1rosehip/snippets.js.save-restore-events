## Save and Restore Events (jQuery Plugin)

Small jQuery plugin to save and restore events for the given jQuery element.

**Usage Example:**

Add sample events to the button element:

	var $btn = $('#btn'), $box = $('#box');

	//add event #1
	$btn.on('click', function(){
		$box.toggle();
	});

	//add event #2
	$btn.on('mouseover', function(){
		$(this).css('border', '1px solid blue');
	});

	//add event #3
	$btn.on('mouseout', function(){
		$(this).css('border', '');
	});

Save all button events:	
	
	//save events
	$.srEvents.save($btn, 'custom-events');

Remove all button events and custom code:

	//remove all events
	$btn.off();

	//custom code....
	//...
	//...

Restore all button events:
	
	//restore all events of the $btn element
	$.srEvents.restore($btn, 'custom-events');
