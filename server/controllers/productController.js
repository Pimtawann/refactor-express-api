import ProductService from "../services/productService.js";

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const {keywords, category} = req.body;
            const allProducts = await ProductService.getAllProducts({keywords, category})
            
            return res.json({ data: allProducts });
        } catch (error) {
            return res.json({ message: `${error}` });
        }
    },

    getProductById: async (req, res) => {
        try {
            const productById = await ProductService.getProductById(req.params.id);
            return res.json({ data: productById})
        } catch (error) {
            return res.json({ message: `${error}` });
        }
    },

    createProduct: async (req, res) => {
        try {
            const {name, price, image, description, category} = req.body;
            const newProductData = await ProductService.createProduct({name, price, image, description, category, created_at: new Date()});

            return res.json({message: `Product Id ${newProductData.insertedId} has been created successfully`})

        } catch (error) {
            return res.json({ message: `${error}` });

        }
    },

    updateProduct: async (req, res) => {
        try {
            const {name, price, image, description, category} = req.body;
            await ProductService.updateProduct(req.params.id, { name, price, image, description, category, modified_at: new Date() });

            return res.json({
                message: `Movie record ${req.params.id} has been updated successfully`,
            })
        } catch (error) {
            return res.json({ message: `${error}` });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await ProductService.deleteProduct(req.params.id);

            return res.json({
                message: `Movie record ${req.params.id} has been deleted successfully`,
              });
        } catch (error) {
            return res.json({ message: `${error}` });
        }
    }



}

export default ProductController;