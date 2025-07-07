import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    categoryName: { type: String },
    subCategoryId: { type: String }, 
  },
  { timestamps: true }
);

export default mongoose.model("SubCategory", subCategorySchema);
