import express from "express";
import brandControllers from "../controllers/brandControllers.js";

const router = express.Router();

router.route("/")
.get(brandControllers.getBrand)
.post(brandControllers.insertBrand)

router.route("/:id")
.put(brandControllers.updateBrand)
.delete(brandControllers.deleteBrand)

export default router;