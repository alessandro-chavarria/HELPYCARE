import express from "express";
import saleControllers from "../controllers/saleControllers.js";

const router = express.Router();

router.route("/")
.get(saleControllers.getSale)
.post(saleControllers.insertSale)

router.route("/:id")
.put(saleControllers.updateSale)
.delete(saleControllers.deleteSale);

export default router;