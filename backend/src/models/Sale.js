/*
CAMPOS:
idShoppingCart,
state
*/

 import { Schema, model } from "mongoose";

 const saleSchema = new Schema({
    idShoppingCart: {
        type: Schema.Types.ObjectId,
        ref: "shoppingCart",
        require: true
    },
    state: {
        type: String,
        enum: {
            values: ["Pending", "Paid"],
            message: "El estado del pedido debe de ser 'Pending' o 'Paid'",
        },
        default: "Paid"
    }
 }, {
    timestamps: true,
 });

 export default model("sale", saleSchema);