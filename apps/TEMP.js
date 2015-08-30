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