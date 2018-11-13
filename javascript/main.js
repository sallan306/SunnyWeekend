
  var cityArray = [ "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", 
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

//weather API key and google maps variables
var weatherAPIKEY = "aiWmhP4Z6BLSJr0dqd2BGsGg6vqzh4yt",
googleService = "",

//UI and user input variables
userAddress = '',
userEmail = '',
userBudget = 0,
petFriendly = false,

//weatherAPI variables
isSunny = false,
originCity = "Austin",
sunnyCity = "Boston",
cityID = '349818';

//moment variables
todaysDayOfWeek = moment().isoWeekday(),
nextFriday = "",
daysToFriday = 0;


findNextFriday();  
// var APIInterval = setInterval(callAjax,200)

// function callAjax() {
//     // for (var i=0;i<10;i++{)

//         if (isSunny === true) {
//             console.log("all done, sunny found")
//             clearInterval(APIInterval)
//         }
//         else {
//             yahooAPI();
//         }
//     // }
// }
yahooAPI()


function initMap() {
    GoogleService = new google.maps.DistanceMatrixService();

}

function findNextFriday() {
    var nextDayOfWeek = todaysDayOfWeek;
    for (var i=1;i<8;i++) {
            
            if (nextDayOfWeek === 5) {
                nextFriday = moment().add(i,"days").format("MM/DD/YYYY");
                //console.log("days to friday: "+daysToFriday)//----------change this line to $("#whatever your container is").text(nextFriday) to return fridays date.----------------//
            }
            else {
                nextDayOfWeek = moment().add(i,"days").isoWeekday();
                daysToFriday +=1;
            }
        }
}


function yahooAPI() {
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
                        cache:false
                        success: function() { 
                            //console.log("yahoo ajax: Success"); 
                        },
                        error: function() { 
                            console.log('yahoo ajax: Failed!'); 
                        }
                    })
                    .done(function(data) {
                    // console.log(data);

                        var SaturdayWeather = data.query.results.channel.item.forecast[daysToFriday+1].text
                        var SaturdayDate = data.query.results.channel.item.forecast[daysToFriday+1].date
                        var SundayWeather = data.query.results.channel.item.forecast[daysToFriday+2].text
                        var SundayDate = data.query.results.channel.item.forecast[daysToFriday+2].date

                        //console.log(" Saturday: "+SaturdayWeather+
                        //            " Sunday: " +SundayWeather)
                        //console.log("current weather: "+ currentWeather)
                        if (SaturdayWeather.includes("Sunny") === true && SundayWeather.includes("Sunny") === true) {
                            //onsole.log(data.query.results.channel)

                            randomCity = data.query.results.channel.item.title
                            randomCity = randomCity.replace("Conditions for ","")
                            randomCity = randomCity.slice(0,randomCity.indexOf(", US at"))

                            isSunny = true;
                            sunnyCity = randomCity;
                            console.log("Weather for "+sunnyCity+" looks to be "+ SaturdayWeather + " on Saturday, "+SaturdayDate)
                            console.log("Weather for "+sunnyCity+" looks to be "+ SundayWeather + " on Sunday, "+SundayDate)
                        }
                        else {
                            //console.log("not sunny all weekend");              
                            cityArray.pop(randomCityIndex);
                            getDistance(originCity,sunnyCity);
                            console.log("NOTSUNNY Weather for "+randomCity+" looks to be "+ SaturdayWeather + " on Saturday, "+SaturdayDate)
                            console.log("NOTSUNNY Weather for "+randomCity+" looks to be "+ SundayWeather + " on Sunday, "+SundayDate)
                            yahooAPI();
                            

                        }
                    })
                }
}

function getDistance(start,end){
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
       // console.log(response)
       // console.log(response.rows[0].elements[0].distance["text"]);
    }
}

$("#submit-btn").on("click", function() {
    userAddress = $(".user-location").val().trim();
    userEmail = $(".user-email").val().trim();
    petFriendly = $(".pet-friendly-btn").val();
    
     if ($(".dollar-1").val() === true) {
         userBudget = "$";
     }
     else if ($(".dollar-2").val() === true) {
         userBudget = "$$";
     }
     else if ($(".dollar-3").val() === true) {
         userBudget = "$$$";
     }
     else if ($(".dollar-4").val() === true) {
         userBudget = "$$$$";
     }
 })
