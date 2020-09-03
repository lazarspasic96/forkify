import Search from './models/Search'
import * as domElements from './base'
import * as SearchView from './views/searchView'
import { renderLoader, clearLoader } from '../shared/loader'
import { Recipe } from './models/Recipe'


const state = {}


const controlSearch = async (id) => {

    try {
        //get query from the view
        const query = SearchView.getInput()
        if (query) {
            // new search object added to the central state
            state.search = new Search(query)

            //prepare UI for the result
            SearchView.clearInput()
            SearchView.clearResult()
            renderLoader(domElements.results)
            await state.search.searchResult(query)
            console.log(state.search.result)

            //render result on the UI
            clearLoader(domElements.results)
            SearchView.render(state.search.result)


        }
    } catch (error) {
        alert(`Something is wrong ${error}`)
    }



}

domElements.searchForm.addEventListener('submit', event => {
    event.preventDefault()
    controlSearch()

})

domElements.resultPages.addEventListener('click', event => {
    const btn = event.target.closest('button')
    if (btn) {
        let pageNum = parseInt(btn.dataset.pagenum)
        console.log(btn.dataset)
        SearchView.clearResult()
        SearchView.render(state.search.result, pageNum)
    }
})




const controlRecipe = async (id) => {

    try {
        //set new single recipe to the state
        state.singleRecipe = new Recipe(id)

        //prepare ui and store results of recipe

        await state.singleRecipe.getSingleRecipe()
        state.singleRecipe.coockTime()
        state.singleRecipe.serving()


    }

    catch (error) {
        `Something went wrong please try again later ${error}`
    }


    console.log(state.singleRecipe)

}


window.addEventListener('hashchange', e => {
    controlRecipe(window.location.hash.replace('#', '')) // replace hash with empty string
})

//whenever the page is loaded trigger the event
window.addEventListener('load', e => {


    const id = window.location.hash.replace('#', '')
    if (id) {
        console.log('load work')
        controlRecipe(id)
    }
})

