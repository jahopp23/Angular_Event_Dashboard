app.controller("EventsController", ['$scope', 'eventFactory', function($scope, eventFactory){
	$scope.events = [];

	//When this controller is loaded, fetch the player list
	eventFactory.getEvents(function(events){;
		$scope.events = events;
	});

	//Pass new player info to the playerFactory
	$scope.addEvent = function(){
		eventFactory.addEvent($scope.newEvent);
		$scope.newEvent = {};
	}
	//Pass $index to playerFactory to remove
	$scope.removeEvent = function($index){
		eventFactory.removeEvent($index);
	}
}])
