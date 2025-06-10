import mongoose from "mongoose";
import { config } from "./config.js";

const { URI } = config.db;

// Conexión con manejo de errores
try {
  await mongoose.connect(URI);
  console.log("MongoDB connected:", URI);
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});

connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

connection.on("error", (error) => {
  console.error("DB error:", error);
});

// Exportar la conexión para reutilizarla
export default connection;