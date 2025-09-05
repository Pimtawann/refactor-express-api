import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const ProductRepository = {
    findAll: async (query={}, limit = 10) => {
        return await db.collection("products").find(query).limit(limit).toArray();
    },

    findById: async (id) => {
        return await db.collection("products").findOne({ _id: new ObjectId (id) });
    },

    create: async ({name, price, image, description, category}) => {
        const productData = { name, price, image, description, category, created_at: new Date() };
        return await db.collection("products").insertOne(productData);
    },

    update: async (id, {name, price, image, description, category}) => {
        const newProductData = { name, price, image, description, category, modified_at: new Date() };
        return await db.collection("products").updateOne({ _id: id }, { $set: newProductData });
    },

    delete: async (id) => {
        return await db.collection("products").deleteOne({ _id: new ObjectId (id) });
    }
}

export default ProductRepository;