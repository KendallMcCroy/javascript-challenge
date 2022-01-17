// from data.js
var tableData = data;


// Using the UFO dataset provided in the form of an array of JavaScript 
// objects, write code that appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

// Grab the "Filter Table" button
var filterTableBtn = d3.select("#filter-btn")

// Select tbody
var tbody = d3.select("tbody");

//Initialize uerDate variable
var queryDate = 'tbd';

// Handle click for the "Filter Table" Button
filterTableBtn.on("click", function() {

    // Prevent the page form refreshing 
    d3.event.preventDefault();

//     // Select input element and get HTML node
//     var inputField = d3.select("#datetime");

//     // Get the value property of the input element
//     var queryDate = inputField.property('value');


//     //Create filtered Data from data table
//     var filtered_Data = tableData.filter(function (sighting) {
//         return sighting.datetime === queryDate;
//     })

// // Clear the data in tbody
// tbody.text('');

//     filtered_Data.forEach(record => {


//         var row = tbody.aqqend('tr');

//         Object.entries(record).forEach(([key, value]) => {

//             row.append('td').text(value);

//         });

//     });

// });




// YOUR CODE HERE!
