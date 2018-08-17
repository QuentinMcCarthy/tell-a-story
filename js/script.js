google.charts.load('current', {'packages':['corechart','bar','geochart'],'mapsApiKey': 'AIzaSyCGWQknqUrD9uCL0vx-Mv5Fra41NFaHERU'});
google.charts.setOnLoadCallback(loadData);
var surveyData;
var array = [];

function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			// console.log(data);
			transportation(data.totals.transportation);
			drawBar(data.totals.beforeYoobee);
			donutChart(data.totals.currentCourse);
			transportation(data.totals.transportation);
			drawBar(data.totals.beforeYoobee);
			donutChart(data.totals.currentCourse);
			geoChart(data.totals.suburb)
			surveyData = data;
		},
		error: function(err){
			console.log("Error "+ err.status);
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
<<<<<<< HEAD
	}
	// });
=======
	};
>>>>>>> thursdayJ
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
			console.log(array[1].titles[i]);
			console.log(array[1].data[i]);
	}
	var options = {
		// pieHole:0.3,
	};
	var options = {
		title: 'Current courses Yoobee students taking',
		pieHole:0.3,
		colors: ['#d4d0db', '#ccbae2', '#ae9bc6','#a089bc','#836aa3','#664d87','#34165b','#470a96']
	};

	var chart = new google.visualization.PieChart(document.getElementById('donuty'));
	// var chart = new google.visualization.PieChart(document.getElementById('donuty'));
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
