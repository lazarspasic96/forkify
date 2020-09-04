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


    parseIngredients() {

        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

        const newIngs = this.ingredients.map(el => {
            //change units
            let ingredient = el.toLowerCase()
            unitsLong.forEach((unit, index) => {
                ingredient = ingredient.replace(unit, unitsShort[index])
            })
            //remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ")



            //parse ingredients into count, unit and ingredient

            const arrIngs = ingredient.split(' ')
            const unitIndex = arrIngs.findIndex(element => unitsShort.includes(element))

            if(unitIndex > -1) {
                console.log(unitIndex, 'unitindex')
            }

            else if(parseInt(arrIngs[0])) {
                console.log(parseInt(arrIngs[0]), 'brojjj')
            }

            else if(unitIndex === -1) {
                console.log('there is no unit')
            }

       

            
     


            return ingredient

        })

        this.ingredients = newIngs
    }

    coockTime() {
        const ings = Math.ceil(this.ingredients.length / 3)
        this.time = ings * 15 //15 minutes per 3 ingredients
    }

    serving() {
        this.forPersons = 4
    }


}