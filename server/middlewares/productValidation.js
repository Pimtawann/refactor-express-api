const ProductValidation = {
    validateProduct: (req, res, next) => {
        const {name, price, image, description, category} = req.body;

        if(!name || typeof name !== "string"){
            return res.status(400).json({message: "name is required and must be a string"})
        }

        if(typeof price !== "number" || price <= 0){
            return res.status(400).json({message: "price is required and must be a number > 0"})
        }

        if(!image || typeof image !== "string"){
            return res.status(400).json({message: "image is required and must be a string"})
        }

        if(!description || typeof description !== "string" || description.length < 10){
            return res.status(400).json({message: "description is required and must be a string (min 10 chars)"})
        }

        if(!category || typeof category !== "string"){
            return res.status(400).json({message: "category is required and must be a string"})
        }
        
        next();

    }
}

export default ProductValidation;