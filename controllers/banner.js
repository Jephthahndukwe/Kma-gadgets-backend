import bannerModel from "../models/bannerModel.js";


//Create Banner (Admin) => /api/v1/admin/banner/new
export const createBannerController = async(req,res) => {
    const banner = await bannerModel.create(req.body)
    
    try {
        if(banner){
            res.status(200).send({
                success: true,
                message: "Banner created successfully",
                banner
            })
        }
    }  catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in creating banner',
            error
        })
    }
}

//Get all Banner => /api/v1/product/banners
export const getBannerController = async(req, res) => {
    const banners = await bannerModel.find({})
    const bannersCount = await bannerModel.countDocuments();
    
    try {
        if(banners){
            setTimeout(() => {
                res.json({
                    success: true,
                    message:"All banners retrieved",
                    bannersCount,
                    banners
                })
            }, 5000)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message:"Banner does not exist",
            error
        })
    }
}

//Get all banner (Admin) => /api/v1/product/admin/banners
export const getAdminBannerController = async (req, res, next) => {
        
    const banners = await bannerModel.find();

    setTimeout(() => {
        res.status(200).json({
            success: true,
            banners
        })
    }, 5000);
}

//Update banner (Admin)  => /api/v1/product/admin/banner/:id
export const updateBannerController = async(req, res, next) => {
    let banner = await bannerModel.findById(req.params.id);

    try {
        banner = await bannerModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Banner updated successfully",
            banner
        });
    } catch (error) {
        console.log(error)
        if (!banner) {
            console.log(error)
            res.status(404).send({
                success: false,
                message: 'Banner not found',
                error
            })
        }
    }
}

//Delete Banner (Admin)  => /api/v1/product/admin/banner/:id
export const deleteBannerController = async(req, res, next) => {
    const banner = await bannerModel.findByIdAndDelete(req.params.id);

    try {
        res.status(200).json({
            success: true,
            message: 'Banner is deleted'
        })
    } catch (error) {
        console.log(error)
        if (!banner) {
            res.status(404).send({
                success: false,
                message: 'Banner not found',
                error
            })
        }
    }
}