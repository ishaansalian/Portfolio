function updateLoginInfo() {
  // Get the current date and time
  var today = new Date();
  var date = today.toDateString();
  var time = today.toLocaleTimeString();
  
  // Format the date and time string
  var loginInfo = "Last login: " + date + " " + time;

  // Get the element with id "login-info"
  var loginSpan = document.getElementById("login-info");

  // Update the text content of the element (without HTML tags)
  loginSpan.textContent = loginInfo;
}

// Call the updateLoginInfo function on page load
window.onload = updateLoginInfo;
