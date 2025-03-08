import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const products = await Product.find()
      .where("category")
      .equals(req.params.categoryId);

    res.status(201).json(products);
  } catch {
    res.sendStatus(500);
  }
}
