function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}

function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var first_name = row.insertCell(0);
  var last_name = row.insertCell(1);
  var date_of_birth = row.insertCell(2);
  var tuition_fees = row.insertCell(3);
  var add_button = row.insertCell(4);
  var edit_button = row.insertCell(5);
  var update_button = row.insertCell(6);
  var delete_button = row.insertCell(7);

  first_name.innerHTML = "demodata";
  last_name.innerHTML = "demodata";
  date_of_birth.innerHTML = "demodata";
  tuition_fees.innerHTML = "demodata";
  add_button.innerHTML = "demodata";
  edit_button.innerHTML = "demodata";
  update_button.innerHTML = "demodata";
  delete_button.innerHTML = "demodata";
}
