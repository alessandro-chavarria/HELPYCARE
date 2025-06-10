import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

// Configuración de rutas para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Cargar variables de entorno
const envConfig = dotenv.config({
  path: path.resolve(__dirname, '.env')
});

if (envConfig.error) {
  console.warn('⚠️  No se encontró archivo .env, usando valores por defecto');
}

// Configuración principal
export const config = {
  db: {
    URI: process.env.DB_URI || "mongodb://localhost:27017/helpcare",
  },
  server: {
    port: process.env.PORT || 4000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret_default",
    expiresIn: process.env.JWT_EXPIRES || "1h"
  },
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
};

if (!process.env.DB_URI) {
  console.warn('⚠️  DB_URI no está definido, usando valor por defecto');
}