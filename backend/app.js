import express from "express";
import brandRoutes from "./src/routes/brand.js"
import clientRoutes from "./src/routes/client.js"

const app = express();
app.use (express.json());

app.use("/api/brand", brandRoutes);
app.use("/api/client", clientRoutes)

export default app;