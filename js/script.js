var surveyData;

function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			// console.log(data);
			transportation(data.totals.transportation);

			surveyData = data;
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function transportation(transportData){
	var titles = transportData.titles,
		numbers = transportData.data,
		trainCount = 0,
		busCount = 0,
		carCount = 0,
		walkCount = 0,
		bikeCount = 0;

	numbers.forEach(function(currentValue,index){
		for(var i = 0; i < currentValue; i++){
			var currTitle = titles[index];

			if(currTitle == "Train"){
				trainCount++;
			} else if(currTitle == "Bus"){
				busCount++;
			} else if(currTitle == "Car"){
				carCount++;
			} else if(currTitle == "Walk"){
				walkCount++;
			} else if(currTitle == "Bike"){
				bikeCount++;
			} else{
				var splitTitle = currTitle.split(",");

				for(var a = 0; i < splitTitle.length; i++){
					if(splitTitle[a] == "Train"){
						trainCount++;
					} else if(splitTitle[a] == "Bus"){
						busCount++;
					} else if(splitTitle[a] == "Car"){
						carCount++;
					} else if(splitTitle[a] == "Walk"){
						walkCount++;
					} else if(splitTitle[a] == "Bike"){
						bikeCount++;
					} else{
						console.log("Invalid data");
					}
				}
			}
		}
	});

	var iconClass = "fas fa-2x",
		i;

	for(i = 0; i < trainCount; i++){
		$("#trains").append($("<i class='"+iconClass+" fa-subway'>"));
	}

	for(i = 0; i < busCount; i++){
		$("#buses").append($("<i class='"+iconClass+" fa-bus'>"));
	}

	for(i = 0; i < carCount; i++){
		$("#cars").append($("<i class='"+iconClass+" fa-car'>"));
	}

	for(i = 0; i < walkCount; i++){
		$("#walks").append($("<i class='"+iconClass+" fa-walking'>"));
	}

	for(i = 0; i < bikeCount; i++){
		$("#bikes").append($("<i class='"+iconClass+" fa-bicycle'>"));
	}
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(dataFromSurvey) {
	var data = google.visualization.arrayToDataTable([dataFromSurvey]);
	// data.addColumn('string', 'Gender');
	// data.addColumn('number', 'Count');
	// dataGender.addRow(["Male", male]);
	// dataGender.addRow(["Female", female]);
	var options = {
		title: 'Male & Female'
  	};

  var chart = new google.visualization.PieChart(document.querySelector('.left-top'));
  chart.draw(data, options);
}


$(document).ready(function(){
	loadData();

});
