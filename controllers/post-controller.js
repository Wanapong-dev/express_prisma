const createError = require("../utils/createError");
const prisma = require("../config/prisma")
const postService = require("../services/post-service")

exports.createPost = async (req,res,next) => {
    try {
        const {title,userId,categoryId} = req.body


        // if title exist
        if(!title) {
            return createError(400,"Title to be provided")
        }
        // typeof title string
        if(typeof title !== "string") {
            return createError(400, "Title should be string")
        }

        // is userId
        if(!userId) {
            return createError(400, "User id to provided")
        }
        // typeof userId number
        if( typeof userId !== "number") {
            return createError(400, "User id should be number")
        }
        // is user exist
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        })
        if (!user) {
            return createError(400, "User not found")
        }
        // is categoryId exist
        if(!categoryId) {
            return createError(400, "Category to be provided")
        }
        // typeof categoryId number?
        if(typeof categoryId !== "number"){
            return createError(400,"Category id should be number")
        }
        // is category exist
        const category = await prisma.category.findFirst({
            where: {
                id: categoryId,
            }
        })        

        if(!category) {
            return createError(400, "Category not found")
        }

        const post = await prisma.post.create({
            data: {
                title,
                categories: {
                    connect: {
                        id:categoryId,
                    }
                },
                authorId: userId,
            },
            include: {
                categories: true
            }
        })
        res.json({ post })
    } catch(err) {
        next(err)
    }
};


exports.getAllPosts = async (req, res, next) => {
    try {
        const { page, limit, order, search} = req.query
        if (isNaN(Number(page) || isNaN(Number(limit)))) {
            return createError(400, "page or limit is incorrect type")
        }
        if (page === "0" || limit === "0") return createError(400, "page or limit should not be zero")

        if (order !== "desc" && order !== "asc") return createError(400, "order is incorrect type")

        if (typeof search !== "string")  {
            return createError(400,"Search")
        }

        const skipPost = (Number(page) - 1) * Number(limit)
        

        const posts = await prisma.post.findMany({
            where: {
                title: {
                    contains: search,
                },
            }, 
            skip: skipPost,
            take:Number(limit),
            orderBy: {
                createdAt: order,
            },
             include: {
                categories:{
                    select:{
                        name:true,
                    }
                }
             },
        })
        res.json({ posts });
     } catch (error) {
        next(error)
    }
}

exports.deletePost = async (req,res,next) => {
try {

    const { postId } = req.params
    // console.log(req.params)
    // if postId Exist
    if (!postId) {
        return createError(400,"Post id to be provided")
    }
    // console.log(postId)
    // If postId number
    if(isNaN(postId)) {
        return createError(400,"Post id is incorrect type")
    }

    const post = await postService.getPostById(postId)

    if(!post) {
        return createError(400, "Post not found")
    }
    // console.log(post)
    await postService.deletePostById(post.id)

    res.json({message: "Post is deleted"})
} catch (err) {
    next(err)
}
}

    
