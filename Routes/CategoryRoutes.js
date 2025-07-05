import express from "express";
import {
  createMainCategory,
  deleteMainCategory,
  updateMainCategory,
  getAllMainCategories,
  getOneMainCategory,
} from "../Controllers/CategoryController.js";

const router = express.Router();

// main category routes
router.post("/create-main", createMainCategory);
router.delete("/delete-main/:id", deleteMainCategory);
router.put("/update-main/:id", updateMainCategory);
router.get("/get-all-main", getAllMainCategories);
router.get("/get-one-main/:id", getOneMainCategory);

export default router;
