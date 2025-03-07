import { Router } from "express";

import { Product } from "./app/models/Product";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

// List categories

router.get("/categories", listCategories);

// Create category

router.post("/categories", createCategory);

// List products

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Create product

router.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get products by category

router.get("/categories/:categoryId/products", async (req, res) => {
  const products = await Product.find({ category: req.params.categoryId });
  res.json(products);
});

// List orders

router.get("/orders", async (req, res) => {
  res.json([]);
});

// Create order

router.post("/orders", async (req, res) => {
  res.json({});
});

// Change order status

router.patch("/orders/:orderId", async (req, res) => {
  res.json({});
});

// Delete/cancel order

router.patch("/orders/:orderId", async (req, res) => {
  res.json({});
});
