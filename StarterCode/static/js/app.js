console.log("app.js loaded")

console.log(data);

// from data.js
var tableData = data;


// // Using the UFO dataset provided in the form of an array of JavaScript 
// // objects, write code that appends a table to your web page and then 
// // adds new rows of data for each UFO sighting.

// Grab the "Filter Table" button
var filterTableBtn = d3.select("#filter-btn")

// Get a reference to the table body
var tbody = d3.select("tbody");

// //Initialize queryDate variable
// var queryDate = 'tbd';

// Handle click for the "Filter Table" Button
filterTableBtn.on("click", function () {

    console.log("Hi, KD's BUTTON was clicked");

    console.log(d3.event.target);
});

//     // Prevent the page form refreshing 
//     d3.event.preventDefault();

//     // Select input element and get HTML node
//     var inputField = d3.select("#datetime");

//     // Get the value property of the input element
//     var queryDate = inputField.property('value');


//     //Create filtered Data from data table
//     var filteredData = tableData.filter(function (sighting) {
//         return sighting.datetime === queryDate;
//     });

//     // Clear the data in tbody
//     tbody.text('');

//     // Populate tbody with rows and cells needed for filterdData
//     filteredData.forEach(record => {

//         // Assign new appended row into a variable
//         var row = tbody.aqqend('tr');

//         // Loop throught records
//             Object.entries(record).forEach( ([key, value]) => {

//             // Append a "td" element to the row with the value of each key in the object
//             row.append('td').text(value);

//         });

//     });

// });




// YOUR CODE HERE!
