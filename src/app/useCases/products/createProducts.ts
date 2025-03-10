import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, price, ingredients, category, description } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,
    });

    res.status(201).json(product);
  } catch {
    res.sendStatus(500);
  }
}
