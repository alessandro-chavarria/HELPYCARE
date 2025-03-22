const saleControllers = {};
import { populate } from "dotenv";
import saleModels from "../models/Sale.js"

//SELECT CON ID 
saleControllers.getSale = async (req, res) =>{
    const sale = await saleModels.find().populate("idShoppingCart");
    res.json(sale)
}

//INSERT
saleControllers.insertSale = async (req, res) =>{
    const {idShoppingCart, state} = req.body;
    const newSale = new saleModels({idShoppingCart, state})
    await newSale.save()
    res.json({message: "sale saved"})
}

//DELETE
saleControllers.deleteSale = async (req, res) => {
    await saleModels.findByIdAndDelete(req.params.id);
    res.json({message: "sale deleted"});
}

//UPDATE
saleControllers.updateSale = async (req, res) => {
    const {idShoppingCart, state} = req.body;
    const updatedSale = await saleModels.findByIdAndUpdate(req.params.id, {idShoppingCart, state}, {new: true})
    res.json({message: "sale updated"});
}

export default saleControllers;