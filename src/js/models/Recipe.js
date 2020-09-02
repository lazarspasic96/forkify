import axios from "axios"

export class Recipe {
    constructor(id) {
        this.id = id
     
    }

    async getSingleRecipe() {
        try {
            const singleRecipe = await (await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)).data.recipe
            this.image = singleRecipe.image_url
            this.rank = singleRecipe.social_rank
            this.ingredients = singleRecipe.ingredients

  

        } catch (error) {
            alert(`Something went wrong ${error}`)
        }
    }

    cockTime() {
        const time = this.ingredients.length * 15
        return time
    }
}