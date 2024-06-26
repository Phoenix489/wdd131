import recipes from './recipes.mjs';

function generateRandomNumber(min = 0, max = recipes.length)
{
    return Math.floor(Math.random() * recipes.length);
}

function getRandomListEntry(recipes)
{
    let ranNum = generateRandomNumber(0, recipes.length);
    let recipe = recipes[ranNum]
    return recipe;
}

function recipeTemplate(recipe)
{
    return `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-details">
                    <span class="recipe-tag">${tagsTemplate(recipe.tags)}</span>
                    <h2 class="recipe-title">${recipe.name}</h2>
                    <div class="recipe-rating">
                        ${ratingTemplate(recipe.rating)}
                    </div>
                    <p class="recipe-description">
                        ${recipe.description}
                    </p>
                </div>
            </div>
    `;
}

function tagsTemplate(tags) 
{
    // loop through the tags list and transform the strings to HTML
    const html = tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('');
    return html;
}

function ratingTemplate(rating) 
{
    // begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
for (let i = 1; i <= 5; i++)
		// check to see if the current index of the loop is less than our rating
        if (i < rating)
            {
                // if so then output a filled star
                html += '★';
            }
        else 
            {
                // else output an empty star
                html += '☆';
            }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) 
{
    const mainContent = document.querySelector('.main-content');
    // Clear existing content
    mainContent.innerHTML = '';

    // Iterate through each recipe in the list and render it
    recipeList.forEach(recipe => {
        const recipeHTML = recipeTemplate(recipe);
        mainContent.innerHTML += recipeHTML;
    });
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
  }

  function filterFunction(recipe, query) {
    return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
    );
}

  function sortFunction(a, b)
  {
    return a.name.localeCompare(b.name);
  }
  

  function filter(query) {
	const filtered = recipes.filter(recipe => filterFunction(recipe, query))
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
    let searchbar = document.querySelector('.search-bar');
    // convert the value in the input to lowercase
    const query = searchbar.value.toLowerCase();
    // use the filter function to filter our recipes
    const filteredList = filter(query);
    // render the filtered list
    renderRecipes(filteredList);
}

window.addEventListener('load', init);

document.querySelector('.search-button').addEventListener('click', searchHandler);


