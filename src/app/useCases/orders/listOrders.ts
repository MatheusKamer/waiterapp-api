import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: "asc" })
      .populate("products.product");

    res.status(201).json(orders);
  } catch {
    res.sendStatus(500);
  }
}
