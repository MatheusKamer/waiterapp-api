import path from "node:path";

import { Router } from "express";
import multer from "multer";

import { Product } from "./app/models/Product";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProducts } from "./app/useCases/products/createProducts";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProducts);

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
