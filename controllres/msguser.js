const AddMsg = require('../model/msguser')
 async function renderHome(req, res){
    const addAllMsg = await AddMsg.find({})
    res.render("home", {data: addAllMsg});

 }

module.exports={
    renderHome,
} 