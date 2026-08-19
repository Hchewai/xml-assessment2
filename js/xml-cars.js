const vehicleArticle = document.getElementById("vehicle");
const xmlButton = document.getElementById("loadXML");
const modelDisplay = document.getElementById("model");
const countryDisplay = document.getElementById("country");
const companyDisplay = document.getElementById("company");
const priceDisplay = document.getElementById("price");
const yearDisplay = document.getElementById("year");

// function loadModel() {
//   xmlButton.addEventListener("click", () => {
//     let newModelDisplay = (document.getElementById("model").textContent =
//       "test");
//     console.log(newModelDisplay);
//   });
// }
// Some javascript practice
function loadModel() {
  xmlButton.addEventListener("click", () => {
    if (modelDisplay.textContent === "") {
      let newModelDisplay = (document.getElementById("model").textContent =
        "Sorry we dont have anything to display at the moment, please check back later!");
      const failImage = document.createElement("img");
      failImage.src = "/images/broken_heart.png";
      failImage.height = 100;
      failImage.width = 100;
      failImage.style.margin = "0 auto";
      const article = document.querySelector("article");
      article.append(failImage);
    }
  });
}

loadModel();

function xmlRequest() {}
