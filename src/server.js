const cors = require('cors')
const express = require('Express')
const app = express()
const axios = require('axios')

//part 1 
app.use(cors())
app.get('/', async (req,res) => {

    //part 3
    try {
        //response é a resposa do axios mas eu tiro o data de dentro do response
    const {data} = await axios ('https://jsonplaceholder.typicode.com/users')
    //console.log(data)
    return res.json(data);
    } catch (error) {
        console.error(error)
    }

    
})//Rota
app.listen('4567')//porta





