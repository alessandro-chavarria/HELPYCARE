import  JsonWebToken  from "jsonwebtoken";
import { config } from "../config";

export const validateAuthToken = (aLLowedUserTypes = [])=> {

 
    return (req, res, next) =>{

        try{
            //Validar si existen cookies
            if(!req.cookies){
                return res.json({message: "No cookies found"})
            }

            //Extraer el token de las cookies
            const {authToken} = req.cookies;

            //Extraemos toda la informacion de token
            const decoded = JsonWebToken.verify(authToken, config.JWT.secret)

            //Almacenar lso datos del usuario en un request
            req.user = decoded

            //Veridicar el rol   
            if(!aLLowedUserTypes.includes(decoded.userType)){
                
            return res.json({message: "Access denied"});
        }

            //Si el si esta, podemos continuar 
            next()

        } catch (error){
        console.log ("error"+error)
        }
    }

}