import * as domElements from '../base'
import {button} from '../../shared/paginationButton'


export const getInput = () => domElements.searchInput.value
export const clearInput = () => domElements.searchInput.value = ''
export const clearResult = () => {
    domElements.searchList.innerHTML = ''
    domElements.resultPages.innerHTML = ''
}


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

const buttons = (page, numResults, resPerPage) => {
    const totalPages = Math.ceil(numResults / resPerPage)
    let renderButtons;
    if(page === 1 && totalPages > 1) {
        // button for next
       renderButtons = button('next', page)
    }
    else if(page < totalPages) {
        //both button

        renderButtons = `${button('prev', page)} ${button('next', page)}`
    }
    else if(page === totalPages && totalPages > 1) {
        //buton for prev
       renderButtons = button('prev', page)
    }

    return renderButtons
}

export const render = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage
    const end = page * resPerPage
    recipes.slice(start, end).forEach(recipe => singRecipe(recipe))
    domElements.resultPages.insertAdjacentHTML('afterbegin', buttons(page, recipes.length, resPerPage = 10))
}


