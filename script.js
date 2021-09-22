function upload(inputData) {
    var fileUpload = inputData.files[0]
    if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();
        reader.onload = function (e) {
            var table = document.createElement("table");
            var rows = e.target.result.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split("|");
                if (cells.length > 1) {
                    var row = table.insertRow();
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell();
                        cell.innerHTML = cells[j];
                    }
                }
                $('.semester-dropdown-column').append('<select class="semester-dropdown" id="size_select">\
  <option>Select</option>\
  <option>Fall 2020</option>\
  <option>Fall 2021</option>\
  <option>Spring 2020</option>\
  <option>Spring 2021</option>\
  <option>Summer 2020</option>\
  <option>Summer 2021</option>\
  <option>Fall 2022</option>\
  <option>Spring 2022</option>\
  <option>Summer 2022</option>\
</select><br/>');
                          $('.section-dropdown-column').append('<select class="semester-dropdown" id="size_select">\
  <option>Select</option>\
  <option>A</option>\
  <option>B</option>\
  <option>C</option>\
  <option>D</option>\
  <option>E</option>\
  <option>F</option>\
</select><br/>');
            }
            var dvCSV = document.getElementById("fileDiv");
            dvCSV.innerHTML = "";
            dvCSV.appendChild(table);
        }
        reader.readAsText(fileUpload);
    } else {
        alert("This browser does not support HTML5.");

    }
}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}
  //hides dropdown content
  $(".size_chart").hide();
  

  
  //listen to dropdown for change
  $("#size_select").change(function(){
    //rehide content on change
    $('.size_chart').hide();

  });