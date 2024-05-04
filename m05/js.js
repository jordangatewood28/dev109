var i = 1;
var msg = "<h2>Multiplication Table</h2>";
var table = prompt("Please enter a number between 0 and 10:");
if (table < 0) {
  alert("Invalid input. Number cannot be less than 0. Refresh to try again.");
  }
if (table > 10) {
  alert("Invalid input. Number cannot be greater than 10. Refresh to try again.");
  }
else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;
