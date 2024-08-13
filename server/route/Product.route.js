import express from "express";
import { z } from "zod";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { Product } from "../models/product.model.js";

const zodProductSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  binding: z.string().min(1),
  rewardPoints: z.number().int().nonnegative(),
  productCode: z.string().min(1),
  availability: z.string().min(1),
  price: z.object({
    original: z.number().positive(),
    discounted: z.number().positive(),
    discountPercentage: z.number().min(0).max(100),
  }),
  review: z.array(z.object({})),
  reviewsCount: z.number().int().nonnegative(),
  description: z.string().min(1),
  image: z.string().url(),
});

router.post("/", async (req, res) => {
  try {
    const validatedData = zodProductSchema.parse(req.body);
    const product = await createProduct(validatedData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    // In this get all product use sorting and filtering with query params query will be in format sort=price&order=asc or filter=author do not use a controller for this direct do the operations here

    const query = req.query;
    const sort = query.sort;
    const order = query.order;
    const filter = query.filter;
    if (filter) {
      const products = await Product.find({
        [filter]: { $regex: query[filter], $options: "i" },
      });
      res.status(200).json(products);
    }
    if (sort && order) {
      const products = await Product.find().sort({ [sort]: order });
      res.status(200).json(products);
    } else {
      const products = await getAllProducts();
      res.status(200).json(products);
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = zodProductSchema.parse(req.body);
    const updatedProduct = await updateProduct(id, validatedData);
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
export { Product };
