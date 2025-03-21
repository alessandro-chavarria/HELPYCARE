/*
CAMPOS: 
brandName,
description
*/

import { Schema, model } from "mongoose";

const brandSchema = new Schema({
    brandName: {
        type: String,
        require: true,
        maxLength: 100
    },
    description: {
        type: String,
        require: true,
        maxLength: 250
    }
}, {
    timestamps: true,
    strict: false
});

export default model("brand", brandSchema);