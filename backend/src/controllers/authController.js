// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const router = express.Router();

// Configuración de MongoDB (usando tu string de conexión)
const MONGODB_URI = "mongodb+srv://enriquechavarriacardoza:12345678Ricaldone+edu+sv@cluster1b.xsfdj.mongodb.net/HELPYCARE?retryWrites=true&w=majority&appName=Cluster1B";

// Función para conectar a MongoDB
async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  return client.db('HELPYCARE');
}

// Ruta para login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email y contraseña son requeridos'
      });
    }

    // Conectar a la base de datos
    const db = await connectToDatabase();
    
    // Buscar usuario en la colección de empleados
    const employee = await db.collection('employees').findOne({ email: email });
    
    // Buscar usuario en la colección de clientes si no es empleado
    let user = employee;
    let userType = 'employee';
    
    if (!employee) {
      const client = await db.collection('clients').findOne({ email: email });
      user = client;
      userType = 'client';
    }

    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({
        message: 'Credenciales inválidas'
      });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Credenciales inválidas'
      });
    }

    // Generar token JWT
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        userType: userType
      },
      process.env.JWT_SECRET || 'clavesecreta123',
      { expiresIn: '24h' }
    );

    // Respuesta exitosa
    res.json({
      message: 'Login exitoso',
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: userType === 'employee' ? 'admin' : 'client',
        userType: userType
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
});

// Ruta para registro de clientes
router.post('/register-client', async (req, res) => {
  try {
    const { name, email, password, dui, birthdate, gender } = req.body;

    // Validaciones
    if (!name || !email || !password || !dui) {
      return res.status(400).json({
        message: 'Todos los campos son requeridos'
      });
    }

    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Verificar si el email ya existe
    const existingUser = await db.collection('clients').findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: 'El email ya está registrado'
      });
    }

    // Verificar si el DUI ya existe
    const existingDUI = await db.collection('clients').findOne({ dui: dui });
    if (existingDUI) {
      return res.status(400).json({
        message: 'El DUI ya está registrado'
      });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear nuevo cliente
    const newClient = {
      name,
      email,
      password: hashedPassword,
      dui,
      birthdate: birthdate ? new Date(birthdate) : null,
      gender: gender || 'Masculino',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insertar en la base de datos
    const result = await db.collection('clients').insertOne(newClient);

    res.status(201).json({
      message: 'Cliente registrado exitosamente',
      clientId: result.insertedId
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
});

// Ruta para registro de empleados
router.post('/register-employee', async (req, res) => {
  try {
    const { name, email, password, dui, birthdate, gender } = req.body;

    // Validaciones
    if (!name || !email || !password || !dui) {
      return res.status(400).json({
        message: 'Todos los campos son requeridos'
      });
    }

    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Verificar si el email ya existe
    const existingUser = await db.collection('employees').findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: 'El email ya está registrado'
      });
    }

    // Verificar si el DUI ya existe
    const existingDUI = await db.collection('employees').findOne({ dui: dui });
    if (existingDUI) {
      return res.status(400).json({
        message: 'El DUI ya está registrado'
      });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear nuevo empleado
    const newEmployee = {
      name,
      email,
      password: hashedPassword,
      dui,
      birthdate: birthdate ? new Date(birthdate) : null,
      gender: gender || 'Masculino',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Insertar en la base de datos
    const result = await db.collection('employees').insertOne(newEmployee);

    res.status(201).json({
      message: 'Empleado registrado exitosamente',
      employeeId: result.insertedId
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
});

module.exports = router;