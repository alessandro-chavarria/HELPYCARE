/*
CAMPOS:
comment,
rating,
idClient
*/

import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    comment: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "client",
        require: true
    }

}, {
    timestamps: true,
    strict: false
});

export default model("comment", commentSchema);