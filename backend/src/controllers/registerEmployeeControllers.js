import employeeModels from "../models/Employee.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtn";
import { config } from "../config.js";

const registerEmployeeControllers = {};

registerEmployeeControllers.register = async (req, res) => {
    const{name, birthdate, gender, email, dui, password} = req.body;
}