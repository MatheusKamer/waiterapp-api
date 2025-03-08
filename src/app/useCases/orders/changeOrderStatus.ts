import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE", "CANCELLED"].includes(status)) {
      res.status(400).json({ message: "Invalid status" });
    }

    await Order.findByIdAndUpdate(req.params.orderId, { status });

    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
}
