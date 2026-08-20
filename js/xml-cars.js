const vehicleList = document.getElementById("vehicle-list");
const xmlButton = document.getElementById("loadXML");

//pseudo-code
//when xmlhttp request is rendered, apply the classListName of article to XML content to give the html output the correct styling
function loadXMLContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status === 200) {
      document.getElementById("vehicle-list").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "resources/cars.xml", true);
  xhttp.send();
}

function init() {
  document.getElementById("loadXML").addEventListener("click", loadXMLContent);
}

loadXMLContent();

// Some javascript practice

// function emptyMessage() {
//   xmlButton.addEventListener("click", () => {
//     if (vehicleList.textContent === "") {
//       let apology = (document.getElementById("vehicle-list").textContent =
//         "sorry we dont have anything to display, please come back later");
//       const failImage = document.createElement("img");
//       failImage.src = "/images/broken_heart.png";
//       failImage.height = 100;
//       failImage.width = 100;
//       failImage.style.margin = "0 auto";
//       const container = document.getElementById("vehicle-catalogue");
//       container.append(failImage);
//     }
//   });
// }

// emptyMessage();
