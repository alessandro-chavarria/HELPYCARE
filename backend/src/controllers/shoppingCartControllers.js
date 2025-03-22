const shoppingCartControllers = {};
import { populate } from "dotenv";
import shoppingCartModels from "../models/ShoppingCart.js"

//SELECT CON ID 
shoppingCartControllers.getShoppingCart = async (req, res) =>{
    const shoppingCart = await shoppingCartModels.find().populate("idClient");
    res.json(shoppingCart)
}

//INSERT
shoppingCartControllers.insertShoppingCart = async (req, res) =>{
    const {idClient, products, total, state} = req.body;
    const newShoppingCart = new shoppingCartModels({idClient, products, total, state})
    await newShoppingCart.save()
    res.json({message: "shoppingCart saved"})
}

//DELETE
shoppingCartControllers.deleteShoppingCart = async (req, res) => {
    await shoppingCartModels.findByIdAndDelete(req.params.id);
    res.json({message: "shoppingCart deleted"});
}

//UPDATE
shoppingCartControllers.updateShoppingCart = async (req, res) => {
    const {idClient, products, total, state} = req.body;
    const updatedShoppingCart = await shoppingCartModels.findByIdAndUpdate(req.params.id, {idClient, products, total, state}, {new: true})
    res.json({message: "shoppingCart updated"});
}

export default shoppingCartControllers;