import axios from 'axios';

async function getRecepie () {
const result =  await axios('https://forkify-api.herokuapp.com/api/get?rId=47746')
console.log(result)
console.log(this)
}

getRecepie()

