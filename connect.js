const  mongoose = require("mongoose")
function connectToMonogDB(url){
    return mongoose.connect(url)
}

module.exports = {
    connectToMonogDB,
}