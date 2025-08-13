import categoryButton from "./categoryButton.js";
import natureImageData from "./data.js";

function init() {
    console.log("Initializing the application...");
    
    const categories = Object.keys(natureImageData);
    console.log("Available categories:", categories);
    
    renderCategoryButtons(["All", ...categories]);
}

function renderCategoryButtons(categories) {

  console.log("Rendering category buttons for:", categories);
  const buttonContainer = document.querySelector(".category-buttons");
  buttonContainer.innerHTML = ""; // Clear existing buttons

  categories.forEach(category => {
    const buttonHTML = categoryButton(category);
    buttonContainer.innerHTML += buttonHTML;
  });
}

init();

console.log("This is the main entry point of the application.");

