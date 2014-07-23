/**
* save and restore events fot the given jquery element
* USAGE:
*
* //save events
* $.srEvents.save($('#test'), 'custom-events');
*
* //remove events
* $('#test').off();
*
* //restore events
* $.srEvents.restore($('#test'), 'custom-events');
*/
;(function($){
	'use strict';
	
	/** 
	* Save and Restore Events
	* @type {Object}
	*/
	$.srEvents = {};
	
	/**
	* save events
	* @param {jQueryObject} $el
	* @param {string} propertyName - property that keeps event data (in data object)
	*/
	$.srEvents.save = function($el, propertyName){
		
		var events
			,copyOf;
		
		if($el && $el.length > 0){
			
			//get events from element
			events = $._data($el[0], 'events');
			
			//create deep copy of the events object
			copyOf = $.extend(true, {}, events);			
			
			//save events in data
			$el.data(propertyName, copyOf);
		}		
	};
	
	/**
	* restore events
	* @param {jQueryObject} $el
	* @param {string} propertyName - property that keeps event data (in data object)
	*/
	$.srEvents.restore = function($el, propertyName){
		
		var events;
		
		if($el && $el.length > 0){	
						
			//get saved events
			events = $el.data(propertyName);
			
			if(events){
			
				$.each(events, function(eventName, eventHandler){
				
					if(eventHandler){
						$.each(eventHandler, function(){
						
							if($.isFunction(this.handler)){
								$el.on(eventName, this.handler);
							}
						});
					}
				});
			}
		}
	};
	
		
})(jQuery);

