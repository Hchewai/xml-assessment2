//Formatting XML Content (used text content instead of w3schools child nodes for readability)
//https://www.w3schools.com/xml/tryit.asp?filename=try_dom_xmlhttprequest_xml
function formatXML(xml) {
  "use strict";
  let x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  table =
    "<tr><th>Vehicle Name</th><th>Model</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
  x = xmlDoc.getElementsByTagName("vehicle");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("name")[0].textContent +
      "</td><td>" +
      x[i].getElementsByTagName("model")[0].textContent +
      "</td><td>" +
      x[i].getElementsByTagName("country")[0].textContent +
      "</td><td>" +
      x[i].getElementsByTagName("company")[0].textContent +
      "</td><td>" +
      x[i].getElementsByTagName("price")[0].textContent +
      "</td><td>" +
      x[i].getElementsByTagName("year")[0].textContent +
      "</td></tr>";
  }
  document.getElementById("vehicle-list").innerHTML = table;
}

// Load XML Content Function
function loadXMLContent() {
  "use strict";
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        formatXML(this);
      } else {
        document.getElementById("vehicle-list").textContent =
          "sorry we dont have anything to display, please come back later";
        const failImage = document.createElement("img");
        failImage.src = "/images/error-image.png";
        failImage.height = 100;
        failImage.width = 100;
        failImage.style.margin = "0 auto";
        const container = document.getElementById("vehicle-catalogue");
        container.append(failImage); // if you'd like to see this, change line 49's cars.xml to a different nonexistent name - Hassan
      }
    }
  };
  xhttp.open("GET", "resources/cars.xml", true);
  xhttp.send();
}

// // Event Listener
function init() {
  "use strict";
  document.getElementById("loadXML").addEventListener("click", loadXMLContent);
}

window.onload = init;
