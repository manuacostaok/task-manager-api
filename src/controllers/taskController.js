import Task from "../models/Task.js";

// crear tarea
export const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      user: req.user.id,
    });

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// obtener tareas del usuario
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// actualizar tarea
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// eliminar tarea
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task) {
      return res.status(404).json({ msg: "Tarea no encontrada" });
    }

    res.json({ msg: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};