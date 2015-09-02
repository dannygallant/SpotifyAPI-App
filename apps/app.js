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

function sideNav() {
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }  
}

$(window).resize(function() {
  sideNav();
});

$(".resetSearch").click(function() {
    location.reload();
});


var spotifyData;

function getRequest(searchTerm) {
 
  url = 'https://api.spotify.com/v1/search';

  $.ajax({
    url: url,
    data: {
      q: 'artist:' +searchTerm,
      type: 'artist'
    },
    dataType: "json",
    type: "GET",
    }).done(function(data){
    showResults(data.artists.items);
    }).fail(function() {
        alert("There was an error obtaining your search. Please check spelling and try againg.");
    })



}  // end of getResults

function showResults(results) {
	var html = "";

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
        $('.header').css('display', 'inline');
        $('#top-tracks-results').append(trackInfo);
    }

    }).fail(function() {
      alert('There was an error obtaining this artist"s tracks. Please try again');
    });
}

function showTopTracks(track) {
  console.log("ShowTop", track);
  
  var result = $('.templates .topTracks').clone();

  var song = result.find('.song');
  song.text(track.name);

  var album = result.find('.album');
  album.text(track.album.name);

  var preview = result.find('.preview a')
  .attr('href', track.preview_url)
    .text("Preview");

  var fullsong = result.find('.fullSong a')
  .attr('href', track.external_urls.spotify)
    .text("Song");

  return result;

};   // end of showTopTracks






