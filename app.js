import express from "express";
import mongoose from "mongoose";
// Routes
import CategoryRoutes from "./Routes/CategoryRoutes.js";
import SubCategoryRoutes from "./Routes/subCategoryRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

//
const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({ origin: "http://localhost:5173" }));

//! error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

dotenv.config();

app.use("/api/category", CategoryRoutes);
app.use("/api/subcategory", SubCategoryRoutes);

//! Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

//! starr server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
