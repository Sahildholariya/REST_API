const mongoose = require('mongoose')
const { options } = require('../routes/product')



const connectDB = (uri) =>{
    console.log("connect DB");
    return mongoose.connect(uri)
}

module.exports = connectDB