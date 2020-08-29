import axios from 'axios'

class Search {
    constructor(query){
        this.query = query
    }

     async searchResult () {
        const result = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
         console.log(result.data.recipes)
     }
}

export default Search

