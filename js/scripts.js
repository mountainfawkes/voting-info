// `$` is the exact same as `jQuery`

// The following code waits for the document to load and calls the ready function on the document

$(document).ready(function () {
  // This waits for the user to enter their age, then converts the string to an integer, then sets userAge to that integer

  let userAge = parseInt(prompt("What is your age?"));

  // This ensures that the userAge is a NaN; if it is, it runs the following line of code

  if (Number.isNaN(userAge)) {
    // If NaN, this waits again for the user to enter their age, converts that string to an integer, then resets userAge to that integer

    userAge = parseInt(prompt("That was not a number! Please enter your age:"));
  }

  // If userAge is a number equal to or greater than 18, this instructs the browser to show the #older element

  if (userAge >= 18) {
    $("#older").show();
    // If userAge is a number less than 18, this instructs the browse
  } else if (userAge < 18) {
    $("#younger").show();
  } else {
    $("#error").show();
  }
});
