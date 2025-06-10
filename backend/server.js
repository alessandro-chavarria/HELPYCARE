require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración mejorada de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging mejorado
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de salud del servidor
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Middleware de manejo de errores mejorado
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${new Date().toISOString()}`, {
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    path: req.path,
    method: req.method
  });

  const statusCode = err.statusCode || 500;
  const response = {
    message: err.message || 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  };

  res.status(statusCode).json(response);
});

// Iniciar servidor con manejo de errores
const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Frontend: ${corsOptions.origin}`);
});

// Manejo de cierre elegante
process.on('SIGTERM', () => {
  console.log('🔴 Recibido SIGTERM. Cerrando servidor...');
  server.close(() => {
    console.log('🛑 Servidor cerrado');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🔴 Recibido SIGINT. Cerrando servidor...');
  server.close(() => {
    console.log('🛑 Servidor cerrado');
    process.exit(0);
  });
});

module.exports = app;