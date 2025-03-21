const clientControllers = {};
import clientModels from"../models/Client.js";

//SELECT
clientControllers.getClient = async (req, res) => {
    const client = await clientModels.find()
    res.json(client)
}

//INSERT
clientControllers.insertClient = async (req, res) => {
    const {name, email, address, dui, phoneNumber, password} = req.body;
    const newClient = new clientModels({name, email, address, dui, phoneNumber, password})
    await newClient.save()
    res.json({message: "client saved"});
}

//DELETE
clientControllers.deleteClient = async (req, res) => {
    await clientModels.findByIdAndDelete(req.params.id);
    res.json({message: "client deleted"});
}

//UPDATE
clientControllers.updateClient = async (req, res) => {
    const {name, email, address, dui, phoneNumber, password} = req.body;
    const updateClient = await clientModels.findByIdAndUpdate(req.params.id, {name, email, address, dui, phoneNumber, password}, {new: true})
    res.json({message: "client updated"});
}

export default clientControllers;