const express = require("express");

const app = express()

app.use((req,res)=> {
    res.json({message: 'what the fuck'})
})

app.listen(8000, () => console.log("server is run"))