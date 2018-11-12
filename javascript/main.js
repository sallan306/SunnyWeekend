//Yelp Client ID: XIQEXfUSa0ncbMMRPO4L0w
//Yelp API Key: 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

$.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
},
   method: 'GET',
   dataType: 'json',
success: function(data){
//        // Grab the results from the API JSON return
       var totalresults = data.total;
       console.log(totalresults)
//        // If our results are greater than 0, continue      if (totalresults > 0){
//            // Display a header on the page with the number of results
        
// //            // Itirate through the JSON array of 'businesses' which was returned by the API
//             $.each(data.businesses, function(i, item) {
//                // Store each business's object in a variable
//                var id = item.id;
//                //var alias = item.alias;
//                var phone = item.display_phone;
//                var image = item.image_url;
//                var name = item.name;
//                var rating = item.rating;
//                var reviewcount = item.review_count;
//                var address = item.location.address1;
//                var city = item.location.city;
//                var state = item.location.state;
//                var zipcode = item.location.zip_code;
//                // Append our result into our page
//                $('#attraction-card').append('<div id="#attraction-card"' + id + '<img src="' + image + '" style="width:75px;height:50px;"> <br>We found <b>' + name + '</b> + Business ID: ' + id + ' <br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
//          })
//          } 
//          else {
//            // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
//           $('#main-attraction-name').append('<h5>We discovered no results!</h5>');
//        }
//    })
// };

  var cityArray = [ "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", 
  "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", 
  "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", 
  "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", 
  "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", 
  "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", 
  "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", 
  "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", 
  "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", 
  "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", 
  "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", 
  "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", 
  "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", 
  "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", 
  "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", 
  "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", 
  "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", 
  "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", 
  "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", 
  "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", 
  "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", 
  "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", 
  "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", 
  "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", 
  "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", 
  "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", 
  "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", 
  "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", 
  "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", 
  "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", 
  "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", 
  "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", 
  "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", 
  "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", 
  "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", 
  "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", 
  "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", 
  "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", 
  "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", 
  "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", 
  "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", 
  "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", 
  "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", 
  "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", 
  "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", 
  "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", 
  "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", 
  "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", 
  "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", 
  "York", "Youngstown"];

var defaultCityObj = {
    "cod":"200",
    "message":0.0032,
    "city":{
        "id":1851632,"name":"Shuzenji",
    "coord":{"lon":138.933334,"lat":34.966671},
    "country":"JP"},
    "cnt":10,
    "list":[
        {
            "dt":1406080800,
            "temp":{
                "day":297.77,
                "min":293.52,
                "max":297.77,
                "night":293.52,
                "eve":297.77,
                "morn":297.77
            },
            "pressure":925.04,
            "humidity":76,
            "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
        }
    ]
}


var APIKey = "7ad754d749d824ab409299daca9bebea";
var randomCity = Math.floor(Math.random(cityArray.length)*100);
var cityURL = cityArray[randomCity]+",3166-2"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q="+ cityURL +
  "&units=imperial" + 
  "&appid=" + APIKey;
var isClear = false;
console.log(queryURL)
var cityInterval = setInterval(rerollCity, 500);

$.ajax({
  url: queryURL,
  method: "GET"
})
  
  .then(function(response) {

    console.log(response)
    if (response.weather[0].description === "clear sky") {
        
        isClear = true;
        
    }
    else {
        console.log(response.weather[0].description)
    }

}).catch(function(err) {
    // if(err.status === 420) {
    //  use the generic Austin obj you made above as response.weather[0]
    // }
});



function rerollCity() {
    if (isClear === false) {

        randomCity = Math.floor(Math.random(cityArray.length)*100);
        cityURL = cityArray[randomCity]+",3166-2"
        queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q="+ cityURL +
        "&units=imperial" + 
        "&appid=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            if (response.weather[0].description === "clear sky") {
                isClear = true;
                clearInterval(cityInterval);
                console.log("rerollcity function: clear sky")
            }
            else {
                console.log("rerollcity function: "+response.weather[0].description);
                clearInterval(cityInterval)
            }
        })
    }
}

