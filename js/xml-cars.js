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
function emptyMessage() {
  xmlButton.addEventListener("click", () => {
    if (vehicleList.textContent === "") {
      let apology = (document.getElementById("vehicle-list").textContent =
        "sorry we dont have anything to display, please come back later");
      const failImage = document.createElement("img");
      failImage.src = "/images/broken_heart.png";
      failImage.height = 100;
      failImage.width = 100;
      failImage.style.margin = "0 auto";
      const container = document.getElementById("vehicle-catalogue");
      container.append(failImage);
    }
  });
}

emptyMessage();

// function xmlRequest() {}

// get javascript to retrieve my xml data

// then get javascript to create articles for each individual xml vehicle tag

// let newVehicleDisplay = (document.getElementById(
//   "vehicle-list",
// ).textContent =
//   "Sorry we dont have anything to display at the moment, please come back later!");
// const failImage = document.createElement("img");
// failImage.src = "/images/broken_heart.png";
// failImage.height = 100;
// failImage.width = 100;
// failImage.style.margin = "0 auto";
// const vehicleList = document.getElementById("vehicle-list");
// div.append(failImage);
