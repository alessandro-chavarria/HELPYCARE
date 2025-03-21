const commentControllers = {};
import { populate } from "dotenv";
import commentModels from "../models/Comment.js";

//SELECT CON ID 
commentControllers.getComment = async (req, res) =>{
    const comment = await commentModels.find().populate("idClient");
    res.json(comment)
}

//INSERT
commentControllers.insertComment = async (req, res) =>{
    const {comment, rating, idClient} = req.body;
    const newComment = new commentModels({comment, rating, idClient})
    await newComment.save()
    res.json({message: "comment saved"})
}

//DELETE
commentControllers.deleteComment = async (req, res) => {
    await commentModels.findByIdAndDelete(req.params.id);
    res.json({message: "comment deleted"});
}

//UPDATE
commentControllers.updateComment = async (req, res) => {
    const {comment, rating, idClient} = req.body;
    const updatedComment = await commentModels.findByIdAndUpdate(req.params.id, {comment, rating, idClient}, {new: true})
    res.json({message: "comment updated"});
}

export default commentControllers;