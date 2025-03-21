import express from "express";
import employeeControllers from "../controllers/employeeControllers.js";

const router = express.Router();

router.route("/")
.get(employeeControllers.getEmployee)
.post(employeeControllers.insertEmployee)

router.route("/:id")
.put(employeeControllers.updateEmployee)
.delete(employeeControllers.deleteEmployee)

export default router;