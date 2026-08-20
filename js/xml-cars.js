const vehicleList = document.getElementById("vehicle-list");
const xmlButton = document.getElementById("loadXML");

//pseudo-code
//when xmlhttp request is rendered, apply the classListName of article to XML content to give the html output the correct styling
function loadXMLContent() {
  "use strict";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      document.getElementById("vehicle-list").innerHTML =
        `<article>${this.responseText}</article>`;
    }
  };
  xhttp.open("GET", "resources/cars.xml", true);
  xhttp.send();
}

function init() {
  "use strict";
  document.getElementById("loadXML").addEventListener("click", loadXMLContent);
}

window.onload = init;
