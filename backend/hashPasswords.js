// hashPasswords.js
const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://enriquechavarriacardoza:12345678Ricaldone+edu+sv@cluster1b.xsfdj.mongodb.net/HELPYCARE?retryWrites=true&w=majority&appName=Cluster1B";

async function hashExistingPasswords() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    const db = client.db('HELPYCARE');
    
    // Hashear contraseñas de empleados
    console.log('Hasheando contraseñas de empleados...');
    const employees = await db.collection('employees').find({}).toArray();
    
    for (const employee of employees) {
      if (employee.password && !employee.password.startsWith('$2a$')) {
        const hashedPassword = await bcrypt.hash(employee.password, 12);
        await db.collection('employees').updateOne(
          { _id: employee._id },
          { $set: { password: hashedPassword, updatedAt: new Date() } }
        );
        console.log(`✅ Password actualizado para empleado: ${employee.email}`);
      }
    }
    
    // Hashear contraseñas de clientes
    console.log('Hasheando contraseñas de clientes...');
    const clients = await db.collection('clients').find({}).toArray();
    
    for (const clientUser of clients) {
      if (clientUser.password && !clientUser.password.startsWith('$2a$')) {
        const hashedPassword = await bcrypt.hash(clientUser.password, 12);
        await db.collection('clients').updateOne(
          { _id: clientUser._id },
          { $set: { password: hashedPassword, updatedAt: new Date() } }
        );
        console.log(`✅ Password actualizado para cliente: ${clientUser.email}`);
      }
    }
    
    console.log('🎉 Todas las contraseñas han sido hasheadas exitosamente');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

// Ejecutar el script
hashExistingPasswords();
