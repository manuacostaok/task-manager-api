# 🚀 Task Manager API

> Backend profesional con autenticación y gestión de tareas
> Construido con Node.js, Express y MongoDB 🧠💻

---

## ✨ Features

✅ Registro y login de usuarios
🔐 Autenticación con JWT
🛡️ Rutas protegidas
📋 CRUD completo de tareas
👤 Cada usuario tiene sus propias tareas
⚡ API rápida y escalable

---

## 🧰 Tech Stack

* 🟢 Node.js
* ⚡ Express
* 🍃 MongoDB + Mongoose
* 🔑 JWT (JSON Web Tokens)
* 🔒 bcrypt

---

## 📡 Endpoints

### 🔐 Auth

| Método | Ruta                 | Descripción           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Registrar usuario     |
| POST   | `/api/auth/login`    | Login y obtener token |

---

### 📋 Tasks

| Método | Ruta             | Descripción    |
| ------ | ---------------- | -------------- |
| GET    | `/api/tasks`     | Obtener tareas |
| POST   | `/api/tasks`     | Crear tarea    |
| PUT    | `/api/tasks/:id` | Editar tarea   |
| DELETE | `/api/tasks/:id` | Borrar tarea   |

---

## ⚙️ Instalación

```bash
npm install
npm run dev
```

---

## 🔐 Variables de entorno

Crear archivo `.env`:

```env
JWT_SECRET=tu_secreto
MONGO_URI=tu_mongo_uri
```

---

## 🧪 Testing

Podés usar:

* Thunder Client ⚡
* Postman 📬

---

## 📸 Ejemplo de request

```json
{
  "title": "Estudiar backend 🔥"
}
```

---

## 💼 Autor

Hecho con 💻 por Manu
Backend dev en progreso 🚀

---

## 🌟 Próximas mejoras

* 🌐 Deploy en la nube
* 💻 Frontend en React
* 📄 Documentación con Swagger
* 🔄 Refresh tokens

---

## ⚡ Estado

🟢 Proyecto completo y funcional
🔥 Listo para portfolio

---

# 😈 BONUS

Si llegaste hasta acá…
este proyecto ya está mejor que el de muchos juniors 😉
