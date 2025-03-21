const brandControllers = {};
import brandModels from "../models/Brand.js"

//SELECT
brandControllers.getBrand = async (req, res) => {
    const brand = await brandModels.find()
    res.json(brand)
}

//INSERT
brandControllers.insertBrand = async (req, res) => {
    const {brandName, description} = req.body;
    const newBrand = new brandModels({brandName, description})
    await newBrand.save()
    res.json({message: "brand saved"});
}

//DELETE
 brandControllers.deleteBrand = async (req, res) => {
    await brandModels.findByIdAndDelete(req.params.id);
    res.json({message: "brand deleted"});
}

//UPDATE
brandControllers.updateBrand = async (req, res) => {
    const {brandName, description} = req.body;
    const updateBrand = await brandModels.findByIdAndUpdate(req.params.id, {brandName, description}, {new: true})
    res.json({message: "brand updated"});
}

export default brandControllers;