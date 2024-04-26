function updateLoginInfo() {
  // Get the current date and time
  var today = new Date();
  var date = today.toDateString();
  var time = today.toLocaleTimeString();
  
  // Format the date and time string
  var loginInfo = "Last login: " + date + " " + time + " from 127.0.0.1";

  // Get the element with id "login-info"
  var loginSpan = document.getElementById("login-info");

  // Update the content of the element
  loginSpan.innerHTML = loginInfo;
}

// Call the updateLoginInfo function on page load
window.onload = updateLoginInfo;
