// // Sort the cities in decreasing order by city growth
// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// // Select only the top five cities for the plot
// var topFiveCities = sortedCities.slice(0,5);

// // Create a separate array of the top five city names, as well as the top five growth figures
// // Using parseInt() converts the number "strings" ("1234") into intergers
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// Skill Drill: Create bar chart of the seven largest cities by population
var sortedCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();

var topSevenCities = sortedCities.slice(0,7);

var topSevenNames = topSevenCities.map(city => city.City);
var topSevenPops = topSevenCities.map(city => parseInt(city.population));

var trace = {
    x: topSevenNames,
    y: topSevenPops,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Cities by Population",
    xaxis: {title: "City" },
    yaxis: {title: "Population, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout)