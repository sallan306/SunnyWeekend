var cityConstant = [ "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", 
"Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", 
"Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", 
"Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", 
"Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham, AL", "Bloomington", 
"Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", 
"Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", 
"Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", 
"Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", 
"Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", 
"College Station", "Colorado Springs", "Columbia", "Columbus, OH", "Concord", "Coral Springs", 
"Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", 
"Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", 
"Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elk Grove", 
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

var cityArray = [];

//weather API key and google maps variables
var weatherAPIKEY = "aiWmhP4Z6BLSJr0dqd2BGsGg6vqzh4yt",
    googleService = "",

//UI and user input variables
    userAddress = '',
    userEmail = '',
    userBudget = 0,
    petFriendly = false,

//weatherAPI + Google variables
    isSunny = false,
    originCity = "Austin",
    sunnyCity = "Boston",
    numberOfMiles = '',
    sunnyHighs = '',
    sunnyLows = '',

//moment variables
    todaysDayOfWeek = moment().isoWeekday(),
    todaysDate = moment().format("YYYYMMDD"),
    localFireDate = '';
    nextFriday = "",
    daysToFriday = 0;

// Initialize Firebase, declare reference variables
var config = {
    apiKey: "AIzaSyBwb30IhVp9K6us6nTBhl7H6k_Sj1fyFBY",
    authDomain: "sunnyweekend-3b395.firebaseapp.com",
    databaseURL: "https://sunnyweekend-3b395.firebaseio.com",
    projectId: "sunnyweekend-3b395",
    storageBucket: "sunnyweekend-3b395.appspot.com",
    messagingSenderId: "196105865559"
};

firebase.initializeApp(config);
var database = firebase.database(),
    timeRef = firebase.database().ref("time/"),
    cityRef = firebase.database().ref("city/");

//getDates variables
var friday = "",
    saturday = "",
    sunday = "";

//yelp variables
    mainAct = "";
    
//Initialize googleMaps Service
function initMap() {

    GoogleService = new google.maps.DistanceMatrixService();

}

// --------------------------------------------------------------called functions-------------------------------------------------------//

getDates();
getFire();

//---------------------------------------------------------------declared functions----------------------------------------------------//
//compare today's date to the firebase date to see if it is a day after

function getFire() {
    timeRef.on('value',function(snapshot){
        localFireDate = snapshot.val().fireDate
        compareDates();
    })  
}

function compareDates() {
    if (todaysDate === localFireDate) {
        cityRef.on('value',function(snapshot){
            cityArray = snapshot.val().fireDate
        })
    }
    else {
        cityArray = cityConstant;
        console.log("cities reset")
    }
}

//calls the yahoo weather API to run a loop to find all the sunny cities in the US from our list. Checks to see if both Saturday and Sunday is sunny.

function getMainAct() {
    //     //yelp calls go here for the main tourist attraction.
    //     //Print to #main-attraction-name  #main-attraction-summary
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + sunnyCity + "&categories=parks,All"

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            //console.log(response)
            console.log(response.businesses[0].name);
            console.log(response.businesses[0].image_url);
            console.log(response.businesses[0].rating);
            console.log(response.businesses[0].url);

            mainAct = response.businesses[0];
            $("#main-attraction-name").text(mainAct.name);
            $("#main-attraction-rating").text("Rating: " + mainAct.rating);
            $("#attraction-link").attr("href", mainAct.url);
            $("#main-attraction-image").attr("src", mainAct.image_url);

            $("#sat-aft-act").html("<a href = ' " + mainAct.url + " '>" + mainAct.name + "</a>");
            $("#sat-aft-act-sum").html("<br> " + mainAct.location.address1 + ", " + mainAct.location.city + ", " + mainAct.location.state + ", " + mainAct.location.zip_code + " <br> Rating: " + mainAct.rating + "/5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price: " + mainAct.price+ "<br> " + mainAct.display_phone );
        }
    });
}
    
function findSunnyCity() {
    //uses yahoo maps API to spit out the closest sunny city, remove a cloudy city from the array, and update firebase with the new array as well.
    var randomCityIndex = Math.floor(Math.random(cityArray.length)*100);
    var randomCity = cityArray[randomCityIndex]
    var yahooURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+randomCity+"%2C%20usa%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            
    if (isSunny === true) {
        console.log("all done, sunny found")
        }
        else {
                    $.ajax({
                        url: yahooURL,
                        method: "GET",
                        type: "PUT",
                        dataType: 'jsonp',
                        async: false,
                        cache:false,
                        success: function() { 
                            console.log("yahoo ajax: Success"); 
                        },
                        error: function() { 
                            console.log('yahoo ajax: Failed!'); 
                        }
                    })
                    .done(function(data) {
                        console.log(data)
                        console.log(cityArray.length)
                        var SaturdayWeather = data.query.results.channel.item.forecast[daysToFriday+1].text
                        var SaturdayDate = data.query.results.channel.item.forecast[daysToFriday+1].date
                        var SundayWeather = data.query.results.channel.item.forecast[daysToFriday+2].text
                        var SundayDate = data.query.results.channel.item.forecast[daysToFriday+2].date
                        sunnyHighs = data.query.results.channel.item.forecast[daysToFriday+2].text
                        sunnyLows =  data.query.results.channel.item.forecast[daysToFriday+2].text

                        if (SaturdayWeather.includes("Sunny") === true && SundayWeather.includes("Sunny") === true) {
                            //onsole.log(data.query.results.channel)

                            randomCity = data.query.results.channel.item.title
                            randomCity = randomCity.replace("Conditions for ","")
                            randomCity = randomCity.slice(0,randomCity.indexOf(", US at"))
                            isSunny = true;
                            sunnyCity = randomCity;
                            getDistance(originCity,sunnyCity);
                            
                            console.log("Weather for "+sunnyCity+" looks to be "+ SaturdayWeather + " on Saturday, "+SaturdayDate)
                            console.log("Weather for "+sunnyCity+" looks to be "+ SundayWeather + " on Sunday, "+SundayDate)
                        }
                        else {
                            //console.log("not sunny all weekend");              
                            cityArray.pop(randomCityIndex);
                            cityRef.set({
                                fireCities: cityArray
                              });
                              console.log("database updated");
                            console.log("NOTSUNNY Weather for "+randomCity+" looks to be "+ SaturdayWeather + " on Saturday, "+SaturdayDate)
                            console.log("NOTSUNNY Weather for "+randomCity+" looks to be "+ SundayWeather + " on Sunday, "+SundayDate)
                            findSunnyCity();
                        }
                    })
                }
}



function getDistance(start,end){
    // google Maps function that takes two locations and checks the distance between them
    GoogleService.getDistanceMatrix(
        {
            origins: [start],
            destinations: [end],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
          }, callback);

    function callback(response, status) {
       numberOfMiles = response.rows[0].elements[0].distance["text"];
       console.log(response.rows[0].elements[0].distance["text"])
    }
}



function getWeatherInfo() {
    //print out projected high's and lows for saturday
}

function getDates() {
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

$("#get-itinerary-btn").on("click", function(event){ //prints out entire itinerary 

    //main activity needs to be printed out on main attraction on saturday 
    getFood("fri-dinner-sum");
    getFood("sat-dinner-sum");
    getBrunch("sat-brunch-sum");
    getBrunch("sat-lun-sum");
    getBrunch("sun-brunch-sum");
    getAttraction("fri-nightlife-sum");
    getAttraction("sat-mor-act-sum");
    getAttraction("sat-nightlife-sum");
    getAttraction("sun-act-sum");

});


function getFood(id) {
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ sunnyCity + "&categories=restaurants,All" 
                    //^^^ Pretend this portion of the myurl is called apiURL ^^^
        $.ajax({
        url: myurl,
        headers: {
            'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function(response){
            var emptyArray = [];
            for(var i = 0; i < response.businesses.length; i++){
                emptyArray.push(response.businesses[i]);
            }//push 20 results into array 
            var rand = emptyArray[Math.floor(Math.random() * emptyArray.length)]; //get random park
            console.log(emptyArray);
            console.log(rand);
            console.log(rand.name); //get name of random park
            $("#" + id).html("<img src = '" + rand.image_url + "' a;t = '" + rand.name + "' class = 'yelp-pic'> <a href = ' " + rand.url + " '>" + rand.name + "</a> <br> " + rand.location.address1 + ", " + rand.location.city + ", " + rand.location.state + ", " + rand.location.zip_code + " <br> Rating: " + rand.rating + "/5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price: " +rand.price+ "<br> " + rand.display_phone );
            console.log(rand.image_url);


        }
    });
}

function getBrunch(id){
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ sunnyCity + "&categories=breakfast_brunch,All" 
                    //^^^ Pretend this portion of the myurl is called apiURL ^^^
        $.ajax({
        url: myurl,
        headers: {
            'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function(response){
            var emptyArray = [];
            for(var i = 0; i < response.businesses.length; i++){
                emptyArray.push(response.businesses[i]);
            }//push 20 results into array 
            var rand = emptyArray[Math.floor(Math.random() * emptyArray.length)]; //get random park
            
            console.log(emptyArray);
            console.log(rand);
            console.log(rand.name); //get name of random park
            $("#" + id).html("<img src = '" + rand.image_url + "' a;t = '" + rand.name + "' class = 'yelp-pic'> <a href = ' " + rand.url + " '>" + rand.name + "</a> <br> " + rand.location.address1 + ", " + rand.location.city + ", " + rand.location.state + ", " + rand.location.zip_code + " <br> Rating: " + rand.rating + "/5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price: " +rand.price+ "<br> " + rand.display_phone );
            console.log(rand.image_url);

        }
    });

}

function getAttraction(id) {
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+ sunnyCity + "&categories=localflavor,All" //find a new category 
    //^^^ Pretend this portion of the myurl is called apiURL ^^^
    $.ajax({
    url: myurl,
    headers: {
    'Authorization':'Bearer 7gSCDmwYjt-iVamuC7Lo2YQ07Zit43lHiOeSj9mklTtTBjGeKMEDBbOP_jTg-pC52g1mXCEOluBGkXbjOYKroPEoxwnm5rnJT2BAR_R5uHHhmUtiDc4RdYab027kW3Yx',
    },
    method: 'GET',
    dataType: 'json',
    success: function(response){
        
        var emptyArray = [];
        for(var i = 0; i < response.businesses.length; i++){
        emptyArray.push(response.businesses[i]);
        }//push 20 results into array 
        var rand = emptyArray[Math.floor(Math.random() * emptyArray.length)]; //get random park

        console.log(emptyArray);
        console.log(rand);
        console.log(rand.name); //get name of random park
        
        $("#" + id).html("<img src = '" + rand.image_url + "' a;t = '" + rand.name + "' class = 'yelp-pic'> <a href = ' " + rand.url + " '>" + rand.name + "</a> <br> " + rand.location.address1 + ", " + rand.location.city + ", " + rand.location.state + ", " + rand.location.zip_code + " <br> Rating: " + rand.rating + "/5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price: " +rand.price+ "<br> " + rand.display_phone );
        console.log(rand.image_url);
        }
    });
        
}

function getActivity() {
    //code for calling API and printing results to correct p tags goes here
}
function getItinerary() {
    getFood("fri-dinner-sum");
    getBrunch("sat-brunch-sum");
    getFood("sat-lun-sum");
    getFood("sat-dinner-sum");
    getFood("sun-brunch-sum");
}
function soSorry() {
    $("#trip-information").empty();
    var sorryMessage = $("<p>");
    sorryMessage.text("We're sorry! Weather information is not reliable this far out. Please check in with us again on Tuesday. Thank you!")
    sorryMessage.addClass("sorry-message");
    $("#trip-information").append(sorryMessage);
}

function errorMessage() {
    $("#trip-information").empty();
    var sorryMessage = $("<p>");
    sorryMessage.text("We're sorry! There's a bug in our system. We will fix it as soon as possible. Thank you for understanding!")
    sorryMessage.addClass("sorry-message");
    $("#trip-information").append(sorryMessage);
}



$("#trip-information").hide();
$("#plan-btn-container").hide();
$("#itinerary-container-friday").hide();
$("#itinerary-container-saturday").hide();
$("#itinerary-container-sunday").hide();


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

//--------------------------------------------------------------------------------buttonclick events-------------------------------------------------------------//

$(document).ready(function() {

    $("#submit-btn").on("click", function(event) {  
        event.preventDefault();
        console.log("button clicked");
        userAddress = $(".user-location").val();
        userEmail = $(".user-email").val();
        cityArray.pop(sunnyCity)
        isSunny = false;
        findSunnyCity();
     })
    
     
    $("#reset-city").on('click', function () {
        console.log("button clicked")
        userAddress = $(".user-location").val();
        userEmail = $(".user-email").val();
        cityArray.pop(sunnyCity)
        isSunny = false;
        findSunnyCity();
    })
    $(".form-group").on('submit', function (event) {
        event.preventDefault()
    })
    
    $("#get-itinerary-btn").on("click", function(event){ //prints out entire itinerary 
        //main activity needs to be printed out on main attraction on saturday 
        getFood("fri-dinner-sum");
        getFood("sat-dinner-sum");
        getBrunch("sat-brunch-sum");
        getBrunch("sat-lun-sum");
        getBrunch("sun-brunch-sum");
        getAttraction("fri-nightlife-sum");
        getAttraction("sat-mor-act-sum");
        getAttraction("sat-aft-act-sum");
        getAttraction("sat-nightlife-sum");
        getAttraction("sun-act-sum");
        console.log("button clicked")
    
    });
    
    $("#btn-reroll-food-1").on("click", function(event){
        getFood("fri-dinner-sum");
    });
    
    $("#btn-reroll-food-4").on("click", function(event){
        getFood("sat-dinner-sum");
    });
    $("#btn-reroll-food-2").on("click", function(event){
        getBrunch("sat-brunch-sum");
    });
    
    $("#btn-reroll-food-3").on("click", function(event){
        getBrunch("sat-lun-sum");
    });
    
    $("#btn-reroll-food-5").on("click", function(event){
        getBrunch("sun-brunch-sum");
    });
    
    $("#btn-reroll-act-1").on("click", function(event){
        getAttraction("fri-nightlife-sum");
    });
    
    $("#btn-reroll-act-2").on("click", function(event){
        getAttraction("sat-mor-act-sum");
    });
    
    $("#btn-reroll-act-3").on("click", function(event){
        getAttraction("sat-aft-act-sum");
    });
    
    $("#btn-reroll-act-4").on("click", function(event){
        getAttraction("sat-nightlife-sum");
    });
    
    $("#btn-reroll-act-5").on("click", function(event){
        getAttraction("sun-act-sum");
    });
    
    


});
