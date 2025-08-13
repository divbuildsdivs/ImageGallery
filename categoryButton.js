const categoryButton = function (category) {
  return `<button class="category-button" data-category="${category}">
            ${category}
          </button>`;
}

export default categoryButton;