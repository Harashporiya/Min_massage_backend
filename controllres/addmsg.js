const AddMsg = require('../model/msguser');

async function newCreateMsg(req, res) {
    try {
        const { user, text, visitHistory = [] } = req.body;

        if (!user || !text) {
            return res.status(400).redirect("/");
        }

        const created = await AddMsg.create({
            user,
            text,
            visitHistory,
        });

        const alldata = await AddMsg.find({});
        console.log(created);
        // console.log(created);
        res.status(201).render("home",{ data: alldata}); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    newCreateMsg,
};
