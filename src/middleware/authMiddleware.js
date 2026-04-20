import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: "No hay token" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "Token mal formado" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED:", decoded); // 👈 DEBUG

    req.user = decoded;

    next();

  } catch (error) {
    console.log(error); // 👈 MUY IMPORTANTE VER ESTO
    res.status(401).json({ msg: "Token inválido" });
  }
};