import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// crear tarea
router.post("/", authMiddleware, createTask);

// obtener tareas
router.get("/", authMiddleware, getTasks);

// editar tarea
router.put("/:id", authMiddleware, updateTask);

// borrar tarea
router.delete("/:id", authMiddleware, deleteTask);

export default router;