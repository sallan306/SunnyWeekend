//Yelp Client ID: XIQEXfUSa0ncbMMRPO4L0w
//Yelp API Key: 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=boston";

$.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
},
   method: 'GET',
   dataType: 'json',
   success: function(data){
       // Grab the results from the API JSON return
       var totalresults = data.total;
       // If our results are greater than 0, continue
       if (totalresults > 0){
           // Display a header on the page with the number of results
           //$('#main-attraction-name').append(
           // Itirate through the JSON array of 'businesses' which was returned by the API
          // $.each(data.businesses, function(i, item) {
               // Store each business's object in a variable
               var id = item.id;
               //var alias = item.alias;
               var phone = item.display_phone;
               var image = item.image_url;
               var name = item.name;
               var rating = item.rating;
               var reviewcount = item.review_count;
               var address = item.location.address1;
               var city = item.location.city;
               var state = item.location.state;
               var zipcode = item.location.zip_code;
               // Append our result into our page
               $('#attraction-card').append('<div id="#attraction-card"' + id + '<img src="' + image + '" style="width:75px;height:50px;"> <br>We found <b>' + name + '</b> + Business ID: ' + id + ' <br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
         //})
       // } else {
           // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
         //  $('#main-attraction-name').append('<h5>We discovered no results!</h5>');
       }
   })
}};