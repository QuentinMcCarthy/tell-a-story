function loadData(){
	$.ajax({
		type: "GET",
		url: "data/surveyData.json",
		dataType: "json",
		success: function(data){
			console.log(data);


		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function createVisualizations(){

}

$(document).ready(function(){
	loadData();
});
