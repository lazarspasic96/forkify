import axios from "axios"

export class Recipe {
    constructor(id) {
        this.id = id

    }

    async getSingleRecipe() {
        try {
            const results = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            const singleRecipe = results.data.recipe
            this.image = singleRecipe.image_url
            this.rank = singleRecipe.social_rank
            this.ingredients = singleRecipe.ingredients



        } catch (error) {
            alert(`Something went wrong ${error}`)
        }
    }

    coockTime() {
        this.time = this.ingredients.length * 15 //15 minutes per ingredients
    }

    serving() {
        this.forPersons = 4
    }
}