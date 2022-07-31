const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const dbRoute = require('./routes/db')
const checkout = require('./routes/checkout');



const app = express()



app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(dbRoute)
app.use(checkout)




// mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(process.env.PORT, () => console.log(`db connected..server running on ${process.env.PORT}`))).catch(err => console.log(err))


mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
app.listen(4000, () => console.log('connected'))