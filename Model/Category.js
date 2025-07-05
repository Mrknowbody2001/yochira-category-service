import e from "express";
import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema(
  
//   {
//     name: { type: String, required: true, unique: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Category", categorySchema);

const CategorySchema = new mongoose.Schema({
  categoryId: { type: String, unique: true }, // ← formatted ID
  name: String,
  description: String,
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

export default mongoose.model("Category", CategorySchema);