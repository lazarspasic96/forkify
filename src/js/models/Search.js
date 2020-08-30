import axios from 'axios'

class Search {
    constructor(query) {
        this.query = query
    
    }

    async searchResult() {

        try {
            const result = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
            this.result = result.data.recipes
        }

        catch(err) {
            alert(err)
        }

    }
}

export default Search;

