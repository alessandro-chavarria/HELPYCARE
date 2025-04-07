//Vamos a importa el archivo app.js
import app from "./app.js";
import "./database.js";
import { config } from "./src/config.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Creo una funcion que se encarga de ejecutar el servidor 
async function main() {
    app.listen(config.server.port);
    console.log("Server is running");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Ejecutamos todo
main();