import { model, Schema } from "mongoose";

export const Category = model(
  "Category",
  new Schema({
    name: {
      type: String,
      required: "Name is required",
    },
    icon: {
      type: String,
      required: "Icon is required",
    },
  })
);
