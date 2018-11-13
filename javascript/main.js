<<<<<<< HEAD
var cityList = ["seattle", "chicago", "boston"]

//Yelp Client ID: XIQEXfUSa0ncbMMRPO4L0w
//Yelp API Key: 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ cityList[0] + "&categories=parks,All" 
            //^^^ Pretend this portion of the myurl is called apiURL ^^^
$.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
},
   method: 'GET',
   dataType: 'json',
   success: function(response){
       console.log(response)
       console.log(response.businesses[0].name);
       console.log(response.businesses[0].image_url);
       console.log(response.businesses[0].display_phone);
       console.log(response.businesses[0].rating);
       console.log(response.businesses[0].location.address1);
       console.log(response.businesses[0].location.city);
       console.log(response.businesses[0].location.state);
       console.log(response.businesses[0].location.zip_code);
       console.log(response.businesses[0].url);
    }
    
     });  
//Meals 
    //Breakfast:
        // apiURL + cityList[i] + "&categories=breakfast_brunch,All" 
    //Lunch, Dinner:
        // apiURL + cityList[i] + "&categories=restaurants,All"  
//Friday Night Activity:
    //The city's local bookstores, record stores, videogame, movie, and video stores, et.
        // apiURL + cityList[i] + "&categories=media,All" 
//Saturday Morning Attraction:
     //favorite local attractions: 
        //apiURL + cityList[i] + "&categories=localflavor,All" 
//Saturday Main Attraction: 
     //support PARKS N REC YALL
        //apiURL + cityList[i] + "&categories=parks,All" 
//Saturday Nightlife: 
     // more favorite local attractions
        //apiURL + cityList[i] + "&categories=localflavor,All" 
//Sunday Morning Attraction: 
     //continued local flavor attractions
        //apiURL + cityList[i] + "&categories=localflavor,All" 
=======
//Need to go through array of cities. Killeen is in this list :P
var cityArray = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown",
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


var isClear = false;
var randomCity;

var friday = "";
var saturday = "";
var sunday = "";

var mainAct;


function getMainAct() {
    //     //yelp calls go here for the main tourist attraction.
    //     //Print to #main-attraction-name  #main-attraction-summary
    var cityList = "seattle";
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityList + "&categories=parks,All"

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response)
            console.log(response.businesses[0].name);
            console.log(response.businesses[0].image_url);
            console.log(response.businesses[0].rating);
            console.log(response.businesses[0].url);

            mainAct = response.businesses[0];
            $("#main-attraction-name").text(mainAct.name);
            $("#main-attraction-rating").text("Rating: " + mainAct.rating);
            var image = 
        };

    });
>>>>>>> middleManBranch

}
getMainAct();



function getWeatherInfo() {
    //print out projected high's and lows or saturday
}

function getDates() {
    //code for finding the calendar dates of nearest weekend goes here.
    //Print to #fri-date #sat-date #sun-date
    //WE STILL NEED SATURDAY'S DATE!
    var today = +moment().format("d")
    var daysUntilFriday = 0;
    if (today === 5) {
        daysUntilFriday = 0;
    } else if (today === 6) {
        daysUntilFriday = 6
    } else {
        daysUntilFriday = 5 - today;
    }
    var daysUntilFollowingSunday = daysUntilFriday + 2;
    var daysUntilFollowingSaturday = daysUntilFriday + 1;
    var startDate = moment().add(daysUntilFriday, "d");
    var middleDate = moment().add(daysUntilFollowingSaturday, "d");
    var endDate = moment().add(daysUntilFollowingSunday, "d");
    friday = startDate.format("MMMM Do YYYY")
    $("#fri-date").text(friday);
    saturday = middleDate.format("MMMM Do YYYY");
    $("#sat-date").text(saturday);
    sunday = endDate.format("MMMM Do YYYY");
    $("#sun-date").text(sunday);
};
getDates();

function getFood() {
    //code for calling API and printing results to correct p tags goes here

}

function getBreakfast() {
        //Breakfast:
        // apiURL + cityList + "&categories=breakfast_brunch,All" 
        
}

function getActivity() {
    //code for calling API and printing results to correct p tags goes here
}

function getItinerary() {
    // getFood();
    // $("#fri-dinner").text(response[0].Restaurant);
    // getActivity();
    // $("#fri-act").text(response[0].Activity);
    //ETC. Would need to actually use correct format for response.

    //Can organize code differently, but still needs to be in functions.
}


$("#submit-btn").on('click', function () {
    do {
        getCity();
    } while (isClear === false);
    $("#city-name").text(randomCity);
    getMainAct();
    getWeatherInfo();
})

$("#reset-city").on('click', function () {
    do {
        getCity();
    } while (isClear === false);
    $("#city-name").text(randomCity);
})

$("#get-itinerary-btn").on('click', function () {
    getItinerary();
});

$(".btn-reroll-food").on('click', function () {
    getFood();
});

function soSorry() {
    $("#trip-information").empty();
    var sorryMessage = $("<p>");
    sorryMessage.text("We're sorry! Weather information is not reliable this far out. Please check in with us again on Tuesday. Thank you!")
    sorryMessage.addClass("sorry-message");
    $("#trip-information").append(sorryMessage);
}


// console.log(queryURL)
// var cityInterval = setInterval(rerollCity, 500);
// // function rerollCity() {
// //     if (isClear === false) {
// //         randomCity = Math.floor(Math.random(cityArray.length) * 100);
// //         cityURL = cityArray[randomCity] + ",3166-2"
// //         queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
// //             "q=" + cityURL +
// //             "&units=imperial" +
// //             "&appid=" + APIKey;
// //         $.ajax({
// //             url: queryURL,
// //             method: "GET"
// //         })
// //             .then(function (response) {
// //                 if (response.weather[0].description === "clear sky") {
// //                     isClear = true;
// //                     clearInterval(cityInterval);
// //                     console.log("rerollcity function: clear sky")
// //                 }
// //                 else {
// //                     console.log("rerollcity function: " + response.weather[0].description);
// //                     clearInterval(cityInterval)
// //                 }
// //             })
// //     }
