import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

// message affiché de base
app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

// si /api/ alors redirect à l'adresse de base
app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

// import et utilise
import { productsRouter } from "./routes/products.mjs";
app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Exampl app listening on port http://localhost:${port}/`);
});
