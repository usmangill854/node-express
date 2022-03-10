const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())







mongoose.connect('mongodb+srv://gill:1234@cluster0.wuqqy.mongodb.net/LoginUser?retryWrites=true&w=majority',() => {
    console.log('db is connected')
})


app.listen(3000,() => {
console.log('server is running')
})