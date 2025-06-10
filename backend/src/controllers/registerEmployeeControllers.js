import employeeModels from "../models/Employee.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../../config.js";
import Employee from "../models/Employee.js";

const registerEmployeeControllers = {};

registerEmployeeControllers.register = async (req, res) => {
    const{name, birthdate, gender, email, dui, password} = req.body;

    try{
        const existEmployee = await Employee.findOne({ email });
        if (existEmployee) {
          return res.json({ message: "Employee already exists" });
        }

        const passwordHash = await bcryptjs.hash(password, 10);

        const newEmpployee = new Employee({name, birthdate, gender, email, dui, password: passwordHash,});

        await newEmpployee.save();

        jsonwebtoken.sign(
            { id: newEmployee._id },
            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn },
            (error, token) => {
                if (error) console.log(error);
                res.cookie("authToken", token);
                res.json({ message: "Empleado registrado" });
              }
        );
    } catch(error) {
        console.log(error);
    res.json({ message: "Error al registrar empleado" });
    }
};

export default registerEmployeeControllers;