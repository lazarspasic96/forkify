import Search from './models/Search'
import  * as domElements from './base'
import * as SearchView from './views/searchView'


const state = {}


const controlSearch = () => {

    //get query from the view
    const query = 'pizza'
    if(query) {
        // new search object added to the central state
        state.search = new Search(query)
    }


    //prepare UI for the result

    //render result on the UI
}

domElements.searchForm.addEventListener('submit', event => {
    event.preventDefault()
    controlSearch()

})

