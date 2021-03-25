$(document).ready(function () {
  let userAge = parseInt(prompt("What is your age?"));
  if (Number.isNaN(userAge)) {
    userAge = parseInt(prompt("That was not a number! Please enter your age:"));
  }
  if (userAge >= 18) {
    $("#older").show();
  } else if (userAge < 18) {
    $("#younger").show();
  } else {
    $("#error").show();
  }
});
