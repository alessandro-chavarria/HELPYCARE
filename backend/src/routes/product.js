import express from "express";
import productControllers from "../controllers/productControllers.js";

const router = express.Router();

router.route("/")
.get(productControllers.getProduct)
.post(productControllers.insertProduct)

router.route("/:id")
.put(productControllers.updateProduct)
.delete(productControllers.deleteProduct)

export default router;