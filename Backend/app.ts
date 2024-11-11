import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";


dotenv.config({ path: './routes/.env'});

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";
const cors = require('cors')
const app = express();



app.use(cors({
  origin: 'http://localhost:3000/login', // permite solicitudes desde el frontend
  credentials: true // si usas cookies o autenticación basada en sesiones
}));

app.use(express.json());

app.use("/api", router);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
