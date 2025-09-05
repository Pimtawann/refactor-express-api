import express from "express";
import ProductValidation from "../middlewares/productValidation.js";
import ProductController from "../controllers/productController.js";

const productRoute = express.Router();

// Products routes
productRoute.get("/", ProductController.getAllProducts)

productRoute.get("/:id", ProductController.getProductById );

productRoute.post("/", ProductValidation.validateProduct, ProductController.createProduct);

productRoute.put("/:id", ProductValidation.validateProduct, ProductController.updateProduct);

productRoute.delete("/:id", ProductController.deleteProduct);

export default productRoute;
