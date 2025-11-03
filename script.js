function insert_Row() {
    //Write your code here
  var table = document.getElementById("sampleTable");
    
    // Step 2: Insert a new row at the top (index 0)
    var newRow = table.insertRow(0);
    
    // Step 3: Create two new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    // Step 4: Set the cell values
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
}
