function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			createvisualizations(data);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function createVisualizations(){
	// $("#knobVisualization").knob({
	// 	"min": 0,
	// 	"max": 100,
	// 	"step": 1,
	// 	"angleOffset": 0,
	// 	"angleArc": 360,
	// 	"stopper": true,
	// 	"readOnly": true,
	// 	"rotation": clockwise,
	// 	"cursor": false,
	// 	"thickness": .35,
	// 	"displayInput": true,
	// 	"displayPrevious": false,
	// 	"release":function(){},
	// 	"change":function(){},
	// 	"draw":function(){},
	// 	"cancel":function(){},
	// 	"format":function(){}
	// });
}

$(document).ready(function(){
	loadData();
});
