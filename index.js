const express = require("express")
const {connection} = require("./config/db");
const { registerRouter } = require("./routes/register.route");
const { loginRouter } = require("./routes/login.route");
require("dotenv").config()
const cookieParser = require('cookie-parser');
const { googleOathRouter } = require("./routes/google-outh.route");
const cors = require("cors");
const { userProfile } = require("./routes/userprofile.route");


const app = express();
const PORT=process.env.PORT || 8000

app.use(cors()) 

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("welcome to api")
})

app.use("/register",registerRouter)
app.use("/login",loginRouter)
app.use("/profile",userProfile)
app.use("/auth",googleOathRouter)






app.listen(PORT, async () => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log(err)
        console.log("Error connecting to DB")
    }
    console.log(`Listening on PORT ${PORT}`)
})
