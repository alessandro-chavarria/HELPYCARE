/*
CAMPOS:
name,
birthdate,
gender,
email,
dui,
password
*/

import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 250
    },
    birthdate: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true,
        maxLength: 9
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
    dui: {
      type: String,
      default: null, 
      match: [/^[0-9]{8}-[0-9]{1}$/, "El formato del DUI debe ser 12345678-9"]
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
}, {
    timestamps: true,
    strict: false
});

export default model("employee", employeeSchema);