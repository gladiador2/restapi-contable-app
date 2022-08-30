import express from "express";
import morgan from "morgan";
// Routes
import usuariosRoutes from "./routes/usuario.routes";
const app = express();
const cors = require('cors');
// Settings
app.set("port", 4000);
  
// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors()); 

// Routes
app.use("/api/usuarios", usuariosRoutes);
export default app;
