exports.getUser = (req,res,next) => {
    res.json({ message: "get all user"})
}

exports.getUserFavorite = (req,res,next) => {
    res.json({ message: "get user favorite"})
}