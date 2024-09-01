import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 4000;

// Configurar Pug como motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.render("index", { title: "Mi Aplicación", message: "¡Hola Mundo!" });
});

// Rutas no existentes
app.get("/*", (req, res) => {
  res.send("Página no encontrada!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
