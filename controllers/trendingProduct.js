import trendingModel from "../models/trendingModel.js"


//Create Trending product (Admin) => /api/v1/admin/trending-product/new
export const createTrendingProductController = async(req,res) => {
    const trending = await trendingModel.create(req.body)
    
    try {
        if(trending){
            res.status(200).send({
                success: true,
                message: "Trending Product created successfully",
                trending
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
    const trendings = await trendingModel.find({})
    const productsCount = await trendingModel.countDocuments();
    
    try {
        if(trendings){
            setTimeout(() => {
                res.json({
                    success: true,
                    message:"All products retrieved",
                    productsCount,
                    trendings
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
        
    const trendings = await trendingModel.find();

    setTimeout(() => {
        res.status(200).json({
            success: true,
            trendings
        })
    }, 8000);
}

//Get single Trending product details   => /api/v1/product/trending-product/:id
export const getSingleTrendingProductController = async(req, res, next) => {
    const trending = await trendingModel.findById(req.params.id);
    try {
        res.status(200).json({
            success: true,
            trending
        })
    } catch (error) {
        console.log(error)
        if(!trending) {
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
    let trending = await trendingModel.findById(req.params.id);

    try {
        trending = await trendingModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            trending
        });
    } catch (error) {
        console.log(error)
        if (!trending) {
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
    const trending = await trendingModel.findByIdAndDelete(req.params.id);

    try {
        res.status(200).json({
            success: true,
            message: 'Product is deleted'
        })
    } catch (error) {
        console.log(error)
        if (!trending) {
            res.status(404).send({
                success: false,
                message: 'Product not found',
                error
            })
        }
    }
}