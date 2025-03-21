const productControllers = {};
import { populate } from "dotenv";
import productModels from "../models/Product.js"

//SELECT CON ID 
productControllers.getProduct = async (req, res) =>{
    const product = await productModels.find().populate("idBrand");
    res.json(product)
}

//INSERT
productControllers.insertProduct = async (req, res) =>{
    const {name, price, description, stock, idBrand} = req.body;
    const newProduct = new productModels({name, price, description, stock, idBrand})
    await newProduct.save()
    res.json({message: "product saved"})
}

//DELETE
productControllers.deleteProduct = async (req, res) => {
    await productModels.findByIdAndDelete(req.params.id);
    res.json({message: "product deleted"});
}

//UPDATE
productControllers.updateProduct = async (req, res) => {
    const {name, price, description, stock, idBrand} = req.body;
    const updatedProduct = await productModels.findByIdAndUpdate(req.params.id, {name, price, description, stock, idBrand}, {new: true})
    res.json({message: "product updated"});
}

export default productControllers;