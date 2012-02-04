/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
  var s = new Spotter("twitter.search",{q:"terroris", lang:"en"});

  s.register(function(tweets) {
    for(var t in tweets)  {
      var txt = tweets[t].text;
    //2. Add profile images (tweet.profile_image_url)
      var img = tweets[t].profile_image_url;
    //3. Make the tweets occur so the most recent are at the top
      $("#tweets").prepend("<p><img src='"+img+"'/>"+txt+"</p>");
    }
  });

  s.start();

    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();
