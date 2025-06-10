import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config.js"; // Importación de configuración

// Importación de todas las rutas
import brandRoutes from "./src/routes/brand.js";
import clientRoutes from "./src/routes/client.js";
import commentRoutes from "./src/routes/comment.js";
import employeeRoutes from "./src/routes/employee.js";
import productRoutes from "./src/routes/product.js";
import shoppingCartRoutes from "./src/routes/shoppingCart.js";
import saleRoutes from "./src/routes/sale.js";
import loginRoutes from "./src/routes/login.js";
import registerEmployeeRoutes from "./src/routes/registerEmployee.js";
import registerClientRoutes from "./src/routes/registerClient.js";
import logoutRoutes from "./src/routes/logout.js";

// Inicialización de Express
const app = express();

// Función mejorada para conectar a MongoDB
const conectarBaseDeDatos = async () => {
  try {
    await mongoose.connect(config.db.URI);
    console.log("✅ MongoDB conectado exitosamente");
    
    // Eventos de conexión para monitoreo
    mongoose.connection.on("connected", () => {
      console.log("Mongoose conectado a la base de datos");
    });
    
    mongoose.connection.on("error", (err) => {
      console.error("Error en la conexión de Mongoose:", err);
    });
    
    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose desconectado");
    });
    
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); // Salir si no hay conexión a la DB
  }
};

// Ejecutar la conexión
await conectarBaseDeDatos();

// Configuración de CORS para desarrollo
const opcionesCORS = {
  origin: "http://localhost:5173", // Ajustar según tu frontend
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(opcionesCORS));

// Middlewares para manejo de JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de registro de solicitudes
app.use((req, res, next) => {
  console.log(`📩 Solicitud recibida: ${req.method} ${req.path}`);
  next();
});

// Sistema de rutas modularizado
const PREFIJO_API = "/api";
app.use(`${PREFIJO_API}/brand`, brandRoutes);
app.use(`${PREFIJO_API}/client`, clientRoutes);
app.use(`${PREFIJO_API}/comment`, commentRoutes);
app.use(`${PREFIJO_API}/employee`, employeeRoutes);
app.use(`${PREFIJO_API}/product`, productRoutes);
app.use(`${PREFIJO_API}/shoppingCart`, shoppingCartRoutes);
app.use(`${PREFIJO_API}/sale`, saleRoutes);
app.use(`${PREFIJO_API}/login`, loginRoutes);
app.use(`${PREFIJO_API}/logout`, logoutRoutes);
app.use(`${PREFIJO_API}/registerEmployee`, registerEmployeeRoutes);
app.use(`${PREFIJO_API}/registerClient`, registerClientRoutes);

// Ruta básica de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "API de HelpyCare funcionando correctamente" });
});

// Manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error("🔥 Error en la aplicación:", err.stack);
  res.status(500).json({ 
    error: "Algo salió mal!",
    mensaje: err.message || "Error desconocido"
  });
});

// Exportación del app configurado
export default app;