const express = require("express")

const PORT = 5002;
const {connectToMonogDB} = require('./connect')
const app = express();
const path = require("path")
const msgRouter = require("./router/addmsg")
const msgUserStatic = require("./router/msguser")
const bodyParser = require("body-parser")

connectToMonogDB('mongodb://127.0.0.1:27017/msg')
.then(()=>console.log("Mongodb Connected"))

// app.get("/msg", (req, res)=>{
//     return res.send("Harash Poriya")
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/", msgUserStatic);
app.use("/msg", msgRouter)


app.listen(PORT,()=>console.log(`Server Started at PORT: ${PORT}`))