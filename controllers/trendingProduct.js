import trendingModel from "../models/trendingModel.js"


//Create Trending product (Admin) => /api/v1/admin/trending-product/new
export const createTrendingProductController = async(req,res) => {
    const product = await trendingModel.create(req.body)
    
    try {
        if(product){
            res.status(200).send({
                success: true,
                message: "Trending Product created successfully",
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

//Get all Trending product => /api/v1/product/trending-products
export const getTrendingProductController = async(req, res) => {
    const products = await trendingModel.find({})
    const productsCount = await trendingModel.countDocuments();
    
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

//Get all product (Admin) => /api/v1/product/admin/trending-products
export const getAdminTrendingProductController = async (req, res, next) => {
        
    const products = await trendingModel.find();

    setTimeout(() => {
        res.status(200).json({
            success: true,
            products
        })
    }, 8000);
}

//Get single Trending product details   => /api/v1/product/trending-product/:id
export const getSingleTrendingProductController = async(req, res, next) => {
    const product = await trendingModel.findById(req.params.id);
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

//Update Trending Product (Admin)  => /api/v1/product/admin/trending-product/:id
export const updateTrendingProductController = async(req, res, next) => {
    let product = await trendingModel.findById(req.params.id);

    try {
        product = await trendingModel.findByIdAndUpdate(req.params.id, req.body, {
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

//Delete Trending Product (Admin)  => /api/v1/product/admin/trending-product/:id
export const deleteTrendingProductController = async(req, res, next) => {
    const product = await trendingModel.findByIdAndDelete(req.params.id);

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