import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
    //unique: true
  },

  // para no hacer un delete total, solo ocultar para poder despues tener un registro detallado en el futuro
  // active:{
  //   type: Boolean,
  //   default: true
  // }
});

const Category = model("Category", CategorySchema);

export default Category;