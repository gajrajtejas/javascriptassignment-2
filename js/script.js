
//////////////////////////////////////////////////////!VARIABLES!/////////////////////////////////////////////////////////////////////////////////

// Getting a reference to the "Send" button
var sendButton = document.getElementById("sendButton");

// Getting a reference to the "Calculate" button
var calculateButton = document.getElementById("calculateButton");

// Getting references to the buttons
var darkModeButton = document.getElementById("darkModeButton");
var lightModeButton = document.getElementById("lightModeButton");


////////////////////////////////////////////! EVENTLISTENER  TO CHANGE MODE TO LIGHT OR DARK !///////////////////////////////////////////////

// Adding event listeners to the buttons
darkModeButton.addEventListener("click", function() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
});

lightModeButton.addEventListener("click", function() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
});


////////////////////////////////////////////////! myExcel function for calculation purposes(add,min,max and average) !//////////////////////////////////////////
function myExcelFuns() {
  // Getting the user input (string of numbers and spaces)
  var numberStr = document.getElementById("numbers").value;

  // Checking if the user has inserted some values
  if (numberStr.trim() === "") {
    alert("Please enter your numbers.");
  } else {
    // Remove extra spaces before and after the user input
    numberStr = numberStr.trim();

    // Convert the string user input into an array of numbers
    var numberArr = numberStr.split(" ");

    // Create a new array, finalNumericArray, to store the cleaned and parsed numbers
    var finalNumericArray = [];

    // Iterate through each element in the numberArr
    for (var i = 0; i < numberArr.length; i++) {
      // Remove any spaces in between the numbers
      var cleanedNumber = numberArr[i].replace(/\s/g, "");

      // Convert the numeric value from string data type to number data type
      var parsedNumber = parseFloat(cleanedNumber);

      // Check if the current element is a number and not empty/space
      if (!isNaN(parsedNumber)) {
        finalNumericArray.push(parsedNumber);
      }
    }

    // Perform the desired calculation based on the selected radio button
    var result;
  


    if (document.getElementById("autosum").checked) {
      // Calculate the sum of the numbers
      result = finalNumericArray.reduce(function (a, b) {
        return a + b;
      }, 0);
    } else if (document.getElementById("average").checked) {
      // Calculate the average of the numbers
      var sum = finalNumericArray.reduce(function (a, b) {
        return a + b;
      }, 0);
      result = sum / finalNumericArray.length;
    } else if (document.getElementById("max").checked) {
      // Find the maximum number
      result = Math.max(...finalNumericArray);
    } else {
      // Find the minimum number
      result = Math.min(...finalNumericArray);
    }

    // Display the result

    console.log(result);
    var resultElement = document.getElementById("excelResult");
    resultElement.textContent = result;

}}


//////////////////////////////////////////////! userForm function to get user data !//////////////////////////////////////////////////

function userForm() {
    // Get the form inputs by their respective IDs
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;
  
    // Create a string containing the formatted user information
    var userInfo = "Full Name: " + firstName + " " + lastName + "<br>" +
                   "Email: " + email + "<br>" +
                   "Address: " + address + "<br>" +
                   city + ", " + province + "<br>" +
                   "Membership: " + membership;
  
    // Get the output element and set its innerHTML to the user information
    var outputElement = document.getElementById("result");
    outputElement.innerHTML = userInfo;
  }


  //SOLVING AN ERROR USING TRY AND CATCH
try{  

// Add an event listener to the "Send" button
sendButton.addEventListener("click", userForm);
}
catch(err){
// Add an event listener to the "Calculate" button
calculateButton.addEventListener("click",myExcelFuns);
}
////////////////////////////////////////////////////////////////////?END OF CODE///////////////////////////////////////////////////////////////




  