const notFoundHeadler = (req,res) => {
    res.status(404),json({ message: "Path not Found"})
}

module.exports = notFoundHeadler