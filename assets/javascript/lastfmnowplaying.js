var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=devan_4496&api_key=8854bfdfb4a2aa61024bf5ff11d607f2",
  additional: "&format=json&limit=1"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted = recentTrack.name;
      $("a#tracktitle")
        .html(formatted)
        .attr("href", recentTrack.url)
        .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
        .attr("target", "_blank");

      var artistFormatted =
        recentTrack.artist["#text"];
      $("a#trackartist")
        .html(artistFormatted)
        .attr("title", "Artist : " + recentTrack.artist["#text"]);
      $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
    },
    error: function(resp) {
      $("a#tracktitle").html(
        "<img src='https://i.imgur.com/EgWjJry.png'>" + "Silence!"
      );
      $("img#trackart").attr("src", "https://devan.cool/assets/images/favicon.png");
      var artistFormatted =
        "<img src='https://devan.cool/assets/images/favicon.png'>yes i stole this from mehfs site";
      $("a#trackartist")
        .html(artistFormatted)
        .attr("href", "www.devan.cool/");
    }
  });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
