function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(dataFromSurvey){
			console.log(dataFromSurvey);
			transportation(dataFromSurvey.totals.transportation);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
			console.log('work');
		}
	});
}

function transportation(dataFromSurvey){
	var titles = dataFromSurvey.titles,
		numbers = dataFromSurvey.data,
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
