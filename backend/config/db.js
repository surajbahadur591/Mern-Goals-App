// Here MongoDB Connection is estlablished 
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo DB connected at ${conn.connection.host}`.cyan.underline);
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB