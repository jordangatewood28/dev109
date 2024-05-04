var i = 1;                                                     //Initializes counter to 1
var msg = "<h2>Multiplication Table</h2>";                     //Initializes message for program
var table = prompt("Please enter a number between 0 and 10:"); //Prompts the user for a number between 0 and 10
//Checks if the number is not lesser than 0. If so, raises an alert and tells user to refresh.
if (table < 0) {
  alert("Invalid input. Number cannot be less than 0. Refresh to try again.");
  }
//Checks if the number is not greater than 10. If so, raises an alert and tells user to refresh.
if (table > 10) {
  alert("Invalid input. Number cannot be greater than 10. Refresh to try again.");
  }
//Does calculation if validators pass.
else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

//Makes message and prints it
var el = document.getElementById('blackboard');
el.innerHTML = msg;
