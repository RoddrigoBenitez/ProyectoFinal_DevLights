import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  //a futuro se generara los Salers
  salers_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  
  image: {
    type: String,
    default: "",
  },
});

const Product = model("Product", productSchema);

export default Product;