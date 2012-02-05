/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
  var s = new Spotter("twitter.search",{q:"terrorism", lang:"en"});

  s.register(function(tweets) {
    var color = 0;
    var count = 1;
    for(var t in tweets)  {
      var txt = tweets[t].text;
    //2. Add profile images (tweet.profile_image_url)
      var img = tweets[t].profile_image_url;
    //5. Alternate the colors or the background of the tweets
      if(color===0) {
        color = 1;
        var style = "tweet0";
      } else {
        color = 0;
        var style = "tweet1";
      }
      var tweet = $("<p id='"+count+"' class='"+style+"'><img src='"+img+"'/>"+txt+"</p>");
      tweet.hide();
    //3. Make the tweets occur so the most recent are at the top
      $("#tweets").prepend(tweet);
    //4. Make the tweets slide down
      tweet.fadeIn().slideDown();
      if(count>10){
        var remove = count-10;
        $("#"+remove).slideDown().fadeOut();
      }
      count = count + 1;
    }
  });

  s.start();

    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();
