console.log("page loaded...");

// Function to change the text of the user's name
function changeText(event) {
  event.innerHTML = "Sarah Penny";
}

// Function to toggle the user's name between "Jane Doe" and "Crystal Warmack"
function changeText() {
  var x = document.getElementById("changeName");
  if (x.innerHTML === "Jane Doe") {
    x.innerHTML = "Crystal Warmack";
  } else {
    x.innerHTML = "Crystal Warmack";
  }
}

// Function to remove an element from the DOM
function remove(element) {
  element.remove();
}

// Function to accept a connection request
function acceptRequest(element) {
  // Decrease the number of connection requests
  const requestCountElement = document.getElementById("requestCount");
  let currentRequests = parseInt(requestCountElement.textContent);

  // Ensure currentRequests is greater than 0 before decreasing
  if (currentRequests > 0) {
    requestCountElement.textContent = currentRequests - 1; // Decrease request count
  }

  // Increase the number of connections
  const connectionsBadge = document.querySelector(".your-connections-badge"); // Adjust this selector
  let currentConnections = parseInt(
    connectionsBadge.textContent.replace("+", "")
  ); // Remove '+' if present
  connectionsBadge.textContent = currentConnections + 1 + "+"; // Increase connections count

  // Optionally, remove the accepted request from the list
  const requestItem = element.closest(".card-list-item");
  requestItem.remove(); // Remove request from the list
}

// Function to remove a connection request
function removeRequest(element) {
  // Decrease the number of connection requests
  const requestCountElement = document.getElementById("requestCount");
  let currentRequests = parseInt(requestCountElement.textContent);

  // Ensure currentRequests is greater than 0 before decreasing
  if (currentRequests > 0) {
    requestCountElement.textContent = currentRequests - 1; // Decrease request count
  }

  // Remove the request item from the DOM
  const requestItem = element.closest(".card-list-item");
  requestItem.remove(); // Remove request from the list
}
