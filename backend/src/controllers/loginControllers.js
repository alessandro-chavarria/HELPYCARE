import clientModels from "../models/Client.js";
import employeeModels from "../models/Employee.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../../config.js";

const loginControllers = {};

loginControllers.login = async (req, res) => {
    const {email, password} = req.body;

    try{
        let userFound;
        let userType;

        if(
            email === config.emailAdmin.email &&
            password === config.emailAdmin.password
        ) {
            userType = "Admin";
            userFound = {_id: "Admin"};
        } else{
            //Empleado
            userFound = await employeeModels.findOne({email});
            userType = "Employee";

            //Cliente
            userFound = await clientModels.findOne({email});
            userType = "Client";
        }

        if(!userFound) {
        return res.json({message: "User not found"});
        }

        if(userType !== "Admin") {
            const isMatch = await bcryptjs.compare(password, userFound.password);
            if(!isMatch) {
                return res.json({message: "Invalid password"});
            }
        }

        //Generar Token
        jsonwebtoken.sign(
            {id: userFound._id, userType},
            {expiresIn: config.JWT.expiresIn},
            (error, token) => {
                if (error) console.log(error);
        
                res.cookie("authToken", token);
                res.json({ message: "login successful" });
            }
        );
    } catch(error) {
        console.log(error);
    };
};

export default loginControllers;