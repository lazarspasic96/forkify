import * as domElements from '../base'

export const getInput = () => domElements.searchInput.value
export const clearInput = () => domElements.searchInput.value = ''
export const clearResult = () => domElements.searchList.innerHTML = ''

const singRecipe = (recipe) => {
    const listItem = `
                <li>
                    <a class="results__link results__link--active" href="#23456">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `
   domElements.searchList.insertAdjacentHTML('beforeend', listItem) 
}

export const render = (recipes) => {
    console.log(recipes)
    recipes.forEach(recipe => singRecipe(recipe))
}
