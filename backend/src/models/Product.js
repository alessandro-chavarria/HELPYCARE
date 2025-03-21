/*
CAMPOS:
name,
price,
description,
stock,
idBrand
*/

import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 150
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description: {
        type: String, 
        require: true,
        maxLength: 250
    },
    stock: {
        type: Number,
        require: true,
        min: 0
    },
    idBrand: {
        type: Schema.Types.ObjectId,
        ref: "brand",
        require: true
    }
}, {
    timestamps: true,
    strict: false
});

export default model("product", productSchema);