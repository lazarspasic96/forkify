import Search from './models/Search'
import * as domElements from './base'
import * as SearchView from './views/searchView'


const state = {}


const controlSearch = async () => {

    //get query from the view
    const query =  SearchView.getInput()
    if (query) {
        // new search object added to the central state
        state.search = new Search(query)
        await state.search.searchResult(query)
        console.log(state.search.result)
        //prepare UI for the result
        SearchView.clearInput()
        SearchView.clearResult()
        
        //render result on the UI
        SearchView.render(state.search.result)
    }
}

domElements.searchForm.addEventListener('submit', event => {
    event.preventDefault()
    controlSearch()
   
})

