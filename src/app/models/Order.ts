import { model, Schema } from "mongoose";

export const Order = model(
  "Order",
  new Schema({
    table: {
      type: String,
      required: "Table is required",
    },
    status: {
      type: String,
      enum: ["WAITING", "IN_PRODUCTION", "DONE", "CANCELED"],
      default: "WAITING",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    products: {
      required: "Products are required",
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: "Product is required",
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  })
);
