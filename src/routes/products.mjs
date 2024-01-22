import express from "express";
import {
  products,
  getUniqueId,
  getProduct,
  updateProduct,
  removeProduct,
} from "../db/mock-product.mjs";
import { success } from "../db/helper.mjs";

// Définit l'express (middleware permettant de convertire du mjs en js)
const productsRouter = express();

// GET la liste entière des produits
productsRouter.get("/", (req, res) => {
  const message = "La liste des produits a bien été récupérée.";
  res.json(success(message, products));
});

// GET un produit spécific depuis son ID
productsRouter.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = getProduct();
  const message = `Le produit dont l'id vaut ${productId} a bien été récupéré.`;
  res.json(success(message, product));
});

// POST un nouveau produit, crée un produit depuis des informations donnée (name et price)
productsRouter.post("/", (req, res) => {
  const newId = getUniqueId();
  const createdProduct = {
    ...req.body,
    ...{ id: newId, created: new Date() },
  };
  products.push(createdProduct);
  const message = `Le produit ${createdProduct.name} avec l'id ${createdProduct.id} a bien été créé.`;
  res.json(success(message, createdProduct));
});

// PUT un produit, l'update par rapport au texte dans le json, et l'id du produit à updater est passé en paramètre
productsRouter.put("/:id", (req, res) => {
  let productId = req.params.id;
  const product = getProduct(productId);
  //console.log(product);
  const oldproductname = product.name;
  productId = parseInt(productId, 10);

  const updatedProduct = {
    id: productId,
    ...req.body,
    created: product.created,
  };
  updateProduct(productId, updatedProduct, products);
  const message = `Le produit ${oldproductname} avec l'id ${updatedProduct.id} a bien été modifier.`;
  res.json(success(message, updatedProduct));
});

// DELETE delete un produit en utilisant un ID en paramètre
productsRouter.delete("/:id", (req, res) => {
  let productId = req.params.id;
  productId = parseInt(productId, 10);

  let deletedProduct = getProduct(productId);

  removeProduct(productId);

  const message = `Le produit ${deletedProduct.name} avec l'id ${deletedProduct.id} a bien été deleter.`;
  res.json(success(message, products));
});

export { productsRouter };
