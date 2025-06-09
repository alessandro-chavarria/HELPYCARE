import express from "express";
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
import cors from "cors";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './components/InicioSesion';
import RegistroCliente from './components/RegistroCliente';


const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true 
    })
)
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/registro-cliente" element={<RegistroCliente />} />
          {/* Otras rutas */}
        </Routes>
      </Router>
    );
  }
app.use (express.json());

app.use("/api/brand", brandRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/product", productRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/sale", saleRoutes);

app.use("/api/login", loginRoutes);s
app.use("/api/logout", logoutRoutes);

app.use("/api/registerEmployee", registerEmployeeRoutes);
app.use("/api/registerClient", registerClientRoutes);

export default app;