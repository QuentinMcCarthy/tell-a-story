google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(loadData);
var array = [];
function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(dataFromSurvey){
			transportation(dataFromSurvey.totals.transportation);
			drawBar(dataFromSurvey.totals.gender);

		},
		error: function(err){
			console.log("Error "+ err.status);
			console.log(err);
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
					// console.log("Bus");

					break;
				case "Car":
					// console.log("Car");

					break;
				case "Walk":
					// console.log("Walk");

					break;
				case "Bike":
					// console.log("Bike");

					break;
				default:
					// console.log("Other");
			}
		}
	});

	// for(var i = 0; i < trains.length; i++){
	// 	$("#iconVisualization").append(trains[i]);
	// }
}


// bar chart
function drawBar(current) {
	array.push(current);
	JSON.stringify(array[0].data);

	var dataGender = new google.visualization.DataTable();

	dataGender.addColumn('string', 'Gender');
	dataGender.addColumn('number', 'Amount');
	array[0].data.forEach(function(currentValue,index){
		for (var i = 0; i < array[0].data.length; i++) {
				dataGender.addRow([
					 array[0].titles[i],array[0].data[i],
				]);
			}
});


	var options = {
		title: 'Male & Female',
		bars: 'horizontal',
		// width: 400,
		vAxis: {minValue: 0}
		// backgroundColor: ''
  	};

  var chart = new google.charts.Bar(document.getElementById('barChart'));
  chart.draw(dataGender, options);
}


//
// $(document).ready(function(){
// 	loadData();
//
// });
