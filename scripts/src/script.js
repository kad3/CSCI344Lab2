/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
  //var s = new Spotter("twitter.search",{q:"terrorism", lang:"en"});
  var s = new Spotter("twitter.search",
                      {q:"terrorism", lang:"en", period:120},
                      {buffer:true,bufferTimeout:1000});
  var tweets = new Array();
  var count = 0;
  var color = 0;

  s.register(function(tweets) {
    var txt = tweets.text;
    //2. Add profile images (tweet.profile_image_url)
    var img = tweets.profile_image_url;
    //5. Alternate the colors or the background of the tweets
    if(color%2===0) {
      var style = "tweet0";
    } else {
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
    count++;
    color++;
  });

  s.start();

    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();
