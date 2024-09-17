const express = require("express");



const app = express()

// app.use((req,res) => {
//     res.json({message: "Hello Codecamp"})
// })

// app.use("/", (req,res) => {
//     res.json({message: "cc18"})
// })
// app.get("/", (req,res) => {
//     res.json({message: "Get data"})
// })

// app.get("/restaurant/:id/menu/:menuId",(req,res)=> {
//     console.log(req.params)
//     const { id } = req.params;
//     res.json({ restaurantId: id})
// })


// app.post("/", (req,res) => {
//     res.json({message : "Create data"})
// })

// app.put("/", (req,res) => {
//     res.json({ message: "Update data"})
// })

// app.patch("/", (req,res) => {
//     res.json({ message: "Update partial data"})
// })

// app.delete("/", (req,res) =>{
//     res.json({ message: "Delete data"})
// })

app.get("/restaurant/:restaurantId/menu/:menuId",(req,res)=>{
    const {restaurantId, menuId } = req.params
    res.json({restaurantId, menuId})
});


app.get("/sum/:sumAId/:sumBid",(req,res)=>{
    const {sumAId, sumBid } = req.params
    res.json({sumAId, sumBid})
});

app.get("/users/:userId/bookings/:bookingsId",(req,res)=>{
    const {userId, bookingsId } = req.params
    res.json({userId, bookingsId})
});

app.post("/product/:productID",(req,res)=>{
    const {productID  } = req.params
    res.json({productID})
});

app.patch("/post/:postId",(req,res)=>{
    const {postId } = req.params
    res.json({postId})
});

app.delete("/post/:postId",(req,res)=>{
    const {postId } = req.params
    res.json({postId})
});

app.get("/post/:postId",(req,res)=>{
    const {postId } = req.params
    res.json({postId})
});

app.get("/auth/:userId",(req,res)=>{
    const {userId } = req.params
    res.json({userId})
});





// app.get("/", (req,res)=> {
//     res.json({title:"My First Web App" ,message: "Our Web App API"})
// })

// app.get("/post", (req,res)=> {
//     res.json({message: req.method + "product"})
// })
// app.post("/post", (req,res)=> {
//     res.json({message: req.method +  "product"})
// })
// app.put("/post", (req,res)=> {
//     res.json({message: req.method +  "product"})
// })
// app.patch("/post", (req,res)=> {
//     res.json({message: req.method + "product"})
// })
// app.delete("/post", (req,res)=> {
//     res.json({message: req.method +  "product"})
// })


// app.get("/redirect", (req,res)=> {
//     res.redirect ('https://google.com')
// })



app.listen(8000, () => console.log("Server is running on port 8000"));


 