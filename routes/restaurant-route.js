const express = require("express")

const router =express.Router()
const restaurantController = require("../controllers/restaurant-controller")


router.get("/all",restaurantController.getAllRestaurant)
router.get("/:restaurantId/menu/all",restaurantController.getMenuAllRestaurant)
router.get("/menu/:menuId",restaurantController.getMenuById)

module.exports = router