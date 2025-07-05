import express from "express";
import {
  createSubCategory,
  deleteSubCategory,
  updateSubCategory,
  getAllSubCategories,
  getOneSubCategory,
} from "../Controllers/CategoryController.js";

const router = express.Router();

// subcategory routes
router.post("/create-sub", createSubCategory);
router.delete("/delete-sub/:id", deleteSubCategory);
router.put("/update-sub/:id", updateSubCategory);
router.get("/get-all-sub", getAllSubCategories);
router.get("/get-one-sub/:id", getOneSubCategory);

export default router;
