import ProductModel from "../models/ProductModel.js"

//Create new product (Admin) => /api/v1/product/admin/product/new
export const createProductController = async (req, res) => {
    const product = await ProductModel.create(req.body)

    try {
        if (product) {
            res.status(200).send({
                success: true,
                message: "Product created successfully",
                product
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in creating product',
            error
        })
    }
}

//Get all product => /api/v1/product/products
export const getProductController = async (req, res) => {
    const products = await ProductModel.find({})
    const productsCount = await ProductModel.countDocuments();

    try {
        if (products) {
            setTimeout(() => {
                res.json({
                    success: true,
                    message: "All products retrieved",
                    productsCount,
                    products
                })
            }, 5000)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Product does not exist",
            error
        })
    }
}

// search product => /api/v1/serach
export const searchProductController = async (req, res) => {
    try {
        const { keyword } = req.params
        const results = await ProductModel.find({
            $or: [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        }).select("-photo");
        res.json(results);
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: 'Error In Search Product API',
            error
        })
    }
}


//Get all product (Admin) => /api/v1/product/admin/products
export const getAdminProductsController = async (req, res, next) => {

    const products = await ProductModel.find();

    setTimeout(() => {
        res.status(200).json({
            success: true,
            products
        })
    }, 8000);
}

//Get single product details   => /api/v1/product/product/:id
export const getSingleProductController = async (req, res, next) => {
    const product = await ProductModel.findById(req.params.id)

    try {
        res.status(200).json({
            success: true,
            product,
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

//Update Product (Admin)  => /api/v1/product/admin/product/:id
export const updateProductController = async (req, res, next) => {
    let product = await ProductModel.findById(req.params.id);

    try {
        product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
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

//Delete Product (Admin)  => /api/v1/product/admin/product/:id
export const deleteProductController = async (req, res, next) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

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