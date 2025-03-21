import express from "express";
import clientControllers from "../controllers/clientControllers.js";

const router = express.Router();

router.route("/")
.get(clientControllers.getClient)
.post(clientControllers.insertClient)

router.route("/:id")
.put(clientControllers.updateClient)
.delete(clientControllers.deleteClient)

export default router;