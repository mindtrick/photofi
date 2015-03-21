    
//var host = "192.168.1.107:3000";

    // var eventIds=JSON.parse(localStorage.getItem("eventIds"));
    // var eventId;
    // if (!eventIds) {eventIds=[]};
    // //get eventId
    // if (eventIds.indexOf(eventId)== -1) {eventIds.push(eventId);};
    // localStorage.setItem("eventIds",JSON.stringify(eventId));
    var host = "http://photofim-mindtrick.rhcloud.com/"

    function buildlist ()
    {	
    	$.ajax({
              url: host+'/events',
              dataType: 'json',
              success: function(data) {
              	var events = data["data"];
              	var listcontainer = $('#wrapper');
              	listcontainer.clear();
                $.each(events, function(index,value){
                	var BaseUrl='http://gallery.html?eventid='+value["eventId"];
                	var item = $('<li>')
                	   .append(
                	   		$('div')
                	   			.prop('class','behind')
                	   			.append($('<a>delete</a>').prop('herf','#').prop('class','ui-btn'+'delete-btn')
                	   		)
                	   			.append($('<a href="'+BaseUrl+'" data-ajax="false">')
                	   				.append($('div')
                	   						.prop('class','inline').append($('<h2>'+value["titile"] +'</h2>'))
                	   						.append($('<p>'+value["description"] +'</p>'))
                	   					)
                	   				)
                	   			);


                	 listcontainer.append(item);
              	//handle the data               
		        });
		      },
    error: function() {

        //handle the error
    }
     });
    

}
