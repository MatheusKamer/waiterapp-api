import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function cancelOrder(req: Request, res: Response) {
  try {
    await Order.findByIdAndUpdate(req.params.orderId, { status: "CANCELLED" });

    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
}
