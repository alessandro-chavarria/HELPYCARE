import express from "express";
import commentControllers from "../controllers/commentControllers.js";

const router = express.Router();

router.route("/")
.get(commentControllers.getComment)
.post(commentControllers.insertComment)

router.route("/:id")
.put(commentControllers.updateComment)
.delete(commentControllers.deleteComment)

export default router;