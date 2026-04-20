import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import { authMiddleware } from "./src/middleware/authMiddleware.js";
import taskRoutes from "./src/routes/taskRoutes.js";



const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// conectar base de datos
connectDB();

// ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "Accediste a ruta protegida 😎",
    user: req.user
  });
});
const PORT = process.env.PORT || 3000;

// levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
