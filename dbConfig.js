const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tolulopealawode:pass2754@cluster0.ulsit6o.mongodb.net/chatApp')
const db = mongoose.connection

db.on("connected",  () => {console.log('Mongo DB connection successful')})
db.on('error', (err) => {console.log('Mongo DB Connection Failed')})
module.exports = db;