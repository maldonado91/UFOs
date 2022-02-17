// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {date: "", city: "", state: "", country: "", shape: ""};

// 3. Use this function to update the filters. 
function updateFilters() {
  
    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityinput").property("value");
    let state = d3.select("#stateinput").property("value");
    let country = d3.select("#countryinput").property("value");
    let shape = d3.select("#shapeinput").property("value");
    
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    filters.date = date;
    filters.city = city;
    filters.state = state;
    filters.country = country;
    filters.shape = shape;
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(date, city, state, country, shape);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(date, city, state, country, shape) {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (date) {
      // Apply `filter` to the table 
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
      // Apply `filter` to the table 
      filteredData = filteredData.filter(row => row.city === city);
    }
    if (state) {
      // Apply `filter` to the table 
      filteredData = filteredData.filter(row => row.state === state);
    }
    if (country) {
      // Apply `filter` to the table 
      filteredData = filteredData.filter(row => row.country === country);
    }

    if (shape) {
      // Apply `filter` to the table 
      filteredData = filteredData.filter(row => row.shape === shape);
    }
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#datetime, #cityinput, #stateinput, #countryinput, #shapeinput").on("change", updateFilters);
  
  
  // Build the table when the page loads
  buildTable(tableData);
