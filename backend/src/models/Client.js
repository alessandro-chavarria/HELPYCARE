/*
CAMPOS:
name,
email,
address,
dui,
phoneNumber,
password
*/

import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          "Por favor, ingrese un correo electrónico válido",
        ]
    },
    address: {
        type: String,
        require: true,
        maxLength: 250
    },
    dui: {
        type: String,
        default: null, 
        match: [/^[0-9]{8}-[0-9]{1}$/, "El formato del DUI debe ser 12345678-9"]
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [
          /^[0-9]{8}$/,
          "El teléfono debe contener exactamente 8 dígitos numéricos"
        ]
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    }
}, {
    timestamps: true,
    strict: false
});

export default model ("client", clientSchema);