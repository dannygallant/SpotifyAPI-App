$(document).ready(function(){

$("#search-term").submit(function(event) {
	event.preventDefault();
	var searchTerm = $("#query").val();
	getRequest(searchTerm); 
  	});

$("#search-term").on("click", "#searchButton", function(event) {
  event.preventDefault();
  var searchTerm = $("#query").val();
  getRequest(searchTerm); 
    });

});  // ==== Opening 'ready' function ====

// function getRequest(searchTerm) {
// 	$.getJSON('http://www.omdbapi.com/?s=' +searchTerm+ '&r=json', function(data) {
//     showResults(data.Search);  
//  });
// };

function getRequest(searchTerm){
  var params = {
    q: 'artist:'+searchTerm,
    type: 'artist'
  };
  url = 'https://api.spotify.com/v1/search';

  $.getJSON(url, params, function(data){
    console.log(data);
    showResults(data.artists.items);
  });
}

function showResults(results) {
	var html = "";
	$.each(results, function(index,value){
		html += '<p>' + value.id + '</p>';
    	console.log(value.id);
      getTopTracks(value.id);
});
	$("#search-results").html(html);

};

function getTopTracks(artistId) {
  var url = 'https://api.spotify.com/v1/artists/' +artistId+ '/top-tracks?country=SE'
  // var params = {
  //   id: ,
  //   type: 'artist'
  // };

  $.getJSON(url, function(data){
    console.log(data);
    // showResults(data.artists.items);
  });
}




