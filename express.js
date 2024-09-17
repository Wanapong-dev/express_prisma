const express = require("express");
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const app = express()

// const middlewareA =(req,res,next) => {
//     req.user = {id:1, username:'John', role: "admin"}
//     next()
// }

// const middlewareB = (req,res, next) => {
//     req.name = "Ball"
//     next()
// }

// app.use(middlewareA)
// app.use(middlewareB)

// app.post("/product",middlewareA,middlewareB, (req,res) => {
//     console.log(req.user)
//     console.log(req.name)
//     res.json({});
// })


app.use(express.json())

const middlewareA =(req,res,next) => {
    const {message} = req.body
    
    if ( message === "Codecamp18" ) {
        req.user = { title: "Codecamp18"}
    } else {
       return res.json({ message: "Unknown"})
    }

    next()
}

app.use(middlewareA)



app.get("/product",(req,res)=> {
    const{ page,limit,order} =req.query
    res.json({page,limit,order})
})

app.post("/product",(req,res) => {
    const { name, description, price,} = req.body;
    res.json({ name,description,price });
})

app.put("/product/:productId",(req,res) => {
    const { productId } = req.params;
    const { name, description, price,} = req.body;
    res.json({ productId,name,description,price });
})

app.delete("/product/:productId",(req,res) => {
    const { productId } = req.params;
    const { name, description, price,} = req.body;
    res.json({ productId,name,description,price });
})



// app.post("/product",upload.single("image"),(req,res) => {
//     // const { title, description, price,stock} = req.body;
//     console.log(req.file)
//     res.json({});
// })



app.listen(8000, () => console.log("Server is running on port 8000"));