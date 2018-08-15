function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			transportation(data.totals.transportation);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function transportation(data){
	var titles = data.titles,
		numbers = data.data,
		trains, buses, cars, walkers, bikers, others;

	numbers.forEach(function(currentValue,index){
		for(var i = 0; i < currentValue; i++){
			switch(titles[index]){
				case "Train":
					// trains.push($("<i class='fas fa-subway'>"));

					break;
				case "Bus":
					console.log("Bus");

					break;
				case "Car":
					console.log("Car");

					break;
				case "Walk":
					console.log("Walk");

					break;
				case "Bike":
					console.log("Bike");

					break;
				default:
					console.log("Other");
			}
		}
	});

	// for(var i = 0; i < trains.length; i++){
	// 	$("#iconVisualization").append(trains[i]);
	// }
}

$(document).ready(function(){
	loadData();
});
