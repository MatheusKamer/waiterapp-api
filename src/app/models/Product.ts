import { model, Schema } from "mongoose";

export const Product = model(
  "Product",
  new Schema({
    name: {
      type: String,
      required: "Name is required",
    },
    description: {
      type: String,
      required: "Description is required",
    },
    imagePath: {
      type: String,
      required: "Image path is required",
    },
    price: {
      type: Number,
      required: "Price is required",
    },
    ingredients: {
      required: "Ingredients are required",
      type: [
        {
          icon: {
            type: String,
            required: "Icon is required",
          },
          name: {
            type: String,
            required: "Name is required",
          },
        },
      ],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: "Category is required",
    },
  })
);
