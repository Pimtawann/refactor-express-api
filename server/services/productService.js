import ProductRepository from "../repositories/productRepository";

const ProductService = {
    getAllProducts: async ({keywords, category}) => {
        const query = {};
        if (keywords) query.name = new RegExp(keywords, "i");
        if (category) query.category = new RegExp(category, "i");

        return await ProductRepository.find(query).limit(10).toArray();
    },

    getProductById: async (id) => {
        return await ProductRepository.findOne(id);

    },

    createProduct: async (name, price, image, description, category) => {
        const productData = { name, price, image, description, category, created_at: new Date() };
        return await ProductRepository.insertOne(productData);
    },

    updateProduct: async (id, {name, price, image, description, category}) =>{
        const newProductData = { name, price, image, description, category, modified_at: new Date() };
        return await ProductRepository.updateOne(id, { $set: newProductData });
    },

    deleteProduct: async (id) => {
        return await ProductRepository.deleteOne(id);
    }
}

export default ProductService;