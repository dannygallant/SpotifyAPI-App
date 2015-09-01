'<a class="Tops" data-ID="'  + value.id + '">' + value.name + '</a>'


$(function() {
    function getTopTracks(artistId) {
  var url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';

  $.getJSON(url, function(data){
    console.log(data);
  });
}

    $('a[class=Tops]').click(function(e) {
        key = $(this).data('ID'); // gets data-caption attribute value
        getTopTracks(key);
        fadeInCommon(e,this);
        });
    });


// =====================  APP.JS Backup  ==  Commented out sections were test parts that I couldn't get working  ===========

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

// function getRequest(searchTerm) {
//  $.getJSON('http://www.omdbapi.com/?s=' +searchTerm+ '&r=json', function(data) {
//     showResults(data.Search);  
//  });
// };

// ===== Store artist IDs in an array perhaps? =====
var spotifyData;

function getRequest(searchTerm){
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
}

function showResults(results) {
    var html = "";
  // var temp;

  $.each(results, function(index,value){

    // temp = '<a href="#" id="topTracksButton" class="button tiny postfix" value=' + value.id + '>' Top Tracks '</a>';
      var tempo = value.id;
      html += '<a class="Tops" data-num=' + value.id + '>' + value.name + '</a><br>';
      console.log(value.name);
      console.log(value.id);
      // console.log(tempo);
      $("#search-results").html(html);



$(function() {
  function getTopTracks(artistId) {
    console.log(artistId);
  // var topList = $('a').data(ID);  
  var url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';

  $.getJSON(url, function(data){
    console.log(data);
  });
}

    $('a[class=Tops]').click(function(e) {
        key = $(this).data('num'); // gets data-caption attribute value
        getTopTracks(key);
        console.log(key)
        });
    });




    // $.each(results, function(index,value){
    //  html += '<a onclick="getTopTracks(value.id);" href="#">' + value.name + '</a><br>';
 //      console.log(value.id);
 //      $("#search-results").html(html);

    // Getting this error linking this way: Uncaught ReferenceError: value is not definedonclick @ index.html:1
    // html += '<a href="#" onclick="getTopTracks(value.id);">' + value.name + '</a><br>';


// only the first link works =====
 //  html += '<a id="artistLink">' + value.name + '</a><br>'; 
 //    // $('#artistInfo').click(getTopTracks(value.id));
 //    console.log(value.id);
 //      // getTopTracks(value.id);
    // $("#search-results").html(html);
  // });

// $("#artistLink").click(function(event) {
//     event.preventDefault();
//     alert("It works!");
//     getTopTracks(value.id);
//     // getTopTracks(value.id);
// });

  });

};




// This function gets the top tracks for the artist (by id) and populates results to the scree.

// function getTopTracks(artistId) {
//   var url = 'https://api.spotify.com/v1/artists/' + artistId + '/top-tracks?country=US';

//   $.getJSON(url, function(data){
//     console.log(data);

//     // showResults(data.artists.items);
//   });
// }




innerHTML: "↵ <dt>Song</dt>↵ <dd class="song">Ain't No Sunshine featuring Tracy Chapman</dd>↵ <dt>Album</dt>↵ <dd class="album">[object Object]</dd>↵ <dt>Song Preview</dt>↵ <dd class="preview"><a href="https://p.scdn.co/mp3-preview/00c455399ba165183a5512a2fda91f0530551d45">Song Preview</a></dd>↵ <dt>Full Song (requires Spotify login)</dt>↵ <dd class="fullSong"><a href=""></a></dd>↵ "
innerText: "↵ Song↵ Ain't No Sunshine featuring Tracy Chapman↵ Album↵ [object Object]↵ Song Preview↵ Song Preview↵ Full Song (requires Spotify login)↵ ↵ "










