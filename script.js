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
                    var row = table.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }
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