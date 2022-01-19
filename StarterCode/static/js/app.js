/**
 * Here I populated data into html table
 */
var tbody = d3.select("tbody");

data.forEach(function(sightings){
    var row = tbody.append("tr")
    Object.entries(sightings).forEach(function([key, value]) {
        var cell = row.append("td")
        cell.text(value);
    });
});

/**
 * Table Filter
 */
var sightdate = data; // from data.js
var button = d3.select("#filter-btn"); // Grab the "Filter" button
var form = d3.select("#form"); // Select the form


button.on("click", function(){
    // Prevent the page form refreshing 
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = sightdate.filter(sightdate => sightdate.datetime === inputValue);
    console.log(filteredData)
    console.log("What up Scoop")

    var tbody = d3.select("tbody");
    tbody.text("");

    filteredData.forEach(function(sightings){
        var row = tbody.append("tr")
        Object.entries(sightings).forEach(function([key, value]) {
            var cell = row.append("td")
            cell.text(value);
        });
    });
});
