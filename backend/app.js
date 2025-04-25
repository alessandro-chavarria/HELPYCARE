import express from "express";
import brandRoutes from "./src/routes/brand.js";
import clientRoutes from "./src/routes/client.js";
import commentRoutes from "./src/routes/comment.js";
import employeeRoutes from "./src/routes/employee.js";
import productRoutes from "./src/routes/product.js";
import shoppingCartRoutes from "./src/routes/shoppingCart.js";
import saleRoutes from "./src/routes/sale.js";
import loginRoutes from "./src/routes/login.js";

const app = express();
app.use (express.json());

app.use("/api/brand", brandRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/product", productRoutes);
app.use("/api/shoppingCart", shoppingCartRoutes);
app.use("/api/sale", saleRoutes);

app.use("/api/login", loginRoutes);

export default App;