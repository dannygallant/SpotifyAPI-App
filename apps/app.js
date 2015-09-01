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

$("#serch-results").on("click", "#topTracksButton", function(event) {
  event.preventDefault();
  var identifier = $("#topTracksButton").val();
  getTopTracks(identifier);
    });

});  // ==== Opening 'ready' function ====


var spotifyData;

function getRequest(searchTerm) {
  var params = {
    q: 'artist:' +searchTerm,
    type: 'artist'
  };
  url = 'https://api.spotify.com/v1/search';

  $.getJSON(url, params, function(data){
    spotifyData = data;  // May not use this variable
    console.log(spotifyData);
    showResults(data.artists.items);
  });
}  // end of getResults

function showResults(results) {
	var html = "";
  // var temp;

  $.each(results, function(index,value){
      // var tempo = value.id;
      html += '<a class="Tops" data-num=' + value.id + '>' + value.name + '</a><br>';
      console.log(value.name);
      console.log(value.id);
      // console.log(tempo);
      $("#search-results").html(html);
  });
      // =====  This calls the getTopTracks function when a link is clicked, passing it the artist id (value.id) that is held in the link.  =====
      // =====  Ie. cannot be with other listeners outside of a function.  ===== 

      $('a[class=Tops]').click(function(e) {
        key = $(this).data('num'); // gets data-caption attribute value
        $("#search-results").empty();
        getTopTracks(key);
        });

}   // end of showResults


// $(function() {
  function getTopTracks(artistId) {
    console.log(artistId);
  // var topList = $('a').data(ID);  
  var url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';

  $.ajax({
    url: url,
    dataType: "json",
    type: "GET",
    }).done(function(data){
      console.log('AJAX:', data);
    
      for (var i = 0; i < data.tracks.length; i++) {
      var trackInfo = showTopTracks(data.tracks[i]);
      console.log('TrackInfo', trackInfo);
        $('#top-tracks-results').append(trackInfo);
    }

      
    }).fail(function() {
      console.log('Error!');
    });
}


//  ====  THIS WORKS ! ======
  // $.getJSON(url, function(data){
    // console.log(data);
    // showTopTracks(data);
//  ====  THIS WORKS ! ======

  // for (var i = 0; i < data.tracks.length; i++) {

  //       var trackInfo = showTopTracks(data.tracks[i]);
  //       // $('.results').append(trackInfo);
  //   }

  // $.each(data.tracks, function(i, item) {
  //       var trackInfo = showTopTracks(item);
  //       $('.results').append(trackInfo);



  // });
// });    ====  PUT THIS BACK ??  ==
//    };  // end of getTopTracks
 // });   // end of unamed function



function showTopTracks(track) {
  console.log("ShowTop", track);
  // console.log(track.tracks.length);

  // for (var i = 0; i < track.tracks.length; i++) {

        // var trackInfo = showTopTracks(data.tracks[i]);
        // // $('.results').append(trackInfo);
    

  var result = $('.templates .topTracks').clone();

  var song = result.find('.song');
  song.text(track.name);

  var album = result.find('.album');
  album.text(track.album.name);

  var preview = result.find('.preview a')
  .attr('href', track.preview_url)
    .text("Song Preview");

  var fullsong = result.find('.fullSong a')
  .attr('href', track.external_urls.spotify)
    .text("Full song");

  return result;
  // $('.top-tracks-results').html(result);

// }
// console.log(song);

// return result;
};   // end of showTopTracks





