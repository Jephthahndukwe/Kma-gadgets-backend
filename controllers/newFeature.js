import newFeatureModel from "../models/newFeatureModel.js";

//Create new feature product (Admin) => /api/v1/admin/feature-product/new
export const createNewFeatureController = async(req,res) => {
    const product = await newFeatureModel.create(req.body)
    
    try {
        if(product){
            res.status(200).send({
                success: true,
                message: "New Feature Product created successfully",
                product
            })
        }
    }  catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in creating product',
            error
        })
    }
}

//Get all new feature product => /api/v1/product/feature-products
export const getNewFeatureController = async(req, res) => {
    const products = await newFeatureModel.find({})
    const productsCount = await newFeatureModel.countDocuments();
    
    try {
        if(products){
            setTimeout(() => {
                res.json({
                    success: true,
                    message:"All products retrieved",
                    productsCount,
                    products
                })
            }, 5000)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:"Product does not exist",
            error
        })
    }
}

//Get all product (Admin) => /api/v1/product/admin/feature-products
export const getAdminNewFeatureController = async (req, res, next) => {
        
    const products = await newFeatureModel.find();

    setTimeout(() => {
        res.status(200).json({
            success: true,
            products
        })
    }, 8000);
}

//Get single new feature product details   => /api/v1/product/feature-product/:id
export const getSingleNewFeatureController = async(req, res, next) => {
    const product = await newFeatureModel.findById(req.params.id);
    try {
        res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error)
        if(!product) {
            res.status(404).send({
                success: false,
                message: 'Product not found',
                error
            })
        }
    }
}

//Update New Feature Product (Admin)  => /api/v1/product/admin/feature-product/:id
export const updateNewFeatureController = async(req, res, next) => {
    let product = await newFeatureModel.findById(req.params.id);

    try {
        product = await newFeatureModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        console.log(error)
        if (!product) {
            console.log(error)
            res.status(404).send({
                success: false,
                message: 'Product not found',
                error
            })
        }
    }
}

//Delete New Feature Product (Admin)  => /api/v1/product/admin/feature-product/:id
export const deleteNewFeatureController = async(req, res, next) => {
    const product = await newFeatureModel.findByIdAndDelete(req.params.id);

    try {
        res.status(200).json({
            success: true,
            message: 'Product is deleted'
        })
    } catch (error) {
        console.log(error)
        if (!product) {
            res.status(404).send({
                success: false,
                message: 'Product not found',
                error
            })
        }
    }
}