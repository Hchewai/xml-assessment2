const vehicleList = document.getElementById("vehicle-list");
const xmlButton = document.getElementById("loadXML");

// function loadModel() {
//   xmlButton.addEventListener("click", () => {
//     let newModelDisplay = (document.getElementById("model").textContent =
//       "test");
//     console.log(newModelDisplay);
//   });
// }
// Some javascript practice
// im gonna turn this empty message function into a conditional in my xml function because 2 functions on one event listener is gonna mess it up
// if there are vehicles display them
// else
// display empty message
//remember to not check text.content === "", check if xml is empty
// i might be goated

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
