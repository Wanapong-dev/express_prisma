
require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/auth-route")
const userRoutes = require("./routes/user-router")
const restaurantRoutes = require("./routes/restaurant-route")
const handlerError = require("./middlewares/error")
const cors = require("express")
const notFoundHeadler = require("./middlewares/not-found")
const postRouter = require("./routes/post-route")
const authenticate = require("./middlewares/authenticate")



const app = express()
app.use(cors())

app.use(express.json())



app.use("/auth", authRoutes)
app.use("/user",authenticate, userRoutes)
app.use("/restaurant", restaurantRoutes)
app.use("/post",postRouter)

app.use(handlerError)
app.use("*",notFoundHeadler)
 
app.listen(8000, () => console.log("Server is running on port 8000"));

