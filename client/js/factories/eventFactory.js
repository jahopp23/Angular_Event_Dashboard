app.factory("eventFactory", function(){        
        var events = [
        { title: "Jazz Night",location: "Downtown Dallas", date:"November 4, 2016", time:"5pm - 11pm", description:"Come out and enjoy live local jazz music in the heart of Dallas!"}
        ];

        var factory = {};

        // Pass the event list to a controller
        factory.getEvents = function(callback){
                callback(events);
        }
        //Add new event to the list
        factory.addEvents = function(newEvent){
                events.push(newEvent);
        }
        //Remove event from the list
        factory.removeEvent = function($index){
                events.splice($index, 1);
        }
        
        return factory;
})






