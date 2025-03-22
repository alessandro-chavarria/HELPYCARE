import express from "express";
import shoppingCartControllers from "../controllers/shoppingCartControllers.js";

const router = express.Router();

router.route("/")
.get(shoppingCartControllers.getShoppingCart)
.post(shoppingCartControllers.insertShoppingCart)

router.route("/:id")
.put(shoppingCartControllers.updateShoppingCart)
.delete(shoppingCartControllers.deleteShoppingCart);

export default router;