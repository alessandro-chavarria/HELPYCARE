/*
CAMPOS:
idClient,
products,
total,
state
*/

import { Schema, Types, model  } from "mongoose";

const shoppingCartSchema = new Schema({
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "client",
        require: true
    },
    products: [{
        idProduct: {
            type: Schema.Types.ObjectId,
            ref: "product",
            require: true
        },
        amount: {
            type: Number,
            require: true,
            min: 1
        },
        subtotal: {
            type: Number,
            require: true,
            min: 0
        }
    }],
    total: {
        type: Number,
        require: true,
        min: 0
    },
    state: {
        type: String,
        enum: {
            values: ["Pending", "Paid"],
            message: "El estado del pedido debe de ser 'Pending' o 'Paid'"
        },
        default: "Pending"
    }
}, {
    timestamps: true,
});

export default model("shoppingCart", shoppingCartSchema);