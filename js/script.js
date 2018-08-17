google.charts.load('current', {'packages':['corechart','bar','geochart'],'mapsApiKey': 'AIzaSyCGWQknqUrD9uCL0vx-Mv5Fra41NFaHERU'});
google.charts.setOnLoadCallback(loadData);
var array = [];
function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			transportation(data.totals.transportation);
			drawBar(data.totals.beforeYoobee);
			donutChart(data.totals.currentCourse);
			geoChart(data.totals.suburb)

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
	for (var i = 0; i < array[0].data.length; i++) {
			dataGender.addRow([
				array[0].titles[i],array[0].data[i],
			]);
	};
	var options = {
		title: 'Before Yoobee',
		bars: 'horizontal',
		colors:['#899ebf'],
		vAxis: {
			minValue: 0
		},

		backgroundColor: {
					fill: 'transparent'
		}
  	};

  var chart = new google.charts.Bar(document.getElementById('barChart'));
  chart.draw(dataGender, options);
}

//donut Chart
function donutChart(courses) {
	array.push(courses);
	var dataCourse = new google.visualization.DataTable();
	dataCourse.addColumn('string', 'Courses');
	dataCourse.addColumn('number','Amount');
	for (var i = 0; i < array[1].data.length; i++) {
			dataCourse.addRow([
				array[1].titles[i],array[1].data[i],
			]);
	};
	var options = {
		title: 'Current courses Yoobee students taking',
		pieHole:0.3,
		colors: ['#d4d0db', '#ccbae2', '#ae9bc6','#a089bc','#836aa3','#664d87','#34165b','#470a96']
	};

	var chart = new google.visualization.PieChart(document.getElementById('donuty'));
	chart.draw(dataCourse, options);

}

function geoChart(location) {
	array.push(location);
	var dataSuburb  = new google.visualization.DataTable();
	dataSuburb.addColumn('string','Suburb');
	dataSuburb.addColumn('number','Amount');

	for (var i = 0; i < array[2].data.length; i++) {
			dataSuburb.addRow([
				array[2].titles[i], array[2].data[i]
			]);
	};
	var options = {
		region:'NZ',
		resolution:'provinces',
		displayMode: 'markers',
		tooltip: {textStyle: {color: '#444444'}}
};


	var chart = new google.visualization.GeoChart(document.getElementById('geo'));
 	chart.draw(dataSuburb, options);
}
