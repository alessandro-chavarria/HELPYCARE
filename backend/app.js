import express from "express";
import brandRoutes from "./src/routes/brand.js"

const app = express();
app.use (express.json());

app.use("/api/brand", brandRoutes);

export default app;